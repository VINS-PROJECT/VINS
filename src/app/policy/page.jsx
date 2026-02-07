"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= GOLD DIAGONAL HEADER ================= */}
      <div
        aria-hidden
        className="
          absolute top-0 left-0 w-full
          h-[360px]
          bg-gradient-to-br
          from-[var(--accent)]/25
          via-[var(--accent)]/12
          to-transparent
          -skew-y-6
          origin-top-left
          pointer-events-none
        "
      />

      {/* CUT FADE */}
      <div
        aria-hidden
        className="
          absolute top-[300px] left-0 w-full h-40
          bg-gradient-to-b from-transparent to-[var(--background)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-36 pb-32">
        <div className="max-w-3xl mx-auto px-6">

          {/* ================= HEADER ================= */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Privacy <span className="text-[var(--accent)]">Policy</span>
            </h1>

            <p className="text-sm md:text-base opacity-70 max-w-xl">
              This Privacy Policy explains how information is collected, used,
              and protected when you use this website.
            </p>

            <p className="mt-2 text-xs opacity-50">
              Last updated: January 2026
            </p>
          </motion.header>

          {/* ================= CONTENT ================= */}
          <section className="space-y-14 text-sm leading-relaxed">

            <PolicyBlock
              title="1. Information We Collect"
              text="We may collect limited personal information such as your name,
              email address, or other contact details only when you voluntarily
              provide them (for example, through a contact form)."
            />

            <PolicyBlock
              title="2. How We Use Your Information"
              text="The information collected is used solely to respond to inquiries,
              improve the website experience, and maintain communication when
              requested. We do not sell or rent personal data to third parties."
            />

            <PolicyBlock
              title="3. Cookies and Analytics"
              text="This website may use basic cookies or analytics tools to understand
              usage patterns and improve performance. These tools do not collect
              personally identifiable information."
            />

            <PolicyBlock
              title="4. Data Security"
              text="Reasonable measures are taken to protect your information.
              However, no method of transmission over the internet is 100% secure,
              and absolute security cannot be guaranteed."
            />

            <PolicyBlock
              title="5. Third-Party Links"
              text="This website may contain links to third-party websites.
              We are not responsible for the privacy practices or content
              of those external sites."
            />

            <PolicyBlock
              title="6. Changes to This Policy"
              text="This Privacy Policy may be updated from time to time.
              Any changes will be reflected on this page with an updated
              revision date."
            />

            <PolicyBlock
              title="7. Contact"
              text="If you have any questions regarding this Privacy Policy,
              please contact us through the available communication channels
              on this website."
            />

          </section>
        </div>
      </div>
    </main>
  );
}

/* ================= SMALL COMPONENT ================= */
function PolicyBlock({ title, text }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-[var(--accent)]">
        {title}
      </h2>
      <p className="opacity-80">
        {text}
      </p>
    </div>
  );
}
