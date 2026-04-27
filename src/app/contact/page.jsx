"use client";

import { useState } from "react";
import { User, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // simulasi kirim
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10 md:mb-12 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Get in Touch
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Feel free to reach out for collaboration or just a friendly hello.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-6 text-center text-sm text-green-600">
            Message sent successfully. I’ll get back to you soon.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="
              w-full
              border border-gray-200
              rounded-xl
              pl-12 pr-4 py-3
              text-sm
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10
              "
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="
              w-full
              border border-gray-200
              rounded-xl
              pl-12 pr-4 py-3
              text-sm
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="
              w-full
              border border-gray-200
              rounded-xl
              pl-12 pr-4 py-3
              text-sm
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-black text-white
            py-3 rounded-full
            text-sm font-medium
            hover:opacity-90
            transition
            disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* CONTACT INFO */}
        <div className="mt-12 text-center text-sm text-gray-500 space-y-2">
          <p>Email: vin.simorangkir81@gmail.com</p>
          <p>Phone: +62 822-8251-2619</p>
        </div>

      </div>
    </section>
  );
}