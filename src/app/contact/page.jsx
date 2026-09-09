"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Mail,
  Send,
  Linkedin,
  Github,
  Instagram,
  BriefcaseBusiness,
  MessageSquare,
} from "lucide-react";

/* =========================================================
   SOCIAL / PROFESSIONAL LINKS
   ========================================================= */

const professionalLinks = [
  {
    label: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/kevinsimorangkir/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    description: "Code & projects",
    href: "https://github.com/kevinsimorangkir21/",
    icon: Github,
  },
  {
    label: "Instagram",
    description: "Creative & personal",
    href: "https://www.instagram.com/kvinsimorangkir/",
    icon: Instagram,
  },
];

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   CONTACT PAGE
   ========================================================= */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const email = "vin.simorangkir81@gmail.com";

  /* =======================================================
     FORM
     ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus("sending");

    /*
     * Open user's email client.
     * This avoids pretending that the message was
     * sent to a backend when there is no API endpoint yet.
     */

    const subject = encodeURIComponent(
      `Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  /* =======================================================
     COPY EMAIL
     ======================================================= */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-35 blur-[130px]" />

        <div className="absolute bottom-[10%] left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">

            {/* LEFT */}

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                  CONTACT
                </span>
              </div>

              <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
                Let's
                <br />

                <span className="text-[var(--color-brand)]">
                  Connect.
                </span>
              </h1>
            </div>

            {/* RIGHT */}

            <div className="lg:pb-2">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Have an idea, opportunity, or project worth exploring?
                Let's start a conversation and see where it leads.
              </p>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            01 — INTD
            ===================================================== */}

        <section id="intd" className="mt-24 sm:mt-32">

          <SectionLabel
            number="01"
            label="INTD"
          />

          <div className="mt-8 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] lg:rounded-[36px]">

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              {/* MAIN MESSAGE */}

              <div className="p-7 sm:p-10 lg:p-14">

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-hover)]">
                  START HERE
                </span>

                <h2 className="mt-8 max-w-2xl font-[var(--font-heading)] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Every good
                  <br />
                  <span className="text-[var(--color-brand)]">
                    idea starts
                  </span>
                  <br />
                  somewhere.
                </h2>

                <p className="mt-7 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  Whether you are looking for a designer, developer,
                  creative collaborator, or simply want to exchange
                  ideas, this is a good place to begin.
                </p>

              </div>

              {/* STATUS */}

              <div className="border-t border-[var(--color-border)] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">

                <div className="flex h-full flex-col justify-between">

                  <div>
                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
                      CURRENT STATUS
                    </span>

                    <div className="mt-6 flex items-center gap-3">

                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)] opacity-40" />

                        <span className="relative h-3 w-3 rounded-full bg-[var(--color-brand)]" />
                      </span>

                      <span className="font-[var(--font-heading)] text-xl font-semibold tracking-[-0.03em]">
                        Open for opportunities
                      </span>

                    </div>
                  </div>

                  <div className="mt-16 border-t border-[var(--color-border)] pt-6">

                    <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                      Available for meaningful projects,
                      collaborations, and selected opportunities.
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            02 — CONTACT FORM
            ===================================================== */}

        <section id="contact-form">

          <SectionLabel
            number="02"
            label="CONTACT FORM"
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

            {/* FORM INTRO */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-10 lg:p-12"
            >

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-hover)]">
                DROP A MESSAGE
              </span>

              <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                Tell me
                <br />
                what's
                <br />
                <span className="text-[var(--color-brand)]">
                  on your mind.
                </span>
              </h2>

              <p className="mt-7 max-w-sm font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                Share a little context about your project,
                opportunity, or idea. I'll take a look and
                get back to you.
              </p>

              <div className="mt-10 flex items-center gap-3 border-t border-[var(--color-border)] pt-6">

                <MessageSquare
                  size={17}
                  strokeWidth={1.6}
                  className="text-[var(--color-brand)]"
                />

                <span className="font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                  Usually best for project inquiries
                </span>

              </div>
            </motion.div>

            {/* FORM */}

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-10 lg:rounded-[36px] lg:p-12"
            >

              {/* SUCCESS */}

              {status === "success" && (
                <div className="mb-7 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-[var(--font-body)] text-sm font-medium">
                      Your email client should be open.
                    </p>

                    <p className="mt-1 font-[var(--font-body)] text-xs leading-5 text-green-600">
                      If it didn't open, use the direct email
                      option below.
                    </p>
                  </div>

                </div>
              )}

              {/* NAME */}

              <FormField
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />

              {/* EMAIL */}

              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />

              {/* MESSAGE */}

              <div className="mb-6">

                <label
                  htmlFor="message"
                  className="mb-3 block font-[var(--font-body)] text-xs font-medium text-[var(--color-foreground)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 font-[var(--font-body)] text-sm leading-7 text-[var(--color-foreground)] outline-none transition-all placeholder:text-[var(--color-muted-light)] focus:border-[var(--color-foreground)] focus:ring-4 focus:ring-[var(--color-brand-soft)]"
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-4 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg disabled:pointer-events-none disabled:opacity-50"
              >

                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Opening email...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={16}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}

              </button>

              <p className="mt-4 text-center font-[var(--font-body)] text-[10px] leading-5 text-[var(--color-muted-light)]">
                This form opens your email client to send the
                message directly.
              </p>

            </motion.form>
          </div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            03 — DIRECT EMAIL
            ===================================================== */}

        <section id="direct-email">

          <SectionLabel
            number="03"
            label="DIRECT EMAIL"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="mt-8 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-foreground)] text-white lg:rounded-[36px]"
          >

            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

              <div className="p-7 sm:p-10 lg:p-14">

                <Mail
                  size={24}
                  strokeWidth={1.5}
                  className="text-[var(--color-brand-light)]"
                />

                <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Prefer email?
                  <br />
                  <span className="text-[var(--color-brand-light)]">
                    Let's talk there.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl font-[var(--font-body)] text-sm leading-7 text-white/50 sm:text-base">
                  For direct inquiries, opportunities, or anything
                  that needs a little more context.
                </p>

              </div>

              <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">

                <div className="flex flex-col gap-4">

                  <a
                    href={`mailto:${email}`}
                    className="group inline-flex items-center gap-3 font-[var(--font-heading)] text-lg font-semibold tracking-[-0.03em] text-white transition-colors hover:text-[var(--color-brand-light)] sm:text-xl"
                  >
                    {email}

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 font-[var(--font-body)] text-xs text-white/50 transition-all hover:border-white/25 hover:text-white"
                  >
                    <Copy
                      size={13}
                      strokeWidth={1.6}
                    />

                    {copied ? "Copied" : "Copy email"}
                  </button>

                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            04 — SOCIAL / PROFESSIONAL LINKS
            ===================================================== */}

        <section id="social-links">

          <SectionLabel
            number="04"
            label="SOCIAL / PROFESSIONAL LINKS"
          />

          <div className="mt-8 grid gap-px overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3 lg:rounded-[36px]">

            {professionalLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  variants={fadeUp}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="group bg-[var(--color-background)] p-7 transition-all duration-300 hover:bg-[var(--color-surface)] sm:p-9"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-foreground)] transition-all duration-300 group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand-hover)]">
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="text-[var(--color-border-strong)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                    />

                  </div>

                  <div className="mt-16">

                    <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
                      {item.label}
                    </h3>

                    <p className="mt-2 font-[var(--font-body)] text-sm text-[var(--color-muted)]">
                      {item.description}
                    </p>

                  </div>

                </motion.a>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            05 — COLLAB / HIRING
            ===================================================== */}

        <section id="collab-hiring">

          <SectionLabel
            number="05"
            label="COLLAB / HIRING"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="mt-8 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-10 lg:rounded-[36px] lg:p-14"
          >

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-foreground)] text-white">
                  <BriefcaseBusiness
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <h2 className="mt-9 max-w-4xl font-[var(--font-heading)] text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                  Building something
                  <br />
                  <span className="text-[var(--color-brand)]">
                    worth creating?
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  I'm open to selected collaborations, freelance
                  opportunities, creative projects, and roles where
                  design and technology come together.
                </p>

              </div>

              <Link
                href="#contact-form"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-foreground)] px-7 py-4 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
              >
                Start a Conversation

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-7">

              <span className="rounded-full bg-[var(--color-background)] px-4 py-2 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                Freelance
              </span>

              <span className="rounded-full bg-[var(--color-background)] px-4 py-2 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                Collaboration
              </span>

              <span className="rounded-full bg-[var(--color-background)] px-4 py-2 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                Full-time
              </span>

              <span className="rounded-full bg-[var(--color-background)] px-4 py-2 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                Creative Projects
              </span>

            </div>

          </motion.div>
        </section>

      </div>
    </main>
  );
}

/* =========================================================
   SECTION LABEL
   ========================================================= */

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3">

      <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
        {number}
      </span>

      <span className="h-px w-8 bg-[var(--color-border-strong)]" />

      <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {label}
      </span>

    </div>
  );
}

/* =========================================================
   FORM FIELD
   ========================================================= */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-6">

      <label
        htmlFor={name}
        className="mb-3 block font-[var(--font-body)] text-xs font-medium text-[var(--color-foreground)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 font-[var(--font-body)] text-sm text-[var(--color-foreground)] outline-none transition-all placeholder:text-[var(--color-muted-light)] focus:border-[var(--color-foreground)] focus:ring-4 focus:ring-[var(--color-brand-soft)]"
      />

    </div>
  );
}

/* =========================================================
   DIVIDER
   ========================================================= */

function SectionDivider() {
  return (
    <div className="my-24 h-px bg-[var(--color-border)] sm:my-32 lg:my-36" />
  );
}