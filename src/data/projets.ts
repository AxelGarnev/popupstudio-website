export interface Metric {
  label: string;
  value: string;
}

export interface Projet {
  category: string;
  categoryTone: "lime" | "sky";
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  metrics: Metric[];
  draft: boolean;
}

export const projets: Projet[] = [
  {
    category: "E-commerce • Bijoux artisanaux",
    categoryTone: "lime",
    image: "/images/sites/saboom.png",
    imageAlt: "Aperçu du site Saboom, boutique de bijoux artisanaux",
    title: "Saboom Bijoux",
    subtitle: "Boutique en ligne",
    description:
      "Une identité pétillante pour des bijoux en pâte polymère, avec un site pensé pour rester léger sans rien perdre de sa couleur.",
    href: "/projets",
    metrics: [
      { label: "Poids page", value: "142 Ko" },
      { label: "Éco-index", value: "89/100 (A)" },
      { label: "Vitesse mobile", value: "0,6 s" },
    ],
    draft: false,
  },
  {
    category: "Catégorie à définir",
    categoryTone: "sky",
    image: "/images/sites/projet-a-venir-1.png",
    imageAlt: "Visuel du projet à venir",
    title: "Projet à venir",
    subtitle: "Type de projet à définir",
    description: "Description à ajouter quand le projet sera prêt à présenter.",
    href: "/projets",
    metrics: [],
    draft: false,
  },
  {
    category: "Catégorie à définir",
    categoryTone: "lime",
    image: "/images/sites/projet-a-venir-2.png",
    imageAlt: "Visuel du projet à venir",
    title: "Projet à venir",
    subtitle: "Type de projet à définir",
    description: "Description à ajouter quand le projet sera prêt à présenter.",
    href: "/projets",
    metrics: [],
    draft: false,
  },
];