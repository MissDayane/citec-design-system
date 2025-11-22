// ===================================
// TIPOGRAFIA — CITEC DESIGN SYSTEM
// Inter (UI) + Poppins (Titulos)
// ===================================

const typography = {
  // Fonte padrão da plataforma
  fontFamily: [
    "Inter",
    "Poppins",
    "Helvetica",
    "Arial",
    "sans-serif"
  ].join(","),

  // ------------------------------------
  // HEADINGS — usando Poppins
  // ------------------------------------
  h1: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "2.25rem",       // 36px
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "1.875rem",      // 30px
    lineHeight: 1.25,
  },
  h3: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "1.5rem",        // 24px
    lineHeight: 1.3,
  },
  h4: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "1.25rem",       // 20px
    lineHeight: 1.35,
  },
  h5: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "1.125rem",      // 18px
    lineHeight: 1.4,
  },
  h6: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "1rem",          // 16px
    lineHeight: 1.4,
  },

  // ------------------------------------
  // TEXTOS — usando Inter
  // ------------------------------------
  body1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1rem",          // 16px
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "0.875rem",      // 14px
    lineHeight: 1.45,
  },

  // ------------------------------------
  // Rótulos / pequenos textos
  // ------------------------------------
  subtitle1: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "0.9375rem",     // 15px
    lineHeight: 1.45,
  },
  subtitle2: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "0.8125rem",     // 13px
    lineHeight: 1.4,
  },

  // ------------------------------------
  // Captions / Microtexto
  // ------------------------------------
  caption: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "0.75rem",        // 12px
    lineHeight: 1.3,
  },

  overline: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  button: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "0.9375rem",      // 15px
    lineHeight: 1.4,
    textTransform: "none",
  },
};

export default typography;
