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
  ...props
}) {

  const Comp = asChild ? "div" : "button"; // ✅ FIX

  const isDisabled = disabled || loading;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition text-sm";

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2",
  };

  const variants = {
    primary:
      "bg-black text-white hover:opacity-90",
    outline:
      "border border-gray-200 text-gray-700 hover:bg-gray-100",
    ghost:
      "text-gray-700 hover:bg-gray-100",
    destructive:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const spinnerColor =
    variant === "primary"
      ? "border-white/30 border-t-white"
      : "border-gray-400/30 border-t-gray-700";

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
      {/* LOADING */}
      {loading && (
        <span
          className={clsx(
            "rounded-full border-2 animate-spin",
            size === "sm" && "w-3 h-3",
            size === "md" && "w-4 h-4",
            size === "lg" && "w-5 h-5",
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

    </Comp>
  );
}