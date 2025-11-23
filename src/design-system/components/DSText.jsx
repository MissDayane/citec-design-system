import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSText({
  variant = "body",
  color = "text",
  weight,
  children,
  ...props
}) {
  const theme = useTheme();

  const variants = {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    body: theme.typography.body1,
    body2: theme.typography.body2,
    subtitle: theme.typography.subtitle1,
    caption: theme.typography.caption,
    overline: theme.typography.overline,

    title: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: 1.3,
    },
  };

  const colorTokens = {
    text: theme.palette.text.primary,
    secondaryText: theme.palette.text.secondary,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    danger: theme.palette.error.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    white: "#FFF",
  };

  return (
    <Typography
      {...props}
      sx={{
        ...variants[variant],
        color: colorTokens[color] || theme.palette.text.primary,
        fontWeight: weight || variants[variant]?.fontWeight,
      }}
    >
      {children}
    </Typography>
  );
}
