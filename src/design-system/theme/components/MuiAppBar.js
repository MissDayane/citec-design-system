import palette from "../palette";
import shadows from "../shadows";

const MuiAppBar = {
  styleOverrides: {
    root: {
      backgroundColor: palette.primary.main,
      boxShadow: shadows[2],
      padding: "4px 16px",
    },
  },
};

export default MuiAppBar;
