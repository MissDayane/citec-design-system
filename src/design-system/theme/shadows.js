// ===================================
// SHADOWS — CITEC DESIGN SYSTEM
// Sombras suaves e modernas (inspirado no Material Design 3)
// ===================================

const shadows = [
  "none",

  // level 1
  "0px 1px 3px rgba(0, 0, 0, 0.08)",

  // level 2
  "0px 2px 6px rgba(0, 0, 0, 0.10)",

  // level 3
  "0px 3px 8px rgba(0, 0, 0, 0.12)",

  // level 4
  "0px 4px 10px rgba(0, 0, 0, 0.14)",

  // level 5
  "0px 5px 12px rgba(0, 0, 0, 0.16)",

  // level 6
  "0px 6px 14px rgba(0, 0, 0, 0.18)",

  // level 7
  "0px 6px 16px rgba(0, 0, 0, 0.20)",

  // level 8 — perfeito para Cards
  "0px 8px 20px rgba(0, 0, 0, 0.22)",

  // level 9
  "0px 8px 24px rgba(0, 0, 0, 0.24)",

  // level 10 — usado para AppBar e Header
  "0px 10px 28px rgba(0, 0, 0, 0.26)",

  // level 11
  "0px 10px 32px rgba(0, 0, 0, 0.28)",

  // level 12 — elevado
  "0px 12px 38px rgba(0, 0, 0, 0.30)",

  // level 13
  "0px 12px 44px rgba(0, 0, 0, 0.32)",

  // level 14 — ótimo para diálogos
  "0px 14px 48px rgba(0, 0, 0, 0.34)",

  // level 15
  "0px 16px 52px rgba(0, 0, 0, 0.36)",

  // level 16
  "0px 18px 56px rgba(0, 0, 0, 0.38)",

  // level 17
  "0px 20px 60px rgba(0, 0, 0, 0.40)",

  // level 18
  "0px 22px 64px rgba(0, 0, 0, 0.42)",

  // level 19
  "0px 24px 68px rgba(0, 0, 0, 0.44)",

  // level 20 — para modais grandes
  "0px 26px 72px rgba(0, 0, 0, 0.46)",

  // level 21
  "0px 28px 76px rgba(0, 0, 0, 0.48)",

  // level 22
  "0px 30px 80px rgba(0, 0, 0, 0.50)",

  // level 23
  "0px 32px 90px rgba(0, 0, 0, 0.52)",

  // level 24 — máximo
  "0px 35px 100px rgba(0, 0, 0, 0.55)",
];

// Tokens extras para uso manual (opcional)
export const shadowTokens = {
  card: shadows[8],
  header: shadows[10],
  modal: shadows[20],
  floating: "0px 4px 16px rgba(0,0,0,0.15)",
};

export default shadows;
