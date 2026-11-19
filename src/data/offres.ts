export interface Offre {
  tag: string;
  name: string;
  price: string;
  price_details: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export const offres: Offre[] = [
  {
    tag: "Formule express",
    name: "Page Unique",
    price: "750 €",
    price_details: "TTC • Paiement en 2 ou 3 fois possible",
    note: "Idéal pour lancer une activité ou concentrer toute son offre sur une seule page. Paiement en 3 fois sans frais possible.",
    features: [
      "Design sur mesure, sobre et responsive",
      "Une page sculptée avec soin",
      "Formulaire de contact sans cookies",
      "Hébergement conseillé et configuré",
    ],
    cta: "Choisir la Page Unique",
    href: "/contact",
  },
  {
    tag: "Formule complète",
    name: "Site Vitrine",
    price: "1 450 €",
    price_details: "TTC • Livrable complet clé en main",
    note: "L'arme absolue des artisans, freelances et créateurs engagés.",
    features: [
      "3 à 5 pages sur mesure",
      "Référencement de base soigné",
      "Formation vidéo de 30 minutes",
      "Autonomie après livraison",
    ],
    cta: "Choisir le Site Vitrine",
    href: "/contact",
    featured: true,
  },
  {
    tag: "Formule commerce",
    name: "Boutique en Ligne",
    price: "2 200 €",
    price_details: "TTC • Architecture micro-boutique fluide",
    note: "Vendez vos créations sans faire exploser la facture énergétique.",
    features: [
      "Catalogue produits et tunnel de commande",
      "Paiement en ligne sécurisé",
      "Emails transactionnels sobres",
      "Formation vidéo de 30 minutes",
    ],
    cta: "Choisir la Boutique",
    href: "/contact",
  },
];