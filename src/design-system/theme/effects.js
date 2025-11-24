// ===================================================
// EFFECTS — CITEC DESIGN SYSTEM
// Efeitos visuais: blur, glass, noise, overlays e states
// ===================================================

export const blur = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "32px",
};

export const glass = {
  light: {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: `blur(${blur.md})`,
    border: "1px solid rgba(255, 255, 255, 0.4)",
  },

  dark: {
    background: "rgba(0, 0, 0, 0.25)",
    backdropFilter: `blur(${blur.md})`,
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  ultra: {
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: `blur(${blur.lg})`,
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
};

export const overlay = {
  light: "rgba(255, 255, 255, 0.4)",
  medium: "rgba(0, 0, 0, 0.35)",
  dark: "rgba(0, 0, 0, 0.6)",
  subtle: "rgba(0, 0, 0, 0.1)",
};

export const noise = {
  subtle: `
    url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' opacity='0.15'>
        <filter id='noise'>
          <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' />
        </filter>
        <rect width='100%' height='100%' filter='url(%23noise)'/>
      </svg>
    ")
  `,
  strong: `
    url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' opacity='0.3'>
        <filter id='noise'>
          <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' />
        </filter>
        <rect width='100%' height='100%' filter='url(%23noise)'/>
      </svg>
    ")
  `,
};

export const states = {
  hover: (color) => `${color}E6`,   // 90%
  pressed: (color) => `${color}CC`, // 80%
  focus: (color) => `${color}AA`,   // 66%
  disabled: (color) => `${color}55`, // 33%
};

export default {
  blur,
  glass,
  overlay,
  noise,
  states,
};
