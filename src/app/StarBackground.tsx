"use client";
import React, { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = 8 + Math.random() * 8;
      const size = 2.5 + Math.random() * 3.5;
      const angle = Math.random() * 2 * Math.PI;
      const distance = 120;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      return (
        <div
          key={i}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: size,
            height: size,
            animationDuration: `${duration}s`,
            '--move-x': `${dx}%`,
            '--move-y': `${dy}%`,
          } as React.CSSProperties}
          className="star absolute rounded-full bg-white opacity-80 blur-[1.5px] pointer-events-none"
        />
      );
    });
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {stars}
      <style jsx>{`
        .star {
          position: absolute;
          animation-name: star-move;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @keyframes star-move {
          0% {
            opacity: 1;
            transform: translate(0, 0);
          }
          90% {
            opacity: 1;
          }
          95% {
            opacity: 0;
          }
          100% {
            opacity: 0;
            transform: translate(var(--move-x), var(--move-y));
          }
        }
      `}</style>
    </div>
  );
} 