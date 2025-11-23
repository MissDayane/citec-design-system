import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSTag({
  label,
  variant = "neutral", // neutral | primary | secondary | success | warning | danger | info
  size = "md",          // sm | md
  icon,                 // opcional: <Icon />
  pill = false,         // se true, bem arredondado
  ...props
}) {
  const theme = useTheme();

  const variantStyles = {
    neutral: {
      backgroundColor: theme.palette.neutral[100],
      color: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.neutral[200]}`,
    },
    primary: {
      backgroundColor: `${theme.palette.primary.main}14`, // leve
      color: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.main}40`,
    },
    secondary: {
      backgroundColor: `${theme.palette.secondary.main}14`,
      color: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.main}40`,
    },
    success: {
      backgroundColor: `${theme.palette.success.main}14`,
      color: theme.palette.success.dark,
      border: `1px solid ${theme.palette.success.main}40`,
    },
    warning: {
      backgroundColor: `${theme.palette.warning.main}14`,
      color: theme.palette.warning.dark,
      border: `1px solid ${theme.palette.warning.main}40`,
    },
    danger: {
      backgroundColor: `${theme.palette.error.main}14`,
      color: theme.palette.error.dark,
      border: `1px solid ${theme.palette.error.main}40`,
    },
    info: {
      backgroundColor: `${theme.palette.info.main}14`,
      color: theme.palette.info.dark,
      border: `1px solid ${theme.palette.info.main}40`,
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: "0.7rem",
      padding: "2px 8px",
      gap: "4px",
    },
    md: {
      fontSize: "0.8rem",
      padding: "4px 10px",
      gap: "6px",
    },
  };

  return (
    <Box
      {...props}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: pill ? 999 : 999, // tag sempre “pill”
        fontWeight: 500,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
    >
      <Stack direction="row" alignItems="center" spacing={sizeStyles[size].gap / 4}>
        {icon && <Box sx={{ display: "flex", alignItems: "center" }}>{icon}</Box>}
        <span>{label}</span>
      </Stack>
    </Box>
  );
}
