import shadows from "../shadows";

const MuiPaper = {
  styleOverrides: {
    root: {
      borderRadius: "16px",     // alinhado ao DSCard
      boxShadow: shadows[1],
      backgroundImage: "none",
      transition: "0.2s ease",
    },
  },
};

export default MuiPaper;
