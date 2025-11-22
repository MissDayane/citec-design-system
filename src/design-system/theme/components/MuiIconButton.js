import palette from "../palette";
import shape from "../shape";

const MuiIconButton = {
  styleOverrides: {
    root: {
      borderRadius: shape.borderRadius,
      color: palette.primary.main,
      transition: "all 0.2s ease",

      "&:hover": {
        backgroundColor: "rgba(0, 87, 231, 0.08)",
      },

      "&:active": {
        transform: "scale(0.92)",
      },
    },
  },
};

export default MuiIconButton;
