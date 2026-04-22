"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible && delay ? `${delay}ms` : "0ms" }}
      className={[
        "transition-all duration-[800ms] ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
