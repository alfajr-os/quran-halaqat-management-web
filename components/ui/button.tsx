import * as React from "react";
import type { ComponentPropsWithoutRef, ReactElement } from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  default: "bg-emerald-600 text-white hover:bg-emerald-700",
  outline:
    "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
} as const;

const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-12 rounded-md px-8",
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function mergeClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  asChild = false,
  variant = "default",
  size = "default",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = mergeClasses(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (asChild && React.isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: mergeClasses(classes, child.props.className),
    });
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
