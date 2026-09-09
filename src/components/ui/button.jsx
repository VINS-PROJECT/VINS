"use client";

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
  type = "button",
  ...props
}) {
  const Comp = asChild ? "div" : "button";
  const isDisabled = disabled || loading;

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-[var(--font-body)] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2";

  const sizes = {
    sm: "min-h-9 px-4 text-xs",
    md: "min-h-11 px-5 text-sm",
    lg: "min-h-12 px-6 text-sm sm:min-h-13 sm:px-7 sm:text-base",
    icon: "h-10 w-10 p-0",
  };

  const variants = {
    primary:
      "bg-[var(--color-foreground)] text-white hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-[0_10px_30px_rgba(23,23,23,0.12)]",

    secondary:
      "border border-[var(--color-border-strong)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-foreground)] hover:shadow-sm",

    outline:
      "border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-foreground)] hover:bg-[var(--color-surface)]",

    ghost:
      "bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-foreground)]",

    gold:
      "bg-[var(--color-brand)] text-white hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-[0_10px_30px_rgba(148,121,54,0.18)]",

    destructive:
      "bg-red-600 text-white hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg",
  };

  const spinnerColors = {
    primary: "border-white/30 border-t-white",
    secondary:
      "border-[var(--color-border-strong)] border-t-[var(--color-foreground)]",
    outline:
      "border-[var(--color-border-strong)] border-t-[var(--color-foreground)]",
    ghost:
      "border-[var(--color-border-strong)] border-t-[var(--color-foreground)]",
    gold: "border-white/30 border-t-white",
    destructive: "border-red-200/40 border-t-white",
  };

  const spinnerSize = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-4.5 w-4.5",
    icon: "h-4 w-4",
  };

  return (
    <Comp
      {...(!asChild && {
        type,
        disabled: isDisabled,
      })}
      aria-disabled={isDisabled || undefined}
      aria-busy={loading || undefined}
      className={clsx(
        base,
        sizes[size] ?? sizes.md,
        variants[variant] ?? variants.primary,
        fullWidth && "w-full",
        isDisabled &&
          "pointer-events-none cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-none",
        asChild && "cursor-pointer",
        className
      )}
      {...props}
    >
      {/* =====================================================
          LOADING
          ===================================================== */}

      {loading && (
        <span
          aria-hidden="true"
          className={clsx(
            "shrink-0 animate-spin rounded-full border-2",
            spinnerSize[size] ?? spinnerSize.md,
            spinnerColors[variant] ?? spinnerColors.primary
          )}
        />
      )}

      {/* =====================================================
          LEFT ICON
          ===================================================== */}

      {!loading && leftIcon && (
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-x-0.5"
        >
          {leftIcon}
        </span>
      )}

      {/* =====================================================
          LABEL
          ===================================================== */}

      {children && (
        <span
          className={clsx(
            "inline-flex items-center",
            loading && "opacity-80"
          )}
        >
          {children}
        </span>
      )}

      {/* =====================================================
          RIGHT ICON
          ===================================================== */}

      {!loading && rightIcon && (
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5"
        >
          {rightIcon}
        </span>
      )}
    </Comp>
  );
}