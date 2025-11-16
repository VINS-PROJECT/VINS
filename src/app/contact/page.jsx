"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
  ];

  return (
    <main
      className="
        min-h-screen pt-24 pb-32 relative overflow-hidden
        transition-colors duration-500
        bg-[var(--background)] text-[var(--foreground)]
      "
    >
      {/* === Glow Background (auto theme) === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 25%, var(--accent)15, transparent 65%),
            radial-gradient(circle at 80% 80%, var(--accent)10, transparent 60%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* === TITLE === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1
            className="
              text-4xl md:text-5xl font-extrabold 
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-dark))`,
            }}
          >
            Let’s Connect
          </h1>

          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-[var(--foreground)]/70">
            Have a project, collaboration, or just want to say hello?  
            I’d love to hear from you — let’s build something meaningful together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* === LEFT INFO === */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">
              Contact Information
            </h2>

            <p className="text-[var(--foreground)]/70 mb-7 leading-relaxed">
              You can reach out through the form, email, or any of the platforms below.  
              Open to ideas, opportunities, and meaningful collaborations.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[var(--foreground)]/80">
                vin.simorangkir81@gmail.com
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.url}
                  target="_blank"
                  className="
                    p-3 rounded-full transition-all
                    border border-[var(--accent)]/25 
                    text-[var(--foreground)]/80
                    hover:text-[var(--accent)] 
                    hover:border-[var(--accent)]/70 
                    hover:shadow-[0_0_12px_var(--accent)]
                  "
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-12 pl-5 border-l-4"
              style={{ borderColor: "var(--accent)" }}
            >
              <p className="italic text-[var(--foreground)]/60">
                “Design and code are two sides of the same vision —  
                one imagines the future, the other builds it.”
              </p>
            </motion.div>
          </motion.div>

          {/* === RIGHT FORM === */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-2xl p-8 backdrop-blur-md transition border
            "
            style={{
              borderColor: "var(--accent)30",
              background: "var(--foreground)08",
            }}
          >
            <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
              Send a Message
            </h2>

            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm mb-1 text-[var(--foreground)]/60">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full px-4 py-3 rounded-lg outline-none transition
                    border bg-transparent
                  "
                  style={{
                    borderColor: "var(--accent)30",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1 text-[var(--foreground)]/60">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full px-4 py-3 rounded-lg outline-none transition
                    border bg-transparent
                  "
                  style={{
                    borderColor: "var(--accent)30",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-1 text-[var(--foreground)]/60">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  className="
                    w-full px-4 py-3 rounded-lg outline-none resize-none transition
                    border bg-transparent
                  "
                  style={{
                    borderColor: "var(--accent)30",
                    color: "var(--foreground)",
                  }}
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                className="
                  flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold
                  text-black transition shadow-md
                "
                style={{
                  background: "var(--accent)",
                }}
              >
                <Send className="w-4 h-4" />
                {submitted ? "Sent!" : "Send Message"}
              </motion.button>
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm"
                style={{ color: "var(--accent)" }}
              >
                ✅ Message sent successfully! I’ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Fade bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, var(--background), transparent)`,
        }}
      />
    </main>
  );
}
