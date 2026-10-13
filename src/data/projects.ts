export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  description: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string;
  stack: string[];
  visual: "warehouse" | "nlp" | "bi" | "sales" | "vision";
  featured?: boolean;
  // Ne renseigne ces URLs que si les ressources sont effectivement publiques.
  github?: string;
  demo?: string;
};

/** Contenus fondés sur le CV fourni. Complète les détails techniques selon tes réalisations. */
export const projects: Project[] = [
  {
    slug: "ocp-data-warehouse",
    index: "01",
    github: "https://github.com/IHSANE-dotcom/PFA_OCP-Social-Analytics-BI-ML",
    title: "Data Warehouse & Analytics — OCP",
    shortTitle: "Data Warehouse & Analytics",
    category: "Data Engineering · Business Intelligence",
    year: "2026",
    description:
      "De données de demandes brutes à un système décisionnel : préparation, modélisation dimensionnelle, tableaux de bord et segmentation.",
    context:
      "Projet réalisé dans le cadre d'un stage au service social du Groupe OCP à Khouribga. Les données étudiées concernaient plus de 5 000 demandes.",
    challenge:
      "Transformer une source tabulaire en données structurées et exploitables afin de faciliter l'analyse et le pilotage.",
    approach: [
      "Nettoyage et préparation des données avec Python et Pandas.",
      "Conception d'un schéma en étoile et création d'un Data Warehouse SQL Server.",
      "Réalisation de tableaux de bord avec Power BI et DAX.",
      "Segmentation de profils avec l'algorithme K-Prototypes.",
    ],
    outcome:
      "Une chaîne d'analyse allant de la préparation des données à la visualisation et à l'exploration de profils. Les données et livrables internes ne sont pas publiés.",
    stack: ["Python", "Pandas", "SQL Server", "Power BI", "DAX", "K-Prototypes"],
    visual: "warehouse",
    featured: true,
  },
  {
    slug: "sentiment-darija",
    index: "02",
    github: "https://github.com/IHSANE-dotcom/darija-sentiment-analysis",
    title: "Analyse de sentiment en Darija marocaine",
    shortTitle: "Sentiment Analysis — Darija",
    category: "NLP · Deep Learning",
    year: "2026",
    description:
      "Pipeline NLP de classification de sentiments sur plus de 83 000 commentaires YouTube en darija marocaine.",
    context:
      "Projet académique d'analyse d'opinions rédigées en darija marocaine, une langue à forte variabilité orthographique.",
    challenge:
      "Classer les commentaires en sentiments positif, négatif ou neutre et comparer plusieurs approches de modélisation.",
    approach: [
      "Collecte, nettoyage et préparation de plus de 83 000 commentaires.",
      "Comparaison de modèles classiques et de Deep Learning avec différentes vectorisations.",
      "Fine-tuning de BERTDarija.",
      "Suivi des expérimentations avec MLflow et Weights & Biases.",
    ],
    outcome:
      "Le fine-tuning de BERTDarija a donné la meilleure performance parmi les approches comparées. Ajouter ici tes métriques réelles si elles sont disponibles.",
    stack: ["Python", "NLP", "BERTDarija", "MLflow", "Weights & Biases"],
    visual: "nlp",
  },
  {
    slug: "bi-pharmaceutique",
    index: "03",
    github: "https://github.com/IHSANE-dotcom/",
    title: "Business Intelligence — Analyse pharmaceutique",
    shortTitle: "BI & Analyse pharmaceutique",
    category: "Data Warehousing · ETL",
    year: "2025",
    description:
      "Solution décisionnelle pour analyser des données sur les médicaments, leur efficacité et leurs effets indésirables.",
    context:
      "Projet académique autour de la création d'une chaîne décisionnelle pour l'analyse de données pharmaceutiques.",
    challenge:
      "Passer de données opérationnelles à un modèle analytique facilitant l'exploration d'indicateurs pertinents.",
    approach: [
      "Conception d'un Data Warehouse sous SQL Server.",
      "Automatisation des processus d'intégration avec SSIS.",
      "Construction d'un cube OLAP avec SSAS.",
      "Création de tableaux de bord sous Power BI.",
    ],
    outcome:
      "Une architecture BI couvrant l'intégration, la modélisation analytique et la restitution des données.",
    stack: ["SQL Server", "SSIS", "SSAS", "Power BI", "ETL"],
    visual: "bi",
  },
  {
    slug: "plateforme-ventes",
    index: "04",
    github: "https://github.com/IHSANE-dotcom/",
    title: "Plateforme de gestion & analyse des ventes",
    shortTitle: "Plateforme de gestion des ventes",
    category: "Software Engineering · Full Stack",
    year: "2026",
    description:
      "Application web de gestion des produits, des ventes et des stocks, intégrant sécurité et tableaux de bord.",
    context:
      "Projet académique de développement logiciel autour d'une plateforme de gestion commerciale.",
    challenge:
      "Centraliser les fonctionnalités de gestion métier dans une application structurée, sécurisée et exploitable.",
    approach: [
      "Développement backend Java et Spring Boot avec architecture MVC et API REST.",
      "Persistance des données avec MySQL.",
      "Authentification et gestion des rôles avec Spring Security.",
      "Interfaces responsives avec Thymeleaf, Bootstrap et JavaScript.",
    ],
    outcome:
      "Une plateforme web réunissant les fonctionnalités de gestion et des indicateurs d'analyse des ventes.",
    stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Spring Security"],
    visual: "sales",
  },
  {
    slug: "detection-masque",
    index: "05",
    github: "https://github.com/IHSANE-dotcom/",
    title: "Détection du port du masque — Computer Vision",
    shortTitle: "Détection du port du masque",
    category: "Computer Vision · Deep Learning",
    year: "2026",
    description:
      "Système de détection en temps réel sur images, vidéos et flux webcam à l'aide de modèles de vision par ordinateur.",
    context:
      "Projet académique de vision par ordinateur portant sur l'analyse d'images et de flux vidéo.",
    challenge:
      "Identifier le port du masque dans différents types de flux et présenter les résultats de détection.",
    approach: [
      "Utilisation de modèles YOLO et VGG pour la détection et la classification.",
      "Traitement image par image sur vidéos et webcam.",
      "Visualisation des prédictions et scores de confiance.",
    ],
    outcome:
      "Un système permettant d'analyser des images et des flux vidéo avec visualisation des résultats.",
    stack: ["Python", "YOLO", "VGG", "Computer Vision", "Deep Learning"],
    visual: "vision",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
