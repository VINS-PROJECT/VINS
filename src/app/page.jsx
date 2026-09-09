import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-background)]">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section id="home">
        <Hero />
      </section>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}
      <section id="experience">
        <Experience />
      </section>

      {/* =====================================================
          CAPABILITIES
          ===================================================== */}
      <section id="capabilities">
        <Skills />
      </section>

      {/* =====================================================
          LATEST ARTICLES
          ===================================================== */}
      <section id="articles">
        <Articles />
      </section>
    </main>
  );
}