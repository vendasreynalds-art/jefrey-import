export type CategoriaSlug =
  | "farois"
  | "lanternas"
  | "motor"
  | "lampadas"
  | "multimidia"
  | "tunning";

export type TipoPeca = "original" | "paralelo" | "esportivo";

export type Disponibilidade = "estoque" | "consulta" | "encomenda";

export type VeiculoCompativel = {
  marca: string;
  modelo: string;
  anoInicio: number;
  anoFim: number;
};

export type Peca = {
  id: string;
  slug: string;
  nome: string;
  codigo: string;
  categoria: CategoriaSlug;
  tipo: TipoPeca;
  disponibilidade: Disponibilidade;
  resumo: string;
  descricao: string;
  especificacoes: string[];
  veiculosCompativeis: VeiculoCompativel[];
  destaque?: boolean;
};

export type Categoria = {
  slug: CategoriaSlug;
  nome: string;
  descricao: string;
};
