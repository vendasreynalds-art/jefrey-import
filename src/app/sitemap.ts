import type { MetadataRoute } from "next";
import { PECAS } from "@/data/pecas";
import { CATEGORIAS } from "@/data/categorias";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas: MetadataRoute.Sitemap = [
    "",
    "pecas",
    "orcamento",
    "contato",
    "sobre",
    "como-funciona",
    "politica-de-privacidade",
    "termos-de-uso",
  ].map((path) => ({
    url: `${SITE.url}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  }));

  const paginasCategorias: MetadataRoute.Sitemap = CATEGORIAS.map((cat) => ({
    url: `${SITE.url}/pecas?categoria=${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  }));

  const paginasPecas: MetadataRoute.Sitemap = PECAS.map((peca) => ({
    url: `${SITE.url}/pecas/${peca.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));

  return [...paginasEstaticas, ...paginasCategorias, ...paginasPecas];
}
