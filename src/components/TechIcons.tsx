import React from 'react';

// SVGs inline para cada tecnología
const icons = [
  {
    name: 'react',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 16 16)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'nextjs',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 22L22 10" stroke="currentColor" strokeWidth="2" />
        <circle cx="20.5" cy="11.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'typescript',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="16" y="21" textAnchor="middle" fontSize="12" fill="currentColor" fontFamily="Arial">TS</text>
      </svg>
    ),
  },
  {
    name: 'java',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 24c6 0 6-3 6-3s-1 2-6 2-6-2-6-2 0 3 6 3z" fill="currentColor" />
        <path d="M16 8c2 2 4 4 0 8 4-4 2-6 0-8z" fill="currentColor" />
        <path d="M16 8c-2 2-4 4 0 8-4-4-2-6 0-8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'python',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="7" y="17" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="11" cy="11" r="1" fill="currentColor" />
        <circle cx="21" cy="21" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'vue',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,6 28,26 24,26 16,12 8,26 4,26" stroke="currentColor" strokeWidth="2" fill="none" />
        <polygon points="16,10 22,22 10,22" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'nodejs',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

// Generar posiciones y animaciones aleatorias
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const animations = [
  'animate-float',
  'animate-float-delay',
  'animate-float-alt',
];

const ICON_COUNT = 18; // Densidad media

const TechIcons: React.FC = () => {
  // Generar íconos flotantes con posiciones y animaciones aleatorias
  const floatingIcons = Array.from({ length: ICON_COUNT }).map((_, i) => {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const top = getRandom(5, 85); // %
    const left = getRandom(5, 85); // %
    const animation = animations[Math.floor(Math.random() * animations.length)];
    const size = getRandom(2, 3.5); // rem
    return {
      ...icon,
      key: `${icon.name}-${i}`,
      style: {
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}rem`,
        height: `${size}rem`,
      },
      animation,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {floatingIcons.map((item) => (
        <div
          key={item.key}
          className={`absolute ${item.animation} text-teal-500 opacity-70`}
          style={item.style}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
};

export default TechIcons; 