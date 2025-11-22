import palette from "../palette";

const MuiMenuItem = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      margin: "2px 6px",
      padding: "8px 12px",
      fontSize: "0.9rem",
      fontWeight: 500,
      transition: "0.15s ease",

      "&:hover": {
        backgroundColor: "rgba(0, 87, 231, 0.12)",
      },

      "&.Mui-selected": {
        backgroundColor: "rgba(0, 87, 231, 0.18)",
        color: palette.primary.main,
        fontWeight: 600,

        "&:hover": {
          backgroundColor: "rgba(0, 87, 231, 0.22)",
        }
      }
    },
  },
};

export default MuiMenuItem;
