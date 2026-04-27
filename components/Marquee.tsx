"use client";

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
  duration?: number;
}

export function Marquee({
  items,
  className = "",
  reverse = false,
  duration = 35,
}: MarqueeProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 sm:gap-8 shrink-0">
      <span className="text-zinc-500 text-sm sm:text-base font-light tracking-[0.15em] uppercase whitespace-nowrap">
        {item}
      </span>
      <span className="text-[var(--accent)] opacity-30 text-[10px]">&#9670;</span>
    </span>
  ));

  return (
    <div
      className={`marquee-wrapper overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className={`flex gap-6 sm:gap-8 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex gap-6 sm:gap-8 shrink-0">{content}</div>
        <div className="flex gap-6 sm:gap-8 shrink-0">{content}</div>
      </div>
    </div>
  );
}
