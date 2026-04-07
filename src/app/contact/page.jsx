"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Send
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);

  };

  const socials = [
    { icon: <Github size={20} />, url: "https://github.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
    { icon: <Instagram size={20} />, url: "https://instagram.com" }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-32 space-y-24">

        {/* HERO */}

        <section className="text-center max-w-xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Let’s
            <span className="text-[var(--accent)]"> Connect</span>
          </h1>

          <p className="mt-4 text-[var(--foreground)]/70">
            Have an idea, collaboration, or project?
            I’m open to meaningful conversations.
          </p>

        </section>


        {/* CONTACT CARDS */}

        <section className="grid md:grid-cols-3 gap-6">

          {/* EMAIL */}

          <div className="
          p-6 rounded-2xl
          border border-[var(--border)]
          bg-[var(--card)]
          text-center
          ">

            <Mail className="mx-auto text-[var(--accent)] mb-3" />

            <h3 className="font-semibold">
              Email
            </h3>

            <p className="text-sm opacity-70 mt-2">
              vin.simorangkir81@gmail.com
            </p>

          </div>


          {/* SOCIAL */}

          <div className="
          p-6 rounded-2xl
          border border-[var(--border)]
          bg-[var(--card)]
          text-center
          ">

            <h3 className="font-semibold mb-4">
              Social
            </h3>

            <div className="flex justify-center gap-3">

              {socials.map((s,i)=>(
                <Link
                  key={i}
                  href={s.url}
                  target="_blank"
                  className="
                  p-3 rounded-lg
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

          </div>


          {/* LOCATION */}

          <div className="
          p-6 rounded-2xl
          border border-[var(--border)]
          bg-[var(--card)]
          text-center
          ">

            <h3 className="font-semibold">
              Location
            </h3>

            <p className="text-sm opacity-70 mt-2">
              Lampung, Indonesia
            </p>

          </div>

        </section>


        {/* FORM */}

        <motion.section
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          className="
          max-w-xl mx-auto
          p-8 rounded-2xl
          border border-[var(--border)]
          bg-[var(--background)]
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
        >

          <h2 className="text-xl font-semibold mb-6">
            Send a message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
              p-3 rounded-xl
              border border-[var(--border)]
              focus:border-[var(--accent)]
              outline-none
              "
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="
              p-3 rounded-xl
              border border-[var(--border)]
              focus:border-[var(--accent)]
              outline-none
              "
            />

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="
              p-3 rounded-xl
              border border-[var(--border)]
              focus:border-[var(--accent)]
              outline-none
              "
            />

            <button
              className="
              mt-2
              px-6 py-3
              rounded-xl
              bg-[var(--accent)]
              text-black
              font-medium
              flex items-center justify-center gap-2
              hover:scale-[1.02]
              transition
              "
            >
              <Send size={16}/>
              {status === "loading" ? "Sending..." : "Send"}
            </button>

          </form>

          {status === "success" && (
            <p className="text-sm text-green-500 mt-4">
              Message sent ✓
            </p>
          )}

        </motion.section>

      </div>

    </main>
  );
}