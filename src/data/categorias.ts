import type { Categoria } from "@/types/peca";

export const CATEGORIAS: Categoria[] = [
  {
    slug: "farois",
    nome: "Faróis",
    descricao: "Faróis originais, paralelos e LED para todas as marcas.",
  },
  {
    slug: "lanternas",
    nome: "Lanternas",
    descricao: "Lanternas traseiras e de neblina, incluindo modelos projetados.",
  },
  {
    slug: "motor",
    nome: "Peças de Motor",
    descricao: "Componentes de motor com procedência garantida.",
  },
  {
    slug: "lampadas",
    nome: "Lâmpadas",
    descricao: "Lâmpadas H4, H7, LED e Xenon para todos os veículos.",
  },
  {
    slug: "multimidia",
    nome: "Multimídia",
    descricao: "Centrais multimídia e acessórios de som automotivo.",
  },
  {
    slug: "tunning",
    nome: "Tunning",
    descricao: "Itens estéticos e de customização importados.",
  },
];

export function getCategoria(slug: string) {
  return CATEGORIAS.find((c) => c.slug === slug);
}
