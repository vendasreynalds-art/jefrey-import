import type { Peca } from "@/types/peca";

export const PECAS: Peca[] = [
  {
    id: "1",
    slug: "farol-led-honda-civic-2019-2021",
    nome: "Farol LED Honda Civic",
    codigo: "FR-HC-1921",
    categoria: "farois",
    tipo: "original",
    disponibilidade: "estoque",
    resumo: "Farol dianteiro LED com máscara projetada, par esquerdo/direito.",
    descricao:
      "Farol dianteiro LED importado para Honda Civic, com máscara projetada e DRL integrado. Encaixe original, sem necessidade de adaptação na coifa ou chicote.",
    especificacoes: [
      "Tecnologia LED com DRL integrado",
      "Encaixe original, plug and play",
      "Vidro em policarbonato com tratamento UV",
      "Vendido em par (esquerdo + direito)",
    ],
    veiculosCompativeis: [
      { marca: "Honda", modelo: "Civic", anoInicio: 2019, anoFim: 2021 },
    ],
    destaque: true,
  },
  {
    id: "2",
    slug: "farol-corolla-2018-2019",
    nome: "Farol Toyota Corolla",
    codigo: "FR-TC-1819",
    categoria: "farois",
    tipo: "original",
    disponibilidade: "estoque",
    resumo: "Farol dianteiro halógeno com módulo de LED de posição.",
    descricao:
      "Farol dianteiro importado para Toyota Corolla, compatível com sistema halógeno original e módulo de luz de posição em LED.",
    especificacoes: [
      "Sistema halógeno original",
      "Luz de posição em LED",
      "Encaixe original sem furação",
    ],
    veiculosCompativeis: [
      { marca: "Toyota", modelo: "Corolla", anoInicio: 2018, anoFim: 2019 },
    ],
  },
  {
    id: "3",
    slug: "farol-projetado-golf-2015-2019",
    nome: "Farol Projetado Volkswagen Golf",
    codigo: "FR-VG-1519",
    categoria: "farois",
    tipo: "esportivo",
    disponibilidade: "consulta",
    resumo: "Farol projetado esportivo com acabamento black piano.",
    descricao:
      "Farol projetado de acabamento esportivo para Volkswagen Golf, popular entre entusiastas de tunning. Acabamento black piano com máscara fumê.",
    especificacoes: [
      "Acabamento esportivo black piano",
      "Máscara fumê",
      "Indicado para customização visual",
    ],
    veiculosCompativeis: [
      { marca: "Volkswagen", modelo: "Golf", anoInicio: 2015, anoFim: 2019 },
    ],
    destaque: true,
  },
  {
    id: "4",
    slug: "lanterna-led-onix-2020-2023",
    nome: "Lanterna Traseira LED Chevrolet Onix",
    codigo: "LT-CO-2023",
    categoria: "lanternas",
    tipo: "original",
    disponibilidade: "estoque",
    resumo: "Lanterna traseira em LED com encaixe original.",
    descricao:
      "Lanterna traseira LED importada para Chevrolet Onix, mantendo o padrão de iluminação original e conector plug and play.",
    especificacoes: [
      "Tecnologia LED",
      "Conector plug and play",
      "Vendida em par",
    ],
    veiculosCompativeis: [
      { marca: "Chevrolet", modelo: "Onix", anoInicio: 2020, anoFim: 2023 },
    ],
    destaque: true,
  },
  {
    id: "5",
    slug: "lanterna-fumê-hb20-2017-2019",
    nome: "Lanterna Fumê Hyundai HB20",
    codigo: "LT-HH-1719",
    categoria: "lanternas",
    tipo: "esportivo",
    disponibilidade: "consulta",
    resumo: "Lanterna traseira fumê com acabamento esportivo.",
    descricao:
      "Lanterna traseira com acabamento fumê para Hyundai HB20, alternativa estética popular entre o público de customização.",
    especificacoes: [
      "Acabamento fumê",
      "Compatível com lâmpadas originais",
      "Instalação sem adaptação",
    ],
    veiculosCompativeis: [
      { marca: "Hyundai", modelo: "HB20", anoInicio: 2017, anoFim: 2019 },
    ],
  },
  {
    id: "6",
    slug: "junta-cabecote-uno-1-0-fire",
    nome: "Jogo de Junta de Cabeçote Fiat Uno 1.0 Fire",
    codigo: "MT-FU-1000",
    categoria: "motor",
    tipo: "original",
    disponibilidade: "estoque",
    resumo: "Jogo completo de juntas para motor 1.0 Fire.",
    descricao:
      "Jogo de juntas de cabeçote importado, compatível com motor 1.0 Fire Fiat, indicado para retífica e manutenção preventiva.",
    especificacoes: [
      "Material multicamadas metálico",
      "Jogo completo (cabeçote + acessórios)",
      "Indicado para retífica",
    ],
    veiculosCompativeis: [
      { marca: "Fiat", modelo: "Uno", anoInicio: 2010, anoFim: 2021 },
    ],
  },
  {
    id: "7",
    slug: "correia-dentada-hilux-2-8",
    nome: "Kit Correia Dentada Toyota Hilux 2.8",
    codigo: "MT-TH-2800",
    categoria: "motor",
    tipo: "original",
    disponibilidade: "encomenda",
    resumo: "Kit completo de correia dentada com tensores.",
    descricao:
      "Kit de correia dentada importado para Toyota Hilux 2.8, acompanha tensores e polias. Importação sob encomenda com prazo informado na cotação.",
    especificacoes: [
      "Kit completo: correia + tensores + polias",
      "Compatível com motor 2.8 turbo diesel",
      "Importação sob encomenda",
    ],
    veiculosCompativeis: [
      { marca: "Toyota", modelo: "Hilux", anoInicio: 2016, anoFim: 2023 },
    ],
  },
  {
    id: "8",
    slug: "lampada-led-h7-universal",
    nome: "Lâmpada LED H7 6000K",
    codigo: "LP-H7-6000",
    categoria: "lampadas",
    tipo: "esportivo",
    disponibilidade: "estoque",
    resumo: "Par de lâmpadas LED H7, temperatura de cor 6000K.",
    descricao:
      "Lâmpadas LED soquete H7, alta luminosidade e temperatura de cor 6000K (branco puro). Compatível com a maioria dos faróis originais que utilizam soquete H7.",
    especificacoes: [
      "Soquete H7",
      "Temperatura de cor 6000K",
      "Vendida em par",
      "Plug and play em faróis com soquete H7",
    ],
    veiculosCompativeis: [
      { marca: "Volkswagen", modelo: "Gol", anoInicio: 2013, anoFim: 2023 },
      { marca: "Chevrolet", modelo: "Cruze", anoInicio: 2012, anoFim: 2022 },
    ],
    destaque: true,
  },
  {
    id: "9",
    slug: "lampada-xenon-h4-universal",
    nome: "Kit Xenon H4 8000K",
    codigo: "LP-H4-XN80",
    categoria: "lampadas",
    tipo: "esportivo",
    disponibilidade: "estoque",
    resumo: "Kit Xenon completo com reator, soquete H4.",
    descricao:
      "Kit Xenon importado, soquete H4, acompanha reatores e conectores. Temperatura de cor 8000K (azulado).",
    especificacoes: [
      "Soquete H4 (bi-xenon)",
      "Temperatura de cor 8000K",
      "Acompanha reatores",
    ],
    veiculosCompativeis: [
      { marca: "Fiat", modelo: "Argo", anoInicio: 2018, anoFim: 2023 },
      { marca: "Hyundai", modelo: "HB20", anoInicio: 2019, anoFim: 2023 },
    ],
  },
  {
    id: "10",
    slug: "central-multimidia-9-polegadas-android",
    nome: "Central Multimídia 9\" Android Auto/CarPlay",
    codigo: "MM-AND-9CP",
    categoria: "multimidia",
    tipo: "esportivo",
    disponibilidade: "estoque",
    resumo: "Central multimídia 9 polegadas com Android Auto e CarPlay sem fio.",
    descricao:
      "Central multimídia importada de 9 polegadas, com suporte a Android Auto e Apple CarPlay sem fio, câmera de ré e Bluetooth.",
    especificacoes: [
      "Tela 9\" touchscreen",
      "Android Auto e Apple CarPlay sem fio",
      "Entrada para câmera de ré",
      "Bluetooth e USB duplo",
    ],
    veiculosCompativeis: [
      { marca: "Volkswagen", modelo: "T-Cross", anoInicio: 2019, anoFim: 2023 },
      { marca: "Jeep", modelo: "Renegade", anoInicio: 2016, anoFim: 2023 },
    ],
    destaque: true,
  },
  {
    id: "11",
    slug: "moldura-multimidia-corolla",
    nome: "Moldura para Central Multimídia Toyota Corolla",
    codigo: "MM-MOL-COR",
    categoria: "multimidia",
    tipo: "paralelo",
    disponibilidade: "estoque",
    resumo: "Moldura de acabamento para instalação de multimídia 2 din.",
    descricao:
      "Moldura em ABS para instalação de central multimídia padrão 2 din no painel do Toyota Corolla, mantendo o acabamento original.",
    especificacoes: [
      "Material ABS texturizado",
      "Padrão 2 din",
      "Encaixe sem furação",
    ],
    veiculosCompativeis: [
      { marca: "Toyota", modelo: "Corolla", anoInicio: 2015, anoFim: 2019 },
    ],
  },
  {
    id: "12",
    slug: "grade-esportiva-hb20-tunning",
    nome: "Grade Dianteira Esportiva Hyundai HB20",
    codigo: "TN-GR-HB20",
    categoria: "tunning",
    tipo: "esportivo",
    disponibilidade: "consulta",
    resumo: "Grade dianteira esportiva em ABS cromado.",
    descricao:
      "Grade dianteira de acabamento esportivo para Hyundai HB20, em ABS com detalhes cromados, alternativa visual para customização.",
    especificacoes: [
      "Material ABS com detalhes cromados",
      "Encaixe direto, sem furação",
      "Item estético/tunning",
    ],
    veiculosCompativeis: [
      { marca: "Hyundai", modelo: "HB20", anoInicio: 2019, anoFim: 2023 },
    ],
  },
  {
    id: "13",
    slug: "difusor-traseiro-golf-gti-style",
    nome: "Difusor Traseiro Volkswagen Golf (GTI Style)",
    codigo: "TN-DIF-GOLF",
    categoria: "tunning",
    tipo: "esportivo",
    disponibilidade: "encomenda",
    resumo: "Difusor traseiro esportivo estilo GTI.",
    descricao:
      "Difusor traseiro em ABS, estilo GTI, para Volkswagen Golf. Item de customização visual, importação sob encomenda.",
    especificacoes: [
      "Material ABS reforçado",
      "Estilo esportivo GTI",
      "Importação sob encomenda",
    ],
    veiculosCompativeis: [
      { marca: "Volkswagen", modelo: "Golf", anoInicio: 2015, anoFim: 2019 },
    ],
  },
  {
    id: "14",
    slug: "farol-milha-led-hilux-tunning",
    nome: "Farol de Milha LED Toyota Hilux",
    codigo: "TN-MI-HILUX",
    categoria: "tunning",
    tipo: "esportivo",
    disponibilidade: "estoque",
    resumo: "Par de faróis de milha em LED para para-choque.",
    descricao:
      "Faróis de milha em LED para instalação no para-choque dianteiro da Toyota Hilux, alta luminosidade para uso em estrada e off-road.",
    especificacoes: [
      "Tecnologia LED de alta potência",
      "Resistente a água e poeira (IP67)",
      "Vendido em par",
    ],
    veiculosCompativeis: [
      { marca: "Toyota", modelo: "Hilux", anoInicio: 2016, anoFim: 2023 },
      { marca: "Toyota", modelo: "SW4", anoInicio: 2016, anoFim: 2023 },
    ],
  },
];

export function getPecaBySlug(slug: string) {
  return PECAS.find((p) => p.slug === slug);
}

export function getPecasDestaque() {
  return PECAS.filter((p) => p.destaque);
}

export function getPecasRelacionadas(peca: Peca, limite = 4) {
  return PECAS.filter(
    (p) =>
      p.id !== peca.id &&
      (p.categoria === peca.categoria ||
        p.veiculosCompativeis.some((v) =>
          peca.veiculosCompativeis.some(
            (pv) => pv.marca === v.marca && pv.modelo === v.modelo,
          ),
        )),
  ).slice(0, limite);
}
