export const articles = [
  {
    id: 1,
    title: "Building a High-Performance Portfolio with Next.js 15",
    desc: "Learn how to create blazing-fast personal websites using the latest Next.js features and best optimization techniques.",
    date: "June 2024",
    image: "/articles/next15.png",
    category: "Web Development",
    slug: "nextjs-15-portfolio",
    content: `
      Building your personal portfolio with Next.js 15 offers huge improvements in speed, SEO, and scalability.
      The App Router and new caching strategies allow faster builds, optimized rendering, and better developer experience.

      ### Key Advantages:
      - **Server Components** for lighter frontend bundles.
      - **Static Generation** with ISR.
      - **Streaming** & React Suspense.

      You can combine **Framer Motion**, **TailwindCSS**, and **Vercel Analytics** for a highly polished modern portfolio.
    `,
  },

  {
    id: 2,
    title: "Design Systems for Developers",
    desc: "Why front-end engineers should think like designers — a guide to building consistent and scalable UI components.",
    date: "May 2024",
    image: "/articles/design-system.png",
    category: "UI/UX",
    slug: "design-systems-for-devs",
    content: `
      A design system bridges the gap between designers and developers — it’s the shared language of your product.

      ### Why It Matters:
      - Ensures **visual consistency**.
      - Improves **team collaboration**.
      - Reduces redundant work & speeds up prototyping.

      Using tools like Figma Tokens and component libraries ensures design accuracy across platforms.
    `,
  },

  {
    id: 3,
    title: "Creating Animations with Framer Motion in Next.js",
    desc: "Step-by-step tutorial to implement smooth UI animations that enhance user experience without hurting performance.",
    date: "April 2024",
    image: "/articles/framer-motion.png",
    category: "Animation",
    slug: "framer-motion-nextjs",
    content: `
      Framer Motion is the most powerful animation library for React and Next.js.

      ### Use Cases:
      - Page transitions
      - Hover effects
      - Scroll animations

      Wrap elements in **motion.div**, define variants, and combine with layouts for seamless UX.
    `,
  },
];
