import type { ReactNode } from "react";
import { FlaskConical, Loader2, AlertTriangle } from "lucide-react";
import type { Difficulty, ProjectStatus, SubmissionStatus, PointsState } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DemoBadge({ className, label = "Dados demonstrativos" }: { className?: string; label?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full bg-tint-gold px-2.5 py-1 text-[11px] font-bold text-gold-foreground", className)}>
      <FlaskConical className="h-3 w-3" /> {label}
    </span>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="surface mb-6 flex flex-wrap items-center gap-4 px-6 py-5">
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions}
    </div>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="text-xl">{children}</h2>
      {action}
    </div>
  );
}

export function EmptyState({ icon, title, text, action }: { icon: string; title: string; text: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-border px-6 py-10 text-center">
      <div className="mb-3 text-4xl">{icon}</div>
      <p className="font-display text-lg font-semibold">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{text}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function LoadingState({ text = "Carregando..." }: { text?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-12 text-muted-foreground">
      <Loader2 className="h-5 w-5 animate-spin" /> {text}
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl bg-tint-pink py-10 text-center">
      <AlertTriangle className="h-8 w-8 text-destructive" />
      <p className="font-semibold">Não foi possível carregar os dados.</p>
      <Button variant="outline" onClick={onRetry}>Tentar novamente</Button>
    </div>
  );
}

const diffMap: Record<Difficulty, [string, string]> = {
  iniciante: ["Iniciante", "bg-tint-green text-success"],
  intermediario: ["Intermediário", "bg-tint-blue text-primary"],
  avancado: ["Avançado", "bg-tint-purple text-purple"],
};
export const difficultyLabel = (d: Difficulty) => diffMap[d][0];
export function DifficultyBadge({ d }: { d: Difficulty }) {
  return <span className={cn("rounded-lg px-2 py-0.5 text-xs font-bold", diffMap[d][1])}>{diffMap[d][0]}</span>;
}

const statusMap: Record<ProjectStatus, [string, string]> = {
  nao_iniciado: ["Não iniciado", "bg-muted text-muted-foreground"],
  em_andamento: ["Em andamento", "bg-primary text-primary-foreground"],
  aguardando: ["Aguardando avaliação", "bg-warning text-gold-foreground"],
  concluido: ["Concluído", "bg-success text-success-foreground"],
};
export const projectStatusLabel = (s: ProjectStatus) => statusMap[s][0];
export function ProjectStatusBadge({ s }: { s: ProjectStatus }) {
  return <span className={cn("rounded-lg px-2 py-0.5 text-xs font-bold", statusMap[s][1])}>{statusMap[s][0]}</span>;
}

const subMap: Record<SubmissionStatus, [string, string]> = {
  rascunho: ["Rascunho", "bg-muted text-muted-foreground"],
  enviado: ["Enviado para avaliação", "bg-tint-blue text-primary"],
  em_analise: ["Em análise", "bg-warning text-gold-foreground"],
  aprovado: ["Aprovado", "bg-success text-success-foreground"],
  ajustes: ["Requer ajustes", "bg-tint-pink text-destructive"],
  recusado: ["Recusado", "bg-destructive text-destructive-foreground"],
};
export function SubmissionStatusBadge({ s }: { s: SubmissionStatus }) {
  return <span className={cn("rounded-lg px-2 py-0.5 text-xs font-bold whitespace-nowrap", subMap[s][1])}>{subMap[s][0]}</span>;
}

const ptsMap: Record<PointsState, [string, string]> = {
  confirmado: ["Confirmado", "text-success"],
  pendente: ["Pendente", "text-warning"],
  recusado: ["Recusado/ajustado", "text-destructive"],
  demonstrativo: ["Demonstrativo", "text-muted-foreground"],
};
export function PointsStateLabel({ s }: { s: PointsState }) {
  return <span className={cn("text-xs font-bold", ptsMap[s][1])}>{ptsMap[s][0]}</span>;
}

export function ProgressBar({ value, className, tone = "primary" }: { value: number; className?: string; tone?: "primary" | "gold" }) {
  return (
    <div className={cn("h-2.5 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div className={cn("h-full rounded-full transition-all duration-500", tone === "gold" ? "bg-gradient-gold" : "bg-gradient-primary")} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function StatTile({ icon, label, value, tint }: { icon: ReactNode; label: string; value: ReactNode; tint: string }) {
  return (
    <div className={cn("rounded-3xl p-4", tint)}>
      <div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-card text-primary">{icon}</div>
      <p className="font-display text-2xl font-semibold">{value}</p>
      <p className="text-xs font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}
