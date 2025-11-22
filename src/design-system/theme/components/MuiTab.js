import palette from "../palette";
import typography from "../typography";

const MuiTab = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontWeight: 600,
      fontFamily: typography.fontFamily,
      fontSize: "0.9rem",
      minHeight: 44,
      padding: "8px 16px",
      color: palette.text.secondary,

      "&.Mui-selected": {
        color: palette.primary.main,
      },
    },
  },
};

export default MuiTab;
