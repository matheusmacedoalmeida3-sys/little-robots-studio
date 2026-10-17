import type { Category } from "@/types";
import iniciantes from "@/assets/cat-iniciantes.jpg";
import circuitos from "@/assets/cat-circuitos.jpg";
import motores from "@/assets/cat-motores.jpg";
import sensores from "@/assets/cat-sensores.jpg";
import moveis from "@/assets/cat-moveis.jpg";
import automacao from "@/assets/cat-automacao.jpg";
import programacao from "@/assets/cat-programacao.jpg";
import reciclaveis from "@/assets/cat-reciclaveis.jpg";
import criativos from "@/assets/cat-criativos.jpg";
import avancados from "@/assets/cat-avancados.jpg";

export const categories: Category[] = [
  { id: "iniciantes", name: "Robótica para iniciantes", short: "Iniciantes", cover: iniciantes, tint: "blue" },
  { id: "circuitos", name: "Circuitos e eletrônica", short: "Circuitos", cover: circuitos, tint: "cyan" },
  { id: "motores", name: "Motores e movimento", short: "Motores", cover: motores, tint: "purple" },
  { id: "sensores", name: "Sensores", short: "Sensores", cover: sensores, tint: "cyan" },
  { id: "moveis", name: "Robôs móveis", short: "Robôs móveis", cover: moveis, tint: "blue" },
  { id: "automacao", name: "Automação", short: "Automação", cover: automacao, tint: "cyan" },
  { id: "programacao", name: "Programação", short: "Programação", cover: programacao, tint: "purple" },
  { id: "reciclaveis", name: "Robótica com recicláveis", short: "Recicláveis", cover: reciclaveis, tint: "green" },
  { id: "criativos", name: "Desafios criativos", short: "Criativos", cover: criativos, tint: "pink" },
  { id: "avancados", name: "Projetos avançados", short: "Avançados", cover: avancados, tint: "gold" },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id)!;
