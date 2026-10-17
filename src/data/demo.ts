import type { Achievement, DemoUser, Level, PointRule, RankingEntry, Referral, RankingConfig } from "@/types";

export const demoUser: DemoUser = { id: "demo", nickname: "Inventor Demo", avatar: "🤖", isAdmin: true };

export const levels: Level[] = [
  { level: 1, name: "Faísca", minPoints: 0 },
  { level: 2, name: "Aprendiz de Circuitos", minPoints: 200 },
  { level: 3, name: "Construtor", minPoints: 500 },
  { level: 4, name: "Engenheiro Mirim", minPoints: 1000 },
  { level: 5, name: "Inventor", minPoints: 1800 },
  { level: 6, name: "Mestre Robótico", minPoints: 3000 },
];

export const achievements: Achievement[] = [
  { id: "a1", name: "Primeiro Projeto", description: "Iniciou seu primeiro projeto.", criterion: "Iniciar 1 projeto", icon: "🚀" },
  { id: "a2", name: "Pequeno Inventor", description: "Concluiu 3 projetos aprovados.", criterion: "3 projetos aprovados", icon: "💡" },
  { id: "a3", name: "Mestre dos Circuitos", description: "Concluiu todos os projetos de circuitos.", criterion: "10 projetos de Circuitos", icon: "⚡" },
  { id: "a4", name: "Explorador da Robótica", description: "Fez projetos de 5 categorias diferentes.", criterion: "5 categorias", icon: "🧭" },
  { id: "a5", name: "Criatividade em Ação", description: "Participou de um desafio criativo.", criterion: "1 desafio criativo", icon: "🎨" },
  { id: "a6", name: "Construtor Persistente", description: "Construiu algo por 7 dias seguidos.", criterion: "7 dias seguidos", icon: "🛠️" },
  { id: "a7", name: "Fotógrafo de Robôs", description: "Enviou fotos de 5 projetos.", criterion: "5 envios de fotos", icon: "📸" },
  { id: "a8", name: "Amigo Inventor", description: "Teve uma indicação confirmada.", criterion: "1 indicação válida", icon: "🤝" },
];

export const defaultRules: PointRule[] = [
  { id: "r1", name: "Projeto concluído e aprovado", description: "Concedido após aprovação da equipe.", points: 100, active: true },
  { id: "r2", name: "Fotos aprovadas", description: "Fotos da construção avaliadas e aprovadas.", points: 30, active: true },
  { id: "r3", name: "Participação em desafio", description: "Participar de um desafio da semana.", points: 40, active: true },
  { id: "r4", name: "Indicação válida", description: "Amigo que atende aos critérios definidos.", points: 50, active: true },
  { id: "r5", name: "Conquista desbloqueada", description: "Bônus por cada nova conquista.", points: 20, active: false },
];

const avatars = ["🦊", "🐼", "🦉", "🐙", "🦖", "🐧", "🦁", "🐨", "🐸", "🐯", "🦄", "🐳"];
const nicks = ["Faísca Azul", "Engrenagem Veloz", "Circuito Curioso", "Pixel Brilhante", "Robô Trovão", "Chip Sorridente", "Motor Feliz", "Sensor Atento", "Volt Valente", "Bit Criativo", "Parafuso Ágil", "Hélice Mágica"];

export const demoRanking: RankingEntry[] = nicks.map((n, i) => ({
  id: `u${i}`,
  nickname: n,
  avatar: avatars[i],
  points: { semanal: 420 - i * 28 - ((i * 7) % 5) * 9, mensal: 1650 - i * 105 + ((i * 3) % 4) * 30, geral: 4800 - i * 330 },
  level: Math.max(1, 6 - Math.floor(i / 2)),
  medals: Math.max(1, 8 - i),
  completed: Math.max(2, 42 - i * 3),
}));

export const demoReferrals: Referral[] = [
  { id: "ref1", nickname: "Amigo 1", status: "pendente", date: "12/10/2026", points: 0 },
  { id: "ref2", nickname: "Amigo 2", status: "pendente", date: "08/10/2026", points: 0 },
];

export const rankingConfig: RankingConfig = {
  criteria: ["Somente pontos confirmados pela equipe", "Período selecionado (semanal, mensal ou geral)"],
  tieBreaker: "Em caso de empate, vence quem tiver mais projetos aprovados.",
};

export const weeklyChallenges = [
  { id: "c1", title: "Ponte de papel mais forte", desc: "Quantas moedas sua ponte aguenta?", projectId: "p083", icon: "🌉" },
  { id: "c2", title: "Robô reciclado da semana", desc: "Use só materiais recicláveis.", projectId: "p071", icon: "♻️" },
  { id: "c3", title: "Sequência de luzes", desc: "Programe 5 cores em sequência.", projectId: "p063", icon: "🌈" },
];
