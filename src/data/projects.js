import { slugify } from "@/lib/slugify";

export const projectsData = [
  {
    id: 1,
    title: "Harvesty - Sustainable Farming For A Healthier Future",
    desc: "An information system related to agriculture. This system, ‘Harvesty’, helps manage agricultural product sales efficiently. With a simple and responsive frontend design, users can easily monitor and track agricultural products.",
    image: "/HARVESTY-Banner.png",
    category: "Frontend",
    tech: ["Bootstrap", "JavaScript", "HTML", "CSS", "Figma", "Canva"],
    year: 2024,

    status: "Finished",
    role: "Frontend Developer",
    team: "Team Project",
    featured: false,
    updatedAt: "2024-06-20",

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
      live: "https://example.com/harvesty",
      github: "https://github.com/yourname/harvesty",
      figma: "https://www.figma.com/proto/xxxxx/Harvesty",
    },
  },

  {
    id: 2,
    title: "SIPAD (Data Analysis Monitoring Information System)",
    desc: `SIPAD is a disaster data analysis prototype designed to support the understanding, processing, and presentation of disaster-related information in a structured and insightful manner. This project leverages Microsoft Excel as the primary tool for data cleaning, data processing, and visualization.

The initial phase of SIPAD focuses on cleaning raw disaster data collected from various records. This process includes standardizing data formats, removing duplicate entries, handling missing values, and organizing variables to ensure the dataset is reliable and ready for analysis. Proper data preparation allows the analysis to be conducted more accurately and consistently.

Once the data is structured, SIPAD transforms the processed information into meaningful visual representations, such as summary tables, charts, and graphical dashboards. These visualizations are designed to highlight disaster patterns, frequency, time-based trends, and potential impacts. By emphasizing clarity and readability, SIPAD makes complex data easier to interpret for a wide range of stakeholders, including analysts, decision-makers, and the general public.

The primary objective of SIPAD is to generate data-driven insights that support disaster management and decision-making processes. Through effective data representation, the prototype helps evaluate past disaster events, identify trends, and support risk mitigation planning and preparedness strategies.

Overall, SIPAD serves not only as an analytical tool but also as a proof of concept, demonstrating how structured data processing and accessible visualization techniques can produce valuable insights for more informed and responsive disaster management efforts.`,
    image: "/SIPAD-Banner.png",
    category: "Design",
    tech: ["Figma", "Excel"],
    year: 2025,

    status: "Prototype",
    role: "UI Designer & Data Analyst",
    team: "Solo Project",
    featured: true,
    updatedAt: "2025-01-10",

    features: [
      "Disaster data cleaning",
      "Data analysis & visualization",
      "Insightful dashboards",
      "Excel-based prototype",
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
    year: 2024,

    status: "Prototype",
    role: "UI/UX Designer",
    team: "Team Project",
    featured: false,
    updatedAt: "2024-09-15",

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

  {
  id: 4,
  title: "Namura Property Website",
  desc: `Namura Property is a modern real estate platform designed to deliver reliable, transparent, and well-structured property information for individuals and businesses. The website presents property data in a clear, visually engaging, and easy-to-navigate format, enabling users to make informed decisions with confidence.

Each property listing is displayed with comprehensive details, including specifications, pricing, location insights, and supporting visuals. This structured presentation simplifies the property discovery process while maintaining clarity and accuracy across all listings.

The platform emphasizes data consistency and user experience by combining organized content architecture with thoughtful visual layouts. Through this approach, Namura Property bridges complex real estate information with a user-friendly digital experience.

Overall, the Namura Property website reflects a professional and forward-thinking approach to real estate presentation, positioning the brand as a trustworthy partner for buyers, investors, and business stakeholders navigating the property market.`,
  image: "/NAMURA-Banner.png",
  category: "Full Stack",
  tech: ["React", "Node.js", "Express", "MongoDB", "Figma", "Canva"],
  year: 2025,

  status: "Finished",
  role: "Full Stack Developer",
  team: "Solo Project",
  featured: true,
  updatedAt: "2025-02-05",

  features: [
    "Property listings with structured specifications",
    "Client inquiry and contact management",
    "Admin dashboard for content control",
    "Responsive and scalable layout",
  ],

  gallery: [
    "/projects/namura-1.png",
    "/projects/namura-2.png",
    "/projects/namura-3.png",
  ],

  links: {
    live: "https://namuraproperty.com",
  },
},

  {
    id: 5,
    title: "VINSGawe",
    desc: "An event management platform tailored for VINSGawe events, facilitating seamless organization and participation.",
    image: "/VINSGawe-Banner.png",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Figma", "Canva"],
    year: 2025,

    status: "In Progress",
    role: "Full Stack Developer",
    team: "Team Project",
    featured: true,
    updatedAt: "2025-03-01",

    features: [
      "Event listings",
      "User registration",
    ],
    gallery: [
      "/projects/vinsgawe-1.png",
      "/projects/vinsgawe-2.png",
      "/projects/vinsgawe-3.png",
    ],
    links: {
      live: "https://gawe.kvn-code.asia",
    },
  },
].map((p) => ({
  ...p,
  slug: p.slug ?? slugify(p.title),
}));
