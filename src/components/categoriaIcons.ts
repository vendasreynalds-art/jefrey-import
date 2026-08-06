import { Lightbulb, Flashlight, Cog, Zap, Monitor, Sparkles } from "lucide-react";
import type { CategoriaSlug } from "@/types/peca";

export const CATEGORIA_ICONS: Record<CategoriaSlug, typeof Lightbulb> = {
  farois: Lightbulb,
  lanternas: Flashlight,
  motor: Cog,
  lampadas: Zap,
  multimidia: Monitor,
  tunning: Sparkles,
};
