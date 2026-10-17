import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { PointRule, PointsEntry, Project, ProjectProgress, Referral, Submission, SubmissionStatus } from "@/types";
import { projects as seedProjects } from "@/data/projects";
import { defaultRules, demoReferrals, levels } from "@/data/demo";

/**
 * ESTADO DEMONSTRATIVO em memória.
 * Nada aqui é persistido, validado ou confiável. Ao integrar o backend,
 * substitua estas ações por chamadas a serviços (ver src/services).
 */
const today = () => new Date().toLocaleDateString("pt-BR");
const uid = () => Math.random().toString(36).slice(2, 9);

const seedProgress: Record<string, ProjectProgress> = {
  p011: { projectId: "p011", status: "em_andamento", completedSteps: [0, 1], notes: "" },
};

const seedSubmissions: Submission[] = [
  { id: "s-ex1", projectId: "p041", images: [], description: "Meu seguidor de linha ficou rápido!", status: "enviado", date: "14/10/2026", author: "Pixel Brilhante" },
  { id: "s-ex2", projectId: "p071", images: [], description: "Usei 4 garrafas e 12 tampinhas.", status: "em_analise", date: "13/10/2026", author: "Chip Sorridente" },
  { id: "s-ex3", projectId: "p023", images: [], description: "O robô vibra e anda em círculos.", status: "enviado", date: "12/10/2026", author: "Volt Valente" },
];

interface Store {
  projects: Project[];
  progress: Record<string, ProjectProgress>;
  submissions: Submission[];
  points: PointsEntry[];
  rules: PointRule[];
  referrals: Referral[];
  confirmedPoints: number;
  pendingPoints: number;
  level: { current: (typeof levels)[number]; next?: (typeof levels)[number]; pct: number };
  getProgress: (id: string) => ProjectProgress;
  startProject: (id: string) => void;
  toggleStep: (id: string, step: number) => void;
  setNotes: (id: string, notes: string) => void;
  submitPhotos: (projectId: string, images: string[], description: string) => Submission;
  reviewSubmission: (id: string, status: SubmissionStatus, note?: string) => void;
  updateRule: (id: string, patch: Partial<PointRule>) => void;
  updateProject: (id: string, patch: Partial<Project>) => void;
  addProject: (p: Project) => void;
  setReferralStatus: (id: string, status: Referral["status"]) => void;
}

const Ctx = createContext<Store | null>(null);

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(seedProjects);
  const [progress, setProgress] = useState(seedProgress);
  const [submissions, setSubmissions] = useState<Submission[]>(seedSubmissions);
  const [points, setPoints] = useState<PointsEntry[]>([]);
  const [rules, setRules] = useState(defaultRules);
  const [referrals, setReferrals] = useState(demoReferrals);

  const getProgress = useCallback(
    (id: string) => progress[id] ?? { projectId: id, status: "nao_iniciado" as const, completedSteps: [], notes: "" },
    [progress],
  );

  const patchProgress = (id: string, fn: (p: ProjectProgress) => ProjectProgress) =>
    setProgress((s) => ({ ...s, [id]: fn(s[id] ?? { projectId: id, status: "nao_iniciado", completedSteps: [], notes: "" }) }));

  const ruleValue = (id: string) => {
    const r = rules.find((x) => x.id === id);
    return r && r.active ? r.points : 0;
  };

  const store = useMemo<Store>(() => {
    const confirmedPoints = points.filter((p) => p.state === "confirmado").reduce((a, b) => a + b.amount, 0);
    const pendingPoints = points.filter((p) => p.state === "pendente").reduce((a, b) => a + b.amount, 0);
    const idx = [...levels].reverse().find((l) => confirmedPoints >= l.minPoints) ?? levels[0]!;
    const next = levels.find((l) => l.minPoints > confirmedPoints);
    const pct = next ? Math.round(((confirmedPoints - idx.minPoints) / (next.minPoints - idx.minPoints)) * 100) : 100;

    return {
      projects, progress, submissions, points, rules, referrals, confirmedPoints, pendingPoints,
      level: { current: idx, next, pct },
      getProgress,
      startProject: (id) => patchProgress(id, (p) => ({ ...p, status: p.status === "nao_iniciado" ? "em_andamento" : p.status })),
      toggleStep: (id, step) =>
        patchProgress(id, (p) => ({
          ...p,
          status: p.status === "nao_iniciado" ? "em_andamento" : p.status,
          completedSteps: p.completedSteps.includes(step) ? p.completedSteps.filter((s) => s !== step) : [...p.completedSteps, step],
        })),
      setNotes: (id, notes) => patchProgress(id, (p) => ({ ...p, notes })),
      submitPhotos: (projectId, images, description) => {
        const project = projects.find((p) => p.id === projectId)!;
        const sub: Submission = { id: uid(), projectId, images, description, status: "enviado", date: today(), author: "Inventor Demo" };
        setSubmissions((s) => [sub, ...s]);
        patchProgress(projectId, (p) => ({ ...p, status: "aguardando" }));
        setPoints((s) => [
          { id: `pt-${sub.id}`, label: `Envio: ${project.name}`, amount: project.points + ruleValue("r2"), state: "pendente", date: today() },
          ...s,
        ]);
        return sub;
      },
      reviewSubmission: (id, status, note) => {
        const sub = submissions.find((s) => s.id === id);
        setSubmissions((s) => s.map((x) => (x.id === id ? { ...x, status, adminNote: note ?? x.adminNote } : x)));
        if (!sub || sub.author !== "Inventor Demo") return;
        if (status === "aprovado") {
          patchProgress(sub.projectId, (p) => ({ ...p, status: "concluido" }));
          setPoints((s) => s.map((p) => (p.id === `pt-${id}` ? { ...p, state: "confirmado" } : p)));
        } else if (status === "ajustes" || status === "recusado") {
          patchProgress(sub.projectId, (p) => ({ ...p, status: "em_andamento" }));
          setPoints((s) => s.map((p) => (p.id === `pt-${id}` ? { ...p, state: "recusado" } : p)));
        }
      },
      updateRule: (id, patch) => setRules((s) => s.map((r) => (r.id === id ? { ...r, ...patch } : r))),
      updateProject: (id, patch) => setProjects((s) => s.map((p) => (p.id === id ? { ...p, ...patch } : p))),
      addProject: (p) => setProjects((s) => [...s, p]),
      setReferralStatus: (id, status) => setReferrals((s) => s.map((r) => (r.id === id ? { ...r, status } : r))),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, progress, submissions, points, rules, referrals, getProgress]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useDemo() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useDemo fora do provider");
  return c;
}
