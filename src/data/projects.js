import { slugify } from "@/lib/slugify";

export const projectsData = [
  {
    id: 1,
    title: "Harvesty - Sustainable Farming For A Healthier Future",
    desc: "An information system related to agriculture. This system, ‘Harvesty’, helps manage agricultural product sales efficiently. With a simple and responsive frontend design, users can easily monitor and track agricultural products.",
    image: "/HARVESTY-Banner.png",
    category: "Frontend",
    tech: ["Bootstrap", "JavaScript", "HTML", "CSS", "Figma", "Canva"],
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
      live: "https://example.com/harvesty", // ganti jika sudah deploy
      github: "https://github.com/yourname/harvesty",
      figma: "https://www.figma.com/proto/xxxxx/Harvesty",
    },
  },

  {
    id: 2,
    title: "SIPAD (Data Analysis Monitoring Information System)",
    desc: "A disaster data analysis prototype called ‘SIPAD’. The project utilizes Excel for data cleaning and visualization. SIPAD aims to provide insights into disaster management through effective data representation.",
    image: "/SIPAD-Banner.png",
    category: "Design",
    tech: ["Figma", "Excel"],
    slug: "sipad-data-analysis",
    year: 2025,
    features: [
      "Disaster data analysis",
      "Data visualization",
      "User-friendly interface",
      "Effective data representation",
    ],
    gallery: [
      "/SIPAD/SIPAD1.png",
      "/SIPAD/SIPAD2.png",
      "/SIPAD/SIPAD3.png",
      "/SIPAD/SIPAD4.png",
      "/SIPAD/SIPAD5.png",
      "/SIPAD/SIPAD6.png",
    ],
    links: {
      figma: "https://www.figma.com/proto/xxxxx/SIPAD",
    },
  },

  {
    id: 3,
    title: "REFORA (Reservation Food of ITERA)",
    desc: "‘REFORA’ is a canteen food reservation prototype designed for ITERA students to streamline food ordering.",
    image: "/REFORA-Banner.png",
    category: "Design",
    tech: ["Figma", "Adobe Photoshop", "Canva"],
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
      figma: "https://www.figma.com/proto/xxxxx/REFORA",
      case: "/File/REFORA-CaseStudy.pdf",
    },
  },
].map((p) => ({
  ...p,
  slug: p.slug ?? slugify(p.title),
}));
