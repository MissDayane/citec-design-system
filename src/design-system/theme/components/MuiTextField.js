import palette from "../palette";
import shape from "../shape";

const MuiTextField = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: shape.borderRadius,

        "& fieldset": {
          borderColor: palette.neutral[300],
        },

        "&:hover fieldset": {
          borderColor: palette.primary.main,
        },

        "&.Mui-focused fieldset": {
          borderColor: palette.primary.main,
          borderWidth: 2,
        },
      },

      "& .MuiInputLabel-root.Mui-focused": {
        color: palette.primary.main,
      },
    },
  },
};

export default MuiTextField;
