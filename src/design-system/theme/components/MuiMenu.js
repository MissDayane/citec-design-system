import shape from "../shape";
import shadows from "../shadows";
import palette from "../palette";
import effects from "../effects";

const MuiMenu = {
  styleOverrides: {
    paper: {
      marginTop: 6,
      borderRadius: shape.borderRadius,
      boxShadow: shadows[4],
      border: `1px solid ${palette.neutral[200]}`,
      background: effects.glass.light.background,
      backdropFilter: effects.glass.light.backdropFilter,
      padding: "4px 0",
    },

    list: {
      paddingTop: 4,
      paddingBottom: 4,
    },
  },
};

export default MuiMenu;
