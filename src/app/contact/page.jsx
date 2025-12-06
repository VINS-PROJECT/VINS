"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "", // 🔥 Anti-spam honeypot
  });

  const [status, setStatus] = useState(""); // success | error | loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honey: "" });
      } else setStatus("error");
    } catch (e) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
  ];

  return (
    <main className="min-h-screen pt-24 pb-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, var(--accent), var(--accent-dark))" }}
          >
            Let’s Connect
          </h1>
          <p className="mt-4 opacity-75 max-w-xl mx-auto">
            Have a project, collaboration, or message? Let’s talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">
              Contact Information
            </h2>

            <div className="flex items-center gap-3">
              <Mail className="text-[var(--accent)]" />
              <span>vin.simorangkir81@gmail.com</span>
            </div>

            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.url}
                  target="_blank"
                  className="p-3 rounded-full border border-[var(--accent)]/30 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl border border-[var(--accent)]/20 backdrop-blur-lg"
          >
            <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
              Send a Message
            </h2>

            {/* Honeypot Anti-Bot */}
            <input
              name="honey"
              type="text"
              value={formData.honey}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 rounded-lg bg-transparent border border-[var(--border)]"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 rounded-lg bg-transparent border border-[var(--border)]"
              />

              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="p-3 rounded-lg bg-transparent border border-[var(--border)]"
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold flex items-center gap-2"
              >
                <Send size={16} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </div>

            {status === "success" && (
              <p className="mt-3 text-green-400 text-sm">Message sent successfully! 🎉</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-400 text-sm">Failed to send. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </main>
  );
}
