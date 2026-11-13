
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";

/* ===========================================================
   HOME PAGE
   VDE 2K27 — Personal Portfolio
   =========================================================== */

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--color-background)]
        text-[var(--color-foreground)]
      "
    >
      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        id="home"
        aria-label="Home"
        className="relative"
      >
        <Hero />
      </section>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section
        id="experience"
        aria-label="Professional Experience"
        className="relative"
      >
        <Experience />
      </section>

      {/* =====================================================
          CAPABILITIES
          ===================================================== */}

      <section
        id="capabilities"
        aria-label="Skills and Capabilities"
        className="relative"
      >
        <Skills />
      </section>

      {/* =====================================================
          LATEST ARTICLES
          ===================================================== */}

      <section
        id="articles"
        aria-label="Latest Articles"
        className="relative"
      >
        <Articles />
      </section>
    </main>
  );
}
