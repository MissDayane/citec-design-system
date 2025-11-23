import shadows from "../shadows";

const MuiCard = {
  styleOverrides: {
    root: {
      borderRadius: "16px",      
      boxShadow: shadows[1],
      padding: "24px",           
      backgroundImage: "none",
      transition: "0.2s ease-in-out",

      "&:hover": {
        boxShadow: shadows[3],
      },
    },
  },
};

export default MuiCard;
