"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
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
              Terms <span className="text-[var(--accent)]">& Conditions</span>
            </h1>

            <p className="text-sm md:text-base opacity-70 max-w-xl">
              These Terms & Conditions govern your use of this website.
              By accessing or using this site, you agree to these terms.
            </p>

            <p className="mt-2 text-xs opacity-50">
              Last updated: January 2026
            </p>
          </motion.header>

          {/* ================= CONTENT ================= */}
          <section className="space-y-14 text-sm leading-relaxed">

            <PolicyBlock
              title="1. Acceptance of Terms"
              text="By accessing this website, you agree to be bound by these
              Terms & Conditions and all applicable laws and regulations.
              If you do not agree with any part of these terms, you should
              not use this website."
            />

            <PolicyBlock
              title="2. Use of the Website"
              text="You agree to use this website for lawful purposes only.
              You must not misuse the website in any way that could
              damage, disable, or impair its functionality."
            />

            <PolicyBlock
              title="3. Intellectual Property"
              text="All content on this website, including text, graphics,
              logos, and designs, is the intellectual property of the
              website owner unless otherwise stated.
              Unauthorized use or reproduction is prohibited."
            />

            <PolicyBlock
              title="4. Disclaimer"
              text="The information provided on this website is for general
              informational purposes only. The website is provided
              “as is” without warranties of any kind, express or implied."
            />

            <PolicyBlock
              title="5. Limitation of Liability"
              text="In no event shall the website owner be liable for any
              damages arising from the use or inability to use this
              website, including but not limited to indirect or
              consequential damages."
            />

            <PolicyBlock
              title="6. External Links"
              text="This website may contain links to third-party websites.
              The website owner has no control over and assumes no
              responsibility for the content or practices of these
              external sites."
            />

            <PolicyBlock
              title="7. Changes to Terms"
              text="These Terms & Conditions may be updated at any time
              without prior notice. Continued use of the website
              constitutes acceptance of the revised terms."
            />

            <PolicyBlock
              title="8. Governing Law"
              text="These terms shall be governed and interpreted in accordance
              with applicable laws in the relevant jurisdiction."
            />

            <PolicyBlock
              title="9. Contact"
              text="If you have any questions regarding these Terms & Conditions,
              please contact us through the available channels on this website."
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
