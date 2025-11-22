import palette from "../palette";
import shape from "../shape";
import shadows from "../shadows";

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: shape.borderRadius,
      textTransform: "none",
      fontWeight: 600,
      padding: "10px 18px",
      boxShadow: "none",
      transition: "all 0.2s ease",
      letterSpacing: "0.3px",

      "&:hover": {
        boxShadow: shadows[2],
      },

      "&:active": {
        transform: "scale(0.97)",
      },

      "&.Mui-disabled": {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },

    contained: {
      backgroundColor: palette.primary.main,
      color: "#FFF",
      "&:hover": {
        backgroundColor: palette.primary.dark,
      },
    },

    outlined: {
      borderWidth: 2,
      borderColor: palette.primary.main,
      color: palette.primary.main,
      "&:hover": {
        borderColor: palette.primary.dark,
        backgroundColor: "rgba(0, 87, 231, 0.06)",
      },
    },

    text: {
      color: palette.primary.main,
      "&:hover": {
        backgroundColor: "rgba(0, 87, 231, 0.06)",
      },
    },
  },
};

export default MuiButton;
