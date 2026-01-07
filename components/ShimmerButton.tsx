"use client";
import React, {
  forwardRef,
  ButtonHTMLAttributes,
  isValidElement,
  cloneElement,
  ReactElement,
  Children,
  Ref,
} from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

// Button-specific props that shouldn't be spread onto non-button elements
const BUTTON_ONLY_PROPS = [
  "type",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "disabled",
  "name",
  "value",
] as const;

function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

function filterButtonProps(
  props: Record<string, unknown>,
  isButton: boolean
): Record<string, unknown> {
  if (isButton) return props;
  const filtered = { ...props };
  BUTTON_ONLY_PROPS.forEach((key) => {
    delete filtered[key];
  });
  return filtered;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const base = cn(
      "relative inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white",
      "bg-[linear-gradient(90deg,rgba(56,189,248,0.15),rgba(16,185,129,0.15))]",
      "border border-cyan-400/20 hover:border-cyan-300/30",
      "shadow-[0_0_20px_rgba(56,189,248,0.08)] hover:shadow-[0_0_28px_rgba(56,189,248,0.15)]",
      "transition-all duration-300 hover:scale-[1.02]",
      "overflow-hidden aurora-sheen",
      className
    );

    // Support anchor or custom elements via asChild
    if (asChild) {
      const child = Children.only(children) as ReactElement<{
        className?: string;
        ref?: Ref<unknown>;
      }>;

      if (!isValidElement(child)) {
        throw new Error("ShimmerButton: asChild requires a valid React element");
      }

      const isButtonElement =
        typeof child.type === "string" && child.type === "button";
      const filteredProps = filterButtonProps(
        props as Record<string, unknown>,
        isButtonElement
      );

      return cloneElement(child, {
        className: cn(base, child.props.className),
        ref: mergeRefs(ref, child.props.ref),
        ...filteredProps,
      } as Record<string, unknown>);
    }

    return (
      <button ref={ref} className={base} {...props}>
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
