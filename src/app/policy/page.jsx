"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-28 pb-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm opacity-65 max-w-xl">
            This Privacy Policy explains how information is collected, used,
            and protected when you use this website.
          </p>
          <p className="mt-2 text-xs opacity-50">
            Last updated: January 2026
          </p>
        </header>

        {/* ================= CONTENT ================= */}
        <section className="space-y-12 text-sm leading-relaxed opacity-80">

          <div>
            <h2 className="text-lg font-semibold mb-3">1. Information We Collect</h2>
            <p>
              We may collect limited personal information such as your name,
              email address, or other contact details only when you voluntarily
              provide them (for example, through a contact form).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">2. How We Use Your Information</h2>
            <p>
              The information collected is used solely to respond to inquiries,
              improve the website experience, and maintain communication when
              requested. We do not sell or rent personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">3. Cookies and Analytics</h2>
            <p>
              This website may use basic cookies or analytics tools to understand
              usage patterns and improve performance. These tools do not collect
              personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">4. Data Security</h2>
            <p>
              Reasonable measures are taken to protect your information.
              However, no method of transmission over the internet is 100% secure,
              and absolute security cannot be guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">5. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites.
              We are not responsible for the privacy practices or content
              of those external sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">6. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated from time to time.
              Any changes will be reflected on this page with an updated
              revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">7. Contact</h2>
            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us through the available communication channels
              on this website.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
