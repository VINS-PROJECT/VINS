import { slugify } from "@/lib/slugify";

export const projectsData = [

  {
    id: 1,

    title:
      "Harvesty - Sustainable Farming for a Healthier Future",

    desc:
      `Harvesty is an agriculture information system designed to support digital transformation in the agricultural sector.

Harvesty connects farmers and customers through an integrated digital platform that allows product management, agricultural information access, and online transactions.

The system focuses on simplicity, accessibility, and responsive design to ensure that users with different technology backgrounds can easily operate the platform.`,

    image:
      "/Projects/Projects2.png",

    category:
      "Frontend",

    tech:[
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
      "Canva",
    ],

    year:
      2024,


    status:
      "Finished",


    role:
      "Frontend Developer",


    team:
      "Team Project",


    featured:
      false,


    updatedAt:
      "2024-06-20",



    features:[

      "Direct connection between farmers and customers",

      "Agricultural product management",

      "Responsive website interface",

      "Product information system",

      "Digital transaction workflow",

    ],


    gallery:[

      "/Harvesty/Harvesty1.png",

      "/Harvesty/Harvesty2.png",

      "/Harvesty/Harvesty3.png",

    ],


    links:{

      live:
        "https://example.com/harvesty",


      github:
        "https://github.com/yourname/harvesty",


      figma:
        "https://www.figma.com/proto/xxxxx/Harvesty",


      pdf:
        "/pdf/Harvesty-Case-Study.pdf",

    },

  },









  {
    id:2,


    title:
      "SIPAD (Data Analysis Monitoring Information System)",


    desc:
      `SIPAD is a disaster data analysis prototype designed to process, analyze, and visualize disaster related information.

The project focuses on transforming raw disaster datasets into structured insights using data cleaning, processing, and dashboard visualization.

SIPAD helps users understand disaster trends and supports better decision making through accessible data representation.`,



    image:
      "/Thumbnail/SIPAD_FR.png",



    category:
      "UI/UX Design",



    tech:[

      "Figma",

      "Excel",

    ],



    year:
      2025,



    status:
      "Prototype",



    role:
      "UI Designer & Data Analyst",



    team:
      "Solo Project",



    featured:
      true,



    updatedAt:
      "2025-01-10",




    features:[

      "Disaster data cleaning",

      "Data visualization dashboard",

      "Information architecture",

      "Excel based analytics",

    ],



    gallery:[

      "/SIPAD/SIPAD1.png",

      "/SIPAD/SIPAD2.png",

    ],




    links:{

      figma:
        "https://www.figma.com/proto/xxxxx/SIPAD",


      pdf:
        "/pdf/SIPAD-Case-Study.pdf",

    },


  },










  {
    id:3,


    title:
      "REFORA (Reservation Food of ITERA)",



    desc:
      `REFORA is a food reservation application prototype created to improve the ordering experience for ITERA students.

The platform allows students to browse menus, reserve food, and reduce waiting time at campus canteens.

REFORA focuses on user experience, simple interaction flow, and efficient digital food ordering.`,



    image:
      "/Projects/Projects3.png",



    category:
      "UI/UX Design",



    tech:[

      "Figma",

      "Adobe Photoshop",

      "Canva",

    ],



    year:
      2024,



    status:
      "Prototype",



    role:
      "UI/UX Designer",



    team:
      "Team Project",



    featured:
      false,



    updatedAt:
      "2024-09-15",





    features:[

      "Food reservation system",

      "Mobile application prototype",

      "Optimized ordering workflow",

      "Student centered design",

    ],




    gallery:[

      "/REFORA/REFORA1.png",

    ],




    links:{


      figma:
        "https://www.figma.com/proto/xxxxx/REFORA",



      pdf:
        "/pdf/REFORA-Case-Study.pdf",


    },


  },











  {
    id:4,


    title:
      "Namura Property Website",



    desc:
      `Namura Property is a modern real estate website designed to provide structured and professional property information.

The website presents property listings, specifications, locations, and visual details through a clean digital experience.

The goal is to improve property discovery and create a trustworthy online presence for real estate businesses.`,




    image:
      "/Projects/Projects4.png",




    category:
      "Full Stack",




    tech:[

      "Next.js",

      "Tailwind CSS",

      "Node.js",

      "Figma",

    ],




    year:
      2025,




    status:
      "Finished",




    role:
      "Full Stack Developer",




    team:
      "Solo Project",




    featured:
      true,




    updatedAt:
      "2025-02-05",





    features:[

      "Property listing",

      "Search and filtering",

      "Admin management",

      "Responsive interface",

      "KPR calculator",

    ],




    gallery:[

      "/Namura/Namura1.png",

      "/Namura/Namura2.png",

      "/Namura/Namura3.png",

    ],




    links:{


      live:
        "https://namuraproperty.com",


      pdf:
        "/pdf/Namura-Case-Study.pdf",


    },


  },










  {
    id:5,


    title:
      "VINSGawe",




    desc:
      `VINSGawe is an event management platform designed to support event organization, registration, and participant management.

The platform helps simplify event workflows through a centralized digital system.`,




    image:
      "/VINSGawe-Banner.png",




    category:
      "Full Stack",




    tech:[

      "React",

      "Node.js",

      "Express",

      "MongoDB",

      "Figma",

    ],





    year:
      2025,




    status:
      "In Progress",





    role:
      "Full Stack Developer",




    team:
      "Team Project",




    featured:
      false,





    updatedAt:
      "2025-03-01",





    features:[

      "Event management",

      "Registration system",

      "Dashboard monitoring",

    ],





    gallery:[

      "/VINSGawe/VINSGawe1.png",

      "/VINSGawe/VINSGawe2.png",

    ],





    links:{


      live:
        "https://gawe.kvn-code.asia",


      pdf:
        "/pdf/VINSGawe-Case-Study.pdf",


    },


  },



].map((p)=>({

  ...p,


  slug:

    p.slug ?? slugify(p.title),


}));