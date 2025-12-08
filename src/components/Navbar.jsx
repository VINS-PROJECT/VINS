"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Moon, Sun, Menu, X, Bell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  /* === THEME === */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    const prefersDark =
      saved === "dark" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  /* === AUTO HIDE NAVBAR === */
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastYRef.current);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* === STATES === */
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* === NOTIFICATIONS === */
  const notifRef = useRef(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifTab, setNotifTab] = useState("all");
  const [notifications, setNotifications] = useState([]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vins-plus", label: "VINS+" },
    { href: "/article", label: "Articles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("notifications");
    setNotifications(
      saved
        ? JSON.parse(saved)
        : [
            { id: 1, type: "message", message: "You got a new message!", read: false },
            { id: 2, type: "system", message: "System update available.", read: false },
            { id: 3, type: "like", message: "Someone liked your post ❤️", read: false },
          ]
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const filteredNotifications =
    notifTab === "all"
      ? notifications
      : notifications.filter((n) => n.type === notifTab);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleRead = (id) => {
    setNotifications(
      notifications.map((n) => n.id === id ? { ...n, read: true } : n)
    );
  };

  useEffect(() => {
    const close = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  /* === SCROLL LOCK WHEN MENU OPEN === */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
        bg-[var(--background)]/55 border-b border-[var(--border)]
        shadow-lg transition-all duration-300 px-6 md:px-10"
      >
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.08, rotate: 3 }}>
              <Image src="/TP K.svg" width={40} height={40} alt="VINS" />
            </motion.div>
            <span className="font-extrabold text-lg tracking-widest text-[var(--accent)] drop-shadow-sm">
              VINS
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className="relative group pb-1">
                  <span
                    className={`transition ${
                      active
                        ? "text-[var(--accent)]"
                        : "text-gray-600 dark:text-gray-300 group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {l.label}
                  </span>
                  {/* Hover underline */}
                  <span
                    className="absolute -bottom-[2px] left-0 w-full h-[2px]
                    bg-[var(--accent)] transition-transform duration-300
                    ease-out scale-x-0 group-hover:scale-x-100 origin-left rounded-full"
                  />
                  {/* Active underline */}
                  {active && (
                    <motion.span
                      layoutId="activeUnderline"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[var(--accent)] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <motion.button
              whileTap={{ scale: 0.92, rotate: -2 }}
              transition={{ type: "spring", stiffness: 450, damping: 26 }}
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Search size={20} />
            </motion.button>

            {/* NOTIFICATIONS */}
            <div ref={notifRef} className="relative">
              <motion.button
                whileTap={{ scale: 0.92, rotate: -2 }}
                transition={{ type: "spring", stiffness: 450, damping: 26 }}
                onClick={() => setNotifOpen(!notifOpen)}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 relative"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </motion.button>

              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.28,
                        ease: [0.34, 1.56, 0.64, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0.98,
                      transition: { duration: 0.2 },
                    }}
                    className="absolute right-0 mt-3 w-72 bg-[var(--background)]
                    border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {/* Tabs */}
                    <div className="flex border-b border-[var(--border)]">
                      {["all", "message", "system", "like"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setNotifTab(tab)}
                          className={`flex-1 py-2 text-xs capitalize
                          transition ${
                            notifTab === tab
                              ? "text-[var(--accent)] font-semibold border-b-2 border-[var(--accent)]"
                              : "text-gray-500 dark:text-gray-400 hover:text-[var(--accent)]"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* LIST */}
                    <div className="max-h-72 overflow-y-auto">
                      {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((n) => (
                          <motion.div
                            key={n.id}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleRead(n.id)}
                            className={`px-4 py-3 text-sm border-b border-[var(--border)] cursor-pointer transition
                            ${
                              n.read
                                ? "opacity-60 hover:bg-[var(--accent)]/15"
                                : "bg-[var(--accent)]/20 font-semibold"
                            }`}
                          >
                            <span className="mr-2">
                              {n.type === "message" && "💬"}
                              {n.type === "system" && "⚙️"}
                              {n.type === "like" && "❤️"}
                            </span>
                            {n.message}
                          </motion.div>
                        ))
                      ) : (
                        <div className="px-4 py-5 text-sm text-gray-500 text-center">
                          No notifications 📭
                        </div>
                      )}
                    </div>

                    {/* FOOTER */}
                    {unreadCount > 0 && (
                      <button
                        onClick={handleMarkAllRead}
                        className="w-full py-2 text-sm font-medium hover:bg-[var(--accent)]/15 transition text-[var(--accent)]"
                      >
                        Mark all as read
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* THEME */}
            <motion.button
              whileTap={{ scale: 0.92, rotate: -2 }}
              transition={{ type: "spring", stiffness: 450, damping: 26 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* MOBILE MENU */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
              whileTap={{ scale: 0.92, rotate: -2 }}
              transition={{ type: "spring", stiffness: 450, damping: 26 }}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={26} strokeWidth={2.4} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-[70%] sm:w-[50%] h-full
              bg-[var(--background)] z-50 p-6 shadow-2xl border-l border-[var(--border)]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-end mb-6">
                <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
              </div>

              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg mb-1 font-medium text-[15px]
                    ${
                      active
                        ? "bg-[var(--accent)] text-black"
                        : "hover:bg-[var(--accent)] hover:text-black transition"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm
            flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="bg-[var(--background)] p-4 rounded-xl shadow-xl 
              w-[90%] max-w-lg flex gap-3 items-center border border-[var(--border)]"
            >
              <Search size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent outline-none"
              />
              <X className="cursor-pointer" onClick={() => setSearchOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
