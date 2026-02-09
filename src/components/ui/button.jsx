"use client";

import React from "react";
import clsx from "clsx";

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled = false,
  className = "",
  leftIcon,
  rightIcon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-[var(--accent)] text-black hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
    outline:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
    ghost:
      "text-[var(--foreground)] hover:bg-[var(--card)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        base,
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <span className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
      )}

      {!loading && leftIcon && <span className="flex">{leftIcon}</span>}

      <span className={clsx(loading && "opacity-70")}>{children}</span>

      {!loading && rightIcon && <span className="flex">{rightIcon}</span>}
    </button>
  );
}
