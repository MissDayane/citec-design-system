import shape from "../shape";
import shadows from "../shadows";

const MuiPaper = {
  styleOverrides: {
    root: {
      borderRadius: shape.borderRadius,
      boxShadow: shadows[1],
      backgroundImage: "none", // remove textura padrão do MUI
      transition: "0.2s ease",
    },
  },
};

export default MuiPaper;
