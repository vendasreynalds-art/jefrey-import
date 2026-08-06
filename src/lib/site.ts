export const SITE = {
  nome: "JefRey Import",
  slogan: "Peças automotivas importadas com compatibilidade garantida",
  telefone: "+55 (11) 4000-0000",
  whatsapp: "5511940000000",
  email: "contato@jefreyimport.com.br",
  endereco: "Av. dos Autonomistas, 1500 — Osasco, SP",
  cnpj: "00.000.000/0001-00",
  horario: "Segunda a sexta, 8h às 18h",
  instagram: "https://instagram.com/jefreyimport",
  facebook: "https://facebook.com/jefreyimport",
  url: "https://jefrey-import-fynxia.vercel.app",
};

export function linkWhatsApp(mensagem?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

export function mensagemOrcamentoPeca(nome: string, codigo: string) {
  return `Olá! Tenho interesse na peça ${nome} - Código ${codigo}. Gostaria de solicitar um orçamento.`;
}
