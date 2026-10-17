export type Difficulty = "iniciante" | "intermediario" | "avancado";
export type ProjectStatus = "nao_iniciado" | "em_andamento" | "aguardando" | "concluido";
export type PublishStatus = "publicado" | "rascunho";
export type SubmissionStatus = "rascunho" | "enviado" | "em_analise" | "aprovado" | "ajustes" | "recusado";
export type PointsState = "confirmado" | "pendente" | "recusado" | "demonstrativo";
export type ReferralStatus = "pendente" | "confirmada" | "recusada";
export type RankingPeriod = "semanal" | "mensal" | "geral";

export interface Category {
  id: string;
  name: string;
  short: string;
  cover: string;
  tint: "blue" | "purple" | "pink" | "cyan" | "gold" | "green";
}

export interface Project {
  id: string;
  number: number;
  name: string;
  description: string;
  categoryId: string;
  difficulty: Difficulty;
  minutes?: number | undefined;
  materials: string[];
  objective: string;
  steps: string[];
  safety: string[];
  adultSupervision: boolean;
  points: number;
  cover: string;
  referenceImage?: string;
  publish: PublishStatus;
}

export interface ProjectProgress {
  projectId: string;
  status: ProjectStatus;
  completedSteps: number[];
  notes: string;
}

export interface Submission {
  id: string;
  projectId: string;
  images: string[];
  description: string;
  status: SubmissionStatus;
  date: string;
  adminNote?: string | undefined;
  author: string;
}

export interface PointsEntry {
  id: string;
  label: string;
  amount: number;
  state: PointsState;
  date: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  criterion: string;
  icon: string;
  unlockedAt?: string;
}

export interface Level {
  level: number;
  name: string;
  minPoints: number;
}

export interface DemoUser {
  id: string;
  nickname: string;
  avatar: string;
  isAdmin: boolean;
}

export interface RankingEntry {
  id: string;
  nickname: string;
  avatar: string;
  points: Record<RankingPeriod, number>;
  level: number;
  medals: number;
  completed: number;
}

export interface Referral {
  id: string;
  nickname: string;
  status: ReferralStatus;
  date: string;
  points: number;
}

export interface PointRule {
  id: string;
  name: string;
  description: string;
  points: number;
  active: boolean;
}

export interface RankingConfig {
  criteria: string[];
  tieBreaker: string;
}
