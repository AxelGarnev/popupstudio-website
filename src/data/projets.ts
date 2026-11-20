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
    href: "http://saboombijoux.fr",
    metrics: [
      { label: "Poids page", value: "142 Ko" },
      { label: "Éco-index", value: "89/100 (A)" },
      { label: "Vitesse mobile", value: "0,6 s" },
    ],
    draft: false,
  },
  {
    category: "Architecure",
    categoryTone: "sky",
    image: "/images/sites/condesa.png",
    imageAlt: "Aperçu du site Condesa, agence d'architecture",
    title: "Condesa",
    subtitle: "Agence d'architecture",
    description: "Un site vitrine pour une agence d’architecture fictive, avec un design minimaliste et des visuels optimisés pour un chargement rapide. Exercice a base d'un design déjà existant.",
    href: "http://condesa.popupstudio.fr",
    metrics: [
      { label: "Poids page", value: "142 Ko" },
      { label: "Éco-index", value: "89/100 (A)" },
      { label: "Vitesse mobile", value: "0,6 s" },
    ],
    draft: false,
  },
  {
    category: "Restaurant • Cuisine végétale",
    categoryTone: "lime",
    image: "/images/sites/cheznorbert.png",
    imageAlt: "Visuel du projet à venir",
    title: "Chez Norbert",
    subtitle: "Restaurant végétalien",
    description: "Un site pour un restaurant végétalien fictif, avec un design épuré et des images appetissantes.",
    href: "https://cheznorbert.popupstudio.fr",
    metrics: [
      { label: "Poids page", value: "142 Ko" },
      { label: "Éco-index", value: "89/100 (A)" },
      { label: "Vitesse mobile", value: "0,6 s" },
    ],
    draft: false,
  },
];