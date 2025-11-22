import shape from "../shape";
import shadows from "../shadows";

const MuiCard = {
  styleOverrides: {
    root: {
      borderRadius: shape.borderRadius,
      boxShadow: shadows[1],
      padding: "16px",
      transition: "0.2s ease-in-out",

      "&:hover": {
        boxShadow: shadows[3],
      },
    },
  },
};

export default MuiCard;
