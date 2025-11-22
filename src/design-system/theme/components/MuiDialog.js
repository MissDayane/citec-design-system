import shape from "../shape";
import shadows from "../shadows";
import effects from "../effects";

const MuiDialog = {
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: `blur(${effects.blur.md})`,
      },
    },

    paper: {
      borderRadius: shape.borderRadius,
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
