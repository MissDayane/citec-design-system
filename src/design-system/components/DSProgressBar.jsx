import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSProgressBar({
  value = 50,
  variant = "primary", // primary | success | warning | danger
  height = 8,
  rounded = true,
}) {
  const theme = useTheme();

  const colors = {
    primary: theme.palette.primary.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    danger: theme.palette.error.main,
  };

  return (
    <Box
      sx={{
        width: "100%",
        height,
        background: theme.palette.neutral[200],
        borderRadius: rounded ? height : 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${value}%`,
          background: colors[variant],
          transition: "width 0.3s ease",
          borderRadius: rounded ? height : 0,
        }}
      />
    </Box>
  );
}
