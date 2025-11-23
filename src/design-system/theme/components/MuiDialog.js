import shadows from "../shadows";
import effects from "../effects";

const MuiDialog = {
  styleOverrides: {
    paper: {
      borderRadius: "16px",  // novo padrão
      boxShadow: shadows[10],
      background: effects.glass.light.background,
      backdropFilter: effects.glass.light.backdropFilter,
      border: effects.glass.light.border,
      padding: "24px",
      transition: "0.25s ease",
    },
  },
};

export default MuiDialog;
