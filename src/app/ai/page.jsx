"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ChevronRight,
  CornerDownLeft,
  Sparkles,
  User,
  X,
} from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Tell me about VINS",
  "What projects has VINS worked on?",
  "What are VINS's technical skills?",
  "Show me the latest articles",
];

const INITIAL_MESSAGE = {
  id: 1,
  role: "assistant",
  content:
    "Hi, I'm VINS AI. I can help you explore this portfolio, projects, experience, skills, and articles. What would you like to know?",
};

function generateResponse(message) {
  const input = message.toLowerCase();

  if (
    input.includes("who") ||
    input.includes("about") ||
    input.includes("vins")
  ) {
    return "VINS is a personal portfolio focused on design, development, technology, and continuous learning. This space brings together selected projects, experience, skills, and ideas in one place.";
  }

  if (
    input.includes("project") ||
    input.includes("projects") ||
    input.includes("work")
  ) {
    return "You can explore VINS's work through the Projects section. Projects are organized around Creative, Development, and Data Analyst areas.";
  }

  if (
    input.includes("skill") ||
    input.includes("skills") ||
    input.includes("technical")
  ) {
    return "VINS works across frontend development, UI/UX, digital products, data-oriented work, and creative problem solving. Visit the About page for the broader skills overview.";
  }

  if (
    input.includes("article") ||
    input.includes("articles") ||
    input.includes("writing")
  ) {
    return "The Articles section contains VINS's thoughts and notes across Career, Technology, Design, and Personal topics.";
  }

  if (
    input.includes("contact") ||
    input.includes("hire") ||
    input.includes("collab") ||
    input.includes("email")
  ) {
    return "Interested in working together? You can reach VINS through the Contact page and send a message directly.";
  }

  return "I can help you explore VINS's portfolio, projects, skills, experience, articles, and contact information. Try asking about a specific area.";
}

export default function VINSAIPage() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (text = input) => {
    const value = text.trim();

    if (!value || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: value,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: generateResponse(value),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput("");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-sm font-medium text-[var(--color-muted)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand)]" />
              </span>

              VINS AI
            </div>

            <h1 className="font-[var(--font-heading)] text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Meet the intelligence
              <br />
              <span className="text-[var(--color-brand)]">
                behind the portfolio.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Ask VINS AI about projects, experience, skills, articles, or
              anything you want to discover across this portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI WORKSPACE
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-light)]">
                  Explore
                </p>

                <h2 className="mt-2 font-[var(--font-heading)] text-xl font-semibold">
                  Ask VINS AI
                </h2>
              </div>

              <div className="space-y-2">
                {[
                  {
                    title: "Projects",
                    description: "Explore selected work",
                    href: "/projects",
                  },
                  {
                    title: "About",
                    description: "Profile & experience",
                    href: "/about",
                  },
                  {
                    title: "Articles",
                    description: "Ideas & writing",
                    href: "/article",
                  },
                  {
                    title: "Contact",
                    description: "Start a conversation",
                    href: "/contact",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 transition hover:border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-[var(--color-muted-light)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="text-xs leading-5 text-[var(--color-muted-light)]">
                  VINS AI is designed specifically to help visitors navigate
                  and understand this portfolio.
                </p>
              </div>
            </div>
          </aside>

          {/* CHAT */}
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-lg)]">
            {/* CHAT HEADER */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                  <Bot size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-[var(--font-heading)] text-sm font-bold">
                      VINS AI
                    </h2>

                    <span className="rounded-full bg-[var(--color-brand-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                      Assistant
                    </span>
                  </div>

                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                    Portfolio intelligence
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={clearChat}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-muted)] transition hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-foreground)]"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <X size={17} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="min-h-[460px] max-h-[620px] overflow-y-auto px-5 py-6 sm:px-8">
              <div className="mx-auto max-w-3xl space-y-6">
                {messages.map((message) => {
                  const isUser = message.role === "user";

                  return (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      {!isUser && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                          <Sparkles size={15} />
                        </div>
                      )}

                      <div
                        className={
                          isUser
                            ? "max-w-[85%] rounded-2xl rounded-tr-md bg-[var(--color-foreground)] px-4 py-3 text-sm leading-6 text-white"
                            : "max-w-[85%] rounded-2xl rounded-tl-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm leading-6 text-[var(--color-foreground)]"
                        }
                      >
                        {message.content}
                      </div>

                      {isUser && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-muted)]">
                          <User size={15} />
                        </div>
                      )}
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                      <Sparkles size={15} />
                    </div>

                    <div className="rounded-2xl rounded-tl-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-muted)] [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-muted)] [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-muted)]" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* SUGGESTIONS */}
            <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 sm:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-[var(--color-brand)]"
                  />

                  <span className="text-xs font-medium text-[var(--color-muted)]">
                    Try asking
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      disabled={isTyping}
                      className="shrink-0 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-medium text-[var(--color-muted)] transition hover:border-[var(--color-brand-light)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-foreground)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="border-t border-[var(--color-border)] bg-white px-5 py-5 sm:px-8">
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-3xl"
              >
                <div className="relative flex items-end rounded-xl border border-[var(--color-border-strong)] bg-white transition focus-within:border-[var(--color-brand)] focus-within:ring-4 focus-within:ring-[var(--color-brand-soft)]">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask VINS AI anything..."
                    rows={1}
                    className="min-h-[52px] flex-1 resize-none bg-transparent px-4 py-4 pr-14 text-sm outline-none placeholder:text-[var(--color-muted-light)]"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-foreground)] text-white transition hover:bg-[var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Send message"
                  >
                    <CornerDownLeft size={16} />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-[11px] leading-5 text-[var(--color-muted-light)]">
                    VINS AI provides portfolio-related information and
                    navigation assistance.
                  </p>

                  <span className="hidden shrink-0 text-[10px] text-[var(--color-muted-light)] sm:block">
                    Enter to send
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Continue exploring
          </p>

          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            There is more to discover.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            Explore the work, read the ideas, or start a conversation directly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand)]"
            >
              Explore Projects
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-brand-light)] hover:bg-[var(--color-brand-soft)]"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}