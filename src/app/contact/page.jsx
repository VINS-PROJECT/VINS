"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "",
  });

  const [status, setStatus] = useState("");

  /* ================= LOAD reCAPTCHA ================= */
  useEffect(() => {
    if (window.grecaptcha) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const executeRecaptcha = async () => {
    if (!window.grecaptcha) return null;
    return await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "contact_form" }
    );
  };

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honey) return;

    setStatus("loading");

    try {
      const token = await executeRecaptcha();
      if (!token) throw new Error("reCAPTCHA failed");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honey: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4500);
  };

  const socials = [
    { icon: <Github size={18} />, url: "https://github.com" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com" },
    { icon: <Instagram size={18} />, url: "https://instagram.com" },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= GOLD DIAGONAL HEADER ================= */}
      <div
        aria-hidden
        className="
          absolute top-0 left-0 w-full
          h-[420px] md:h-[460px]
          bg-gradient-to-br
          from-[var(--accent)]/25
          via-[var(--accent)]/12
          to-transparent
          -skew-y-6
          origin-top-left
          pointer-events-none
        "
      />

      {/* FADE CUT */}
      <div
        aria-hidden
        className="
          absolute top-[360px] md:top-[400px]
          left-0 w-full h-32
          bg-gradient-to-b from-transparent to-[var(--background)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-32 pb-36">
        <div className="max-w-6xl mx-auto px-6">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-24 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Let’s{" "}
              <span className="text-[var(--accent)]">Connect</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--foreground)]/70">
              Have a project, collaboration, or idea? I’d love to hear from you.
            </p>
          </motion.div>

          {/* ================= BODY ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                  Contact Information
                </h2>
                <div className="flex items-center gap-3 text-sm opacity-80">
                  <Mail className="text-[var(--accent)]" />
                  <span>vin.simorangkir81@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-xl
                      border border-[var(--accent)]/30
                      backdrop-blur-lg
                      hover:border-[var(--accent)]
                      hover:text-[var(--accent)]
                      transition
                    "
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                p-8 rounded-3xl
                backdrop-blur-xl
                bg-[var(--card)]
                border border-[var(--border)]
                shadow-[0_18px_60px_rgba(0,0,0,0.18)]
              "
            >
              <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
                Send a Message
              </h2>

              <input
                type="text"
                name="honey"
                value={formData.honey}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
              />

              <div className="flex flex-col gap-5">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="p-3 rounded-xl bg-transparent border border-[var(--border)] focus:border-[var(--accent)] outline-none transition"
                />

                <motion.button
                  whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
                  disabled={status === "loading"}
                  className="px-6 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send size={16} />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>
              </div>

              {status === "success" && (
                <p className="mt-4 text-sm text-emerald-400">
                  Message sent successfully ✓
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  Failed to send message. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ================= INPUT ================= */
function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="p-3 rounded-xl bg-transparent border border-[var(--border)] focus:border-[var(--accent)] outline-none transition"
      {...props}
    />
  );
}
