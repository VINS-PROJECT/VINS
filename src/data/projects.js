import { slugify } from "@/lib/slugify";

export const projectsData = [
  {
    id: 1,
    title: "Harvesty - Sustainable Farming For A Healthier Future",
    desc: "An information system related to agriculture. This system, ‘Harvesty’, helps manage agricultural product sales efficiently.",
    image: "/projects/namura.png",
    category: "Frontend",
    tech: ["Bootstrap", "HTML", "CSS"],
    slug: "harvesty-sustainable-farming",
    year: 2024,
    features: [
      "Agriculture product monitoring",
      "Simple frontend system",
      "Responsive UI",
    ],
    gallery: [
      "/projects/harvesty-1.png",
      "/projects/harvesty-2.png",
      "/projects/harvesty-3.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: 2,
    title: "SIPAD (Data Analysis Monitoring Information System)",
    desc: "A disaster data analysis prototype called ‘SIPAD’. The project utilizes Excel for data cleaning and visualization.",
    image: "/projects/maganghub.png",
    category: "Design",
    tech: ["Figma", "Excel"],
    slug: "sipad-data-analysis",
    year: 2025,
    features: [
      "Data visualization dashboard",
      "Cleaned dataset workflow",
      "Monitoring infographic design",
    ],
    gallery: [
      "/projects/sipad-1.png",
      "/projects/sipad-2.png",
      "/projects/sipad-3.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: 3,
    title: "REFORA (Reservation Food of ITERA)",
    desc: "‘REFORA’ is a canteen food reservation prototype designed for ITERA students to streamline food ordering.",
    image: "/projects/portfolio2025.png",
    category: "Design",
    tech: ["Figma", "Adobe Photoshop"],
    slug: "refora-food-reservation",
    year: 2024,
    features: [
      "Canteen ordering system",
      "UI/UX optimized workflow",
      "Student-centric flow",
    ],
    gallery: [
      "/projects/refora-1.png",
      "/projects/refora-2.png",
      "/projects/refora-3.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },
].map((p) => ({
  ...p,
  slug: p.slug ?? slugify(p.title),
}));
