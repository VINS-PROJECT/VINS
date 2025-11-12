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
    { icon: <Github className="w-5 h-5" />, url: "https://github.com", name: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com", name: "Instagram" },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-24 pb-32 relative overflow-hidden">
      {/* === Background Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Let’s Connect
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project, collaboration, or just want to say hi?  
            I’d love to hear from you — let’s create something meaningful together.
          </p>
        </motion.div>

        {/* === Contact Section === */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* === Left Info === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#E2C07C] mb-4">
              Contact Information
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              You can reach out directly through the form or via any of the platforms below.  
              I’m always open to new ideas, opportunities, and collaborations.
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E2C07C]" />
                <span>anin.dev@mail.com</span>
              </div>
              <div className="flex gap-3 mt-4">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-[#E2C07C]/30 rounded-full hover:border-[#E2C07C] hover:text-[#E2C07C] transition-all"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-12 border-l-4 border-[#E2C07C] pl-5"
            >
              <p className="italic text-gray-400">
                “Design and code are two sides of the same coin — one tells the story, the other makes it real.”
              </p>
            </motion.div>
          </motion.div>

          {/* === Right Form === */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-[#E2C07C]/20 rounded-2xl p-8 backdrop-blur-md hover:border-[#E2C07C]/40 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-[#E2C07C] mb-6">
              Send a Message
            </h2>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm mb-1 text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#E2C07C]/20 focus:border-[#E2C07C] text-gray-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#E2C07C]/20 focus:border-[#E2C07C] text-gray-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#E2C07C]/20 focus:border-[#E2C07C] text-gray-100 focus:outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E2C07C] text-black font-semibold hover:brightness-110 transition"
              >
                <Send className="w-4 h-4" /> {submitted ? "Sent!" : "Send Message"}
              </motion.button>
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-[#E2C07C]"
              >
                ✅ Message sent successfully! I’ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>

      {/* === Bottom Gradient === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
