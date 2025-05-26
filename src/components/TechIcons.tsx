'use client'

import React, { useEffect, useRef, useState } from "react";
import { FaJava, FaPython, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const icons = [
  { name: "java", icon: FaJava },
  { name: "python", icon: FaPython },
  { name: "vue", icon: FaVuejs },
  { name: "typescript", icon: SiTypescript },
  { name: "nodejs", icon: FaNodeJs },
];

const ICON_COUNT = 12;
const ICON_SIZE = 64; // px

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const TechIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState(() =>
    Array.from({ length: ICON_COUNT }).map(() => ({
      x: getRandom(0, 80),
      y: getRandom(0, 80),
      dx: getRandom(-0.08, 0.08),
      dy: getRandom(-0.08, 0.08),
      icon: icons[Math.floor(getRandom(0, icons.length))].icon,
      size: getRandom(48, ICON_SIZE),
    }))
  );

  useEffect(() => {
    setMounted(true);
    let animationId: number;
    const animate = () => {
      setPositions((prev) =>
        prev.map((p) => {
          let { x, y, dx, dy } = p;
          const { icon, size } = p;
          x += dx;
          y += dy;
          // Rebote en los bordes (asumiendo fondo 100vw x 100vh)
          if (x < 0 || x > 100) dx *= -1;
          if (y < 0 || y > 100) dy *= -1;
          return { x, y, dx, dy, icon, size };
        })
      );
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ overflow: "hidden" }}
    >
      {positions.map((p, i) => {
        const Icon = p.icon;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              color: "#14b8a6", // text-teal-500
              opacity: 0.7,
              transition: "none",
              pointerEvents: "none",
            }}
          >
            <Icon size={p.size} />
          </div>
        );
      })}
    </div>
  );
};

export default TechIcons; 