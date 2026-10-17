import type { Difficulty, Project } from "@/types";
import { categories } from "./categories";

/**
 * Catálogo DEMONSTRATIVO com 100 projetos.
 * Estrutura pronta para ser substituída por dados vindos do backend.
 */
const names: Record<string, [string, string][]> = {
  iniciantes: [
    ["Robô de Papelão Amigo", "Monte seu primeiro robô com caixas e criatividade."],
    ["Braço Robótico de Canudos", "Descubra como funcionam as articulações."],
    ["Mão Mecânica com Barbantes", "Uma mão que fecha os dedos com fios."],
    ["Robô que Balança", "Entenda equilíbrio e centro de massa."],
    ["Garra de Palitos", "Uma pinça simples para pegar objetos leves."],
    ["Robô Desenhista", "Um robô que rabisca sozinho com vibração."],
    ["Cabeça Robótica Giratória", "Mecanismo de giro com tampinhas."],
    ["Robô Marionete", "Controle movimentos com fios e varetas."],
    ["Torre de Engrenagens", "Engrenagens de papelão que giram juntas."],
    ["Meu Primeiro Robô Modular", "Peças que se encaixam de vários jeitos."],
  ],
  circuitos: [
    ["Lanterna de LED", "Acenda um LED com uma bateria de moeda."],
    ["Circuito em Papel", "Fita de cobre e LEDs em um cartão."],
    ["Semáforo de LEDs", "Três luzes que mostram as cores do trânsito."],
    ["Campainha com Botão", "Um botão que faz um som curto."],
    ["Circuito em Série e Paralelo", "Compare como a energia percorre o caminho."],
    ["Massinha Condutora", "Esculturas que acendem luzes."],
    ["Interruptor de Clipe", "Crie seu próprio interruptor."],
    ["Placa de Ensaio Básica", "Primeiros passos na protoboard."],
    ["Luz Noturna Automática", "Um LED que acende no escuro."],
    ["Painel de Luzes Coloridas", "Combine LEDs e crie um painel."],
  ],
  motores: [
    ["Ventilador de Mesa Mini", "Um motor pequeno movendo uma hélice."],
    ["Carrinho com Elástico", "Energia armazenada que vira movimento."],
    ["Robô Vibratório", "Um motor desbalanceado faz o robô andar."],
    ["Moinho de Vento", "Transforme vento em giro."],
    ["Elevador de Polias", "Suba objetos com polias e motor."],
    ["Roda Gigante Motorizada", "Uma roda que gira devagar."],
    ["Carrossel de Engrenagens", "Redução de velocidade com engrenagens."],
    ["Barco a Hélice", "Um barquinho que navega na bacia."],
    ["Robô Escovinha", "Uma escova que se move sozinha."],
    ["Guindaste Mecânico", "Levante peças com um sistema de manivela."],
  ],
  sensores: [
    ["Alarme de Porta", "Detecta quando a porta abre."],
    ["Medidor de Distância", "Use um sensor ultrassônico."],
    ["Sensor de Luz", "Descubra se o ambiente está claro ou escuro."],
    ["Termômetro Digital", "Leia a temperatura do ambiente."],
    ["Detector de Umidade da Planta", "Saiba quando regar a plantinha."],
    ["Sensor de Toque", "Reaja ao toque dos dedos."],
    ["Contador de Passos", "Conte movimentos com um sensor."],
    ["Sensor de Som", "Um LED que dança com palmas."],
    ["Detector de Movimento", "Perceba quando alguém passa."],
    ["Estação de Sensores", "Junte vários sensores em uma base."],
  ],
  moveis: [
    ["Robô Seguidor de Linha", "Siga uma linha preta no chão."],
    ["Carrinho de Duas Rodas", "Base móvel com dois motores."],
    ["Robô Desvia-Obstáculos", "Desvie de paredes sozinho."],
    ["Robô Aranha", "Pernas que andam com um mecanismo."],
    ["Robô Explorador", "Explore a casa com um robô móvel."],
    ["Robô Sumô", "Um robô para empurrar o adversário."],
    ["Robô Labirinto", "Encontre a saída de um labirinto."],
    ["Robô Entregador", "Leve pequenos objetos de um lado ao outro."],
    ["Robô Escalador de Rampa", "Teste força e tração."],
    ["Rover de Marte", "Inspirado nos robôs exploradores do espaço."],
  ],
  automacao: [
    ["Portão Automático", "Abra um portão com um botão."],
    ["Regador Inteligente", "Rega quando o solo está seco."],
    ["Casa com Luzes Automáticas", "Luzes que acendem sozinhas."],
    ["Alimentador de Pet", "Libere ração em horários (com adulto)."],
    ["Cortina Motorizada", "Abra e feche a cortina da maquete."],
    ["Lixeira que Abre Sozinha", "A tampa sobe quando você chega perto."],
    ["Esteira Separadora", "Separe peças por cor."],
    ["Cofre com Senha", "Uma caixa que abre com um código."],
    ["Estufa Inteligente", "Controle luz e umidade de uma estufa."],
    ["Ponte Levadiça", "Uma ponte que sobe e desce."],
  ],
  programacao: [
    ["Pisca-Pisca Programado", "Seu primeiro código com LED."],
    ["Dado Eletrônico", "Sorteie números com um botão."],
    ["Jogo da Memória com Luzes", "Repita a sequência de cores."],
    ["Música com Buzzer", "Programe uma melodia curta."],
    ["Cronômetro de Desafios", "Conte o tempo das suas missões."],
    ["Robô que Dança", "Uma sequência de movimentos programados."],
    ["Placar Eletrônico", "Mostre pontos em um display."],
    ["Laços e Repetições", "Aprenda loops com um robô."],
    ["Condições Se/Senão", "Robô que toma decisões."],
    ["Controle por Blocos", "Programe com blocos visuais."],
  ],
  reciclaveis: [
    ["Robô de Garrafa PET", "Reaproveite garrafas e tampinhas."],
    ["Carrinho de Tampinhas", "Rodas feitas de tampas de garrafa."],
    ["Escultura Robótica de Sucata", "Arte com peças reaproveitadas."],
    ["Robô de Latinhas", "Um amigo metálico reciclado."],
    ["Braço Hidráulico de Seringas", "Força com água e seringas sem agulha."],
    ["Barco de Caixa de Leite", "Um barco que flutua de verdade."],
    ["Robô de Rolinhos", "Rolinhos de papel viram robôs."],
    ["Catapulta de Palitos", "Lance bolinhas de papel."],
    ["Máscara Robótica", "Crie um capacete de robô."],
    ["Cidade Reciclada", "Uma maquete com robôs reciclados."],
  ],
  criativos: [
    ["Invente um Robô Ajudante", "Desenhe e construa um robô que ajuda em casa."],
    ["Robô Contador de Histórias", "Um robô personagem com falas gravadas."],
    ["Desafio da Ponte de Papel", "Quanto peso sua ponte aguenta?"],
    ["Robô Artista", "Um robô que pinta formas."],
    ["Fantoche Robótico", "Um fantoche que mexe a boca."],
    ["Robô Animal", "Inspire-se em um animal real."],
    ["Robô do Futuro", "Imagine um robô para daqui a 50 anos."],
    ["Desafio da Torre Mais Alta", "Construa alto com pouco material."],
    ["Robô Musical", "Instrumentos que tocam sozinhos."],
    ["Feira de Invenções", "Apresente sua melhor ideia."],
  ],
  avancados: [
    ["Braço Robótico com Servos", "Um braço com 3 articulações."],
    ["Robô Controlado por Bluetooth", "Controle pelo tablet (com adulto)."],
    ["Robô Equilibrista", "Equilíbrio com sensores de inclinação."],
    ["Estação Meteorológica", "Colete dados do clima."],
    ["Robô com Visão por Cores", "Identifique cores com um sensor."],
    ["Mão Robótica com Flexores", "Imite os movimentos da sua mão."],
    ["Drone de Papel Estático", "Estude como hélices sustentam peso."],
    ["Robô Mapeador", "Desenhe um mapa do ambiente."],
    ["Linha de Montagem", "Robôs trabalhando em equipe."],
    ["Grande Projeto Final", "Una tudo que você aprendeu."],
  ],
};

const baseMaterials: Record<string, string[]> = {
  iniciantes: ["Caixas de papelão", "Cola branca", "Tesoura sem ponta", "Fita adesiva", "Canetinhas"],
  circuitos: ["LEDs", "Bateria de moeda (CR2032)", "Fios com garra jacaré", "Fita de cobre"],
  motores: ["Motor DC pequeno", "Suporte de pilhas AA", "Hélice ou roda", "Fita dupla face"],
  sensores: ["Placa microcontroladora", "Sensor do projeto", "Cabos jumper", "Protoboard"],
  moveis: ["Chassi de robô", "2 motores com rodas", "Suporte de pilhas", "Roda boba"],
  automacao: ["Maquete de papelão", "Servo motor", "Placa microcontroladora", "Cabos jumper"],
  programacao: ["Placa microcontroladora", "Cabo USB", "LEDs ou buzzer", "Computador com editor de blocos"],
  reciclaveis: ["Garrafas PET limpas", "Tampinhas", "Papelão", "Cola quente (uso pelo adulto)"],
  criativos: ["Papel colorido", "Papelão", "Fita adesiva", "Materiais livres"],
  avancados: ["Placa microcontroladora", "Servos", "Sensores", "Fonte de pilhas", "Parafusos pequenos"],
};

const steps = [
  "Separe todos os materiais em uma mesa limpa e iluminada.",
  "Leia a etapa toda antes de começar e confira o desenho de referência.",
  "Monte a estrutura principal com calma.",
  "Conecte as partes móveis ou elétricas conforme indicado.",
  "Teste o funcionamento e ajuste o que for necessário.",
  "Decore seu projeto e tire fotos para compartilhar a sua construção.",
];

const diffFor = (i: number): Difficulty => (i < 4 ? "iniciante" : i < 8 ? "intermediario" : "avancado");

export const DEFAULT_POINTS: Record<Difficulty, number> = { iniciante: 50, intermediario: 100, avancado: 150 };

const adultCats = new Set(["circuitos", "motores", "sensores", "automacao", "avancados", "reciclaveis"]);

export const projects: Project[] = categories.flatMap((cat, ci) =>
  names[cat.id].map(([name, description], i) => {
    const number = ci * 10 + i + 1;
    const difficulty = cat.id === "avancados" ? (i < 3 ? "intermediario" : "avancado") : cat.id === "iniciantes" ? (i < 7 ? "iniciante" : "intermediario") : diffFor(i);
    const adult = adultCats.has(cat.id) || difficulty === "avancado";
    return {
      id: `p${String(number).padStart(3, "0")}`,
      number,
      name,
      description,
      categoryId: cat.id,
      difficulty,
      minutes: number % 7 === 0 ? undefined : 20 + ((number * 13) % 7) * 10,
      materials: baseMaterials[cat.id],
      objective: `Compreender, na prática, os conceitos de ${cat.name.toLowerCase()} construindo "${name}".`,
      steps,
      safety: [
        "Use tesoura sem ponta e peça ajuda para cortes difíceis.",
        ...(adult ? ["Faça este projeto com a supervisão de um adulto."] : []),
        "Nunca conecte nada na tomada. Use apenas pilhas ou baterias indicadas.",
        "Se uma pilha ou bateria estiver amassada, quente ou vazando, não use e chame um adulto.",
      ],
      adultSupervision: adult,
      points: DEFAULT_POINTS[difficulty],
      cover: cat.cover,
      publish: "publicado" as const,
    } satisfies Project;
  }),
);

export const projectById = (id: string) => projects.find((p) => p.id === id);
