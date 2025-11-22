// ===================================
// THEME — CITEC DESIGN SYSTEM
// ===================================

import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import shape from "./shape";
import shadows from "./shadows";
import effects from "./effects";
import components from "./components";

const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  shadows,

  customShadows: {
    ...shadows,
  },
  customEffects: {
    ...effects,
  },

  // Adiciona os overrides do MUI
  components,
});

export default theme;
