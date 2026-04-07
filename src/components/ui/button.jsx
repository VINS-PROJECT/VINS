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
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "button";

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] overflow-hidden";

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2",
  };

  const variants = {
    primary:
      "bg-[var(--accent)] text-black hover:brightness-110 hover:shadow-lg active:scale-[0.97]",
    outline:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card)] hover:border-[var(--accent)]",
    ghost:
      "text-[var(--foreground)] hover:bg-[var(--card)]",
    destructive:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const isDisabled = disabled || loading;

  const spinnerColor =
    variant === "primary"
      ? "border-black/20 border-t-black"
      : "border-[var(--foreground)]/20 border-t-[var(--foreground)]";

  return (
    <Comp
      disabled={!asChild && isDisabled}
      className={clsx(
        base,
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        isDisabled && "opacity-60 pointer-events-none",
        className
      )}
      {...props}
    >
      {/* HOVER GLOW */}
      {variant === "primary" && (
        <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-white/10" />
      )}

      {/* CONTENT */}
      <span className="relative flex items-center gap-2">
        
        {/* LOADING */}
        {loading && (
          <span
            className={clsx(
              "h-4 w-4 rounded-full border-2 animate-spin",
              spinnerColor
            )}
          />
        )}

        {/* LEFT ICON */}
        {!loading && leftIcon && (
          <span className="flex items-center">{leftIcon}</span>
        )}

        {/* LABEL */}
        {children && (
          <span className={clsx(loading && "opacity-80")}>
            {children}
          </span>
        )}

        {/* RIGHT ICON */}
        {!loading && rightIcon && (
          <span className="flex items-center">{rightIcon}</span>
        )}
      </span>
    </Comp>
  );
}