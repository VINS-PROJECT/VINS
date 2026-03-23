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
      if (!token) throw new Error();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honey: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  const socials = [
    { icon: <Github size={18} />, url: "https://github.com" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com" },
    { icon: <Instagram size={18} />, url: "https://instagram.com" },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== SOFT BACKGROUND (CONSISTENT) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full top-[-120px] right-[-120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-32">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Let’s <span className="text-[var(--accent)]">Connect</span>
            </h1>

            <p className="mt-4 text-[var(--foreground)]/70">
              Have a project, collaboration, or idea? I’d love to hear from you.
            </p>
          </motion.div>

          {/* ================= BODY ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT (INFO) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-lg font-medium mb-2">
                  Contact
                </h2>

                <div className="flex items-center gap-3 text-sm opacity-70">
                  <Mail className="text-[var(--accent)]" />
                  <span className="break-all">
                    vin.simorangkir81@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    target="_blank"
                    className="
                      p-2 rounded-lg
                      border border-[var(--border)]
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
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="
                p-7 rounded-2xl
                border border-[var(--border)]
                bg-[var(--background)]/60 backdrop-blur-xl
              "
            >
              <h2 className="text-lg font-medium mb-5">
                Send Message
              </h2>

              <input
                type="text"
                name="honey"
                value={formData.honey}
                onChange={handleChange}
                className="hidden"
              />

              <div className="flex flex-col gap-4">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="p-3 rounded-xl border border-[var(--border)] bg-transparent focus:border-[var(--accent)] outline-none"
                />

                <button
                  disabled={status === "loading"}
                  className="
                    px-6 py-3 rounded-xl
                    bg-[var(--accent)] text-black
                    font-medium
                    flex items-center justify-center gap-2
                    disabled:opacity-60
                  "
                >
                  <Send size={16} />
                  {status === "loading" ? "Sending..." : "Send"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-4 text-sm text-emerald-400">
                  Message sent ✓
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  Failed to send message
                </p>
              )}
            </motion.form>
          </div>

        </div>
      </div>
    </main>
  );
}

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="
        p-3 rounded-xl
        border border-[var(--border)]
        bg-transparent
        focus:border-[var(--accent)]
        outline-none
      "
      {...props}
    />
  );
}