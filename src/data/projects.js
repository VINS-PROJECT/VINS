import { slugify } from "@/lib/slugify";

export const projectsData = [
  {
    id: 1,
    title: "Harvesty - Sustainable Farming for a Healthier Future",
    desc: `Harvesty is an agriculture-related information system designed to support and simplify agricultural activities and transactions. The name Harvesty is derived from the concept of harvesting, representing the core essence of agriculture and the process of transforming crops into valuable products. This system aims to bridge the gap between farmers and customers by providing a digital platform that facilitates agricultural transactions efficiently and transparently.

The system is designed with a strong focus on simplicity and responsiveness, ensuring ease of use for all stakeholders, particularly farmers who may have varying levels of technological familiarity. With a clean interface and intuitive user experience, Harvesty enables users to access information, manage agricultural products, and conduct transactions without unnecessary complexity.

Harvesty serves as a medium that connects farmers directly with customers, allowing both parties to interact within a single integrated system. Farmers can manage product listings, monitor agricultural outputs, and track transactions, while customers can browse available products, obtain relevant agricultural information, and complete purchases seamlessly.

Overall, Harvesty is developed to empower stakeholders in the agricultural sector by leveraging digital technology to enhance productivity, accessibility, and collaboration within the agricultural ecosystem.`,
    image: "/HAR.png",
    category: "Frontend",
    tech: ["Bootstrap", "JavaScript", "HTML", "CSS", "Figma", "Canva"],
    year: 2024,

    status: "Finished",
    role: "Frontend Developer",
    team: "Team Project",
    featured: false,
    updatedAt: "2024-06-20",

    features: [
      "Direct connection between farmers and customers",
      "Agricultural product listing and management",
      "Real-time product availability monitoring",
      "Simple and intuitive transaction flow",
      "Responsive design for mobile and desktop devices",
      "User-friendly interface for non-technical users",
      "Clear and structured product information display",
      "Efficient digital-based agriculture transactions",
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

The initial phase of SIPAD focuses on cleaning raw disaster data collected from various records. This includes standardizing data formats, removing duplicate entries, handling missing values, and organizing variables to ensure the dataset is reliable and ready for analysis.

Once the data is structured, SIPAD transforms the processed information into meaningful visual representations such as summary tables, charts, and dashboards. These visualizations highlight disaster patterns, frequency, time-based trends, and potential impacts, making complex data easier to interpret.

The primary objective of SIPAD is to generate data-driven insights that support disaster management and decision-making processes. Through effective data representation, the prototype helps evaluate past disaster events, identify trends, and support risk mitigation planning.

Overall, SIPAD serves as both an analytical tool and a proof of concept, demonstrating how structured data processing and accessible visualization can contribute to more informed and responsive disaster management efforts.`,
    image: "/SIP.png",
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
      "Data analysis and visualization",
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
    desc: `REFORA is a canteen food reservation prototype designed specifically for ITERA students to streamline the food ordering process and improve overall efficiency.`,
    image: "/REF.png",
    category: "Design",
    tech: ["Figma", "Adobe Photoshop", "Canva"],
    year: 2024,

    status: "Prototype",
    role: "UI/UX Designer",
    team: "Team Project",
    featured: false,
    updatedAt: "2024-09-15",

    features: [
      "Canteen food ordering system",
      "Optimized UI/UX workflow",
      "Student-centric user flow",
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
    desc: `Namura Property is a modern real estate platform designed to deliver reliable, transparent, and well-structured property information for individuals and businesses.

Each property listing is presented with comprehensive details including specifications, pricing, location insights, and supporting visuals. This structured presentation simplifies the property discovery process while maintaining clarity and accuracy.

By combining organized content architecture with thoughtful visual design, the platform emphasizes data consistency and user experience.

Overall, the Namura Property website reflects a professional and forward-thinking approach to real estate presentation, positioning the brand as a trustworthy partner for buyers, investors, and business stakeholders.`,
    image: "/NAM.png",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Figma", "Canva"],
    year: 2025,

    status: "Finished",
    role: "Full Stack Developer",
    team: "Solo Project",
    featured: true,
    updatedAt: "2025-02-05",

    features: [
      "Structured property listings",
      "Client inquiry management",
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
    desc: `VINSGawe is an event management platform tailored for VINSGawe events, designed to facilitate seamless event organization and participant engagement.`,
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
      "User registration system",
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
