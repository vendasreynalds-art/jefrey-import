import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBanner from "@/components/TrustBanner";
import CtaFinal from "@/components/CtaFinal";
import { SITE } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.nome,
    url: SITE.url,
    description:
      "Importadora de peças automotivas — faróis, lanternas, peças de motor, lâmpadas, multimídia e itens de tunning.",
    email: SITE.email,
    telephone: SITE.telefone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.endereco,
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <TrustBanner />
      <CtaFinal />
    </>
  );
}
