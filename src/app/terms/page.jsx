"use client";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen pt-28 pb-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm opacity-65 max-w-xl">
            These Terms & Conditions govern your use of this website.
            By accessing or using this site, you agree to these terms.
          </p>
          <p className="mt-2 text-xs opacity-50">
            Last updated: January 2026
          </p>
        </header>

        {/* ================= CONTENT ================= */}
        <section className="space-y-12 text-sm leading-relaxed opacity-80">

          <div>
            <h2 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these
              Terms & Conditions and all applicable laws and regulations.
              If you do not agree with any part of these terms, you should
              not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">2. Use of the Website</h2>
            <p>
              You agree to use this website for lawful purposes only.
              You must not misuse the website in any way that could
              damage, disable, or impair its functionality.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics,
              logos, and designs, is the intellectual property of the
              website owner unless otherwise stated.
              Unauthorized use or reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">4. Disclaimer</h2>
            <p>
              The information provided on this website is for general
              informational purposes only. The website is provided
              “as is” without warranties of any kind, express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">5. Limitation of Liability</h2>
            <p>
              In no event shall the website owner be liable for any
              damages arising from the use or inability to use this
              website, including but not limited to indirect or
              consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">6. External Links</h2>
            <p>
              This website may contain links to third-party websites.
              The website owner has no control over and assumes no
              responsibility for the content or practices of these
              external sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">7. Changes to Terms</h2>
            <p>
              These Terms & Conditions may be updated at any time
              without prior notice. Continued use of the website
              constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">8. Governing Law</h2>
            <p>
              These terms shall be governed and interpreted in accordance
              with applicable laws in the relevant jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us through the available channels on this website.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
