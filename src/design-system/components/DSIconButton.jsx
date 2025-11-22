import React from "react";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";

export default function DSIconButton({
  children,
  variant = "default",
  size = "md",
  loading = false,
  disabled,
  ...props
}) {
  const theme = useTheme();

  // -----------------------------
  // 1. Variantes CITEC
  // -----------------------------
  const variantStyles = {
    default: {
      color: theme.palette.text.primary,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.06)",
      },
    },

    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    secondary: {
      color: theme.palette.secondary.dark,
      backgroundColor: theme.palette.secondary.light,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },

    danger: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },

    ghost: {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(0, 87, 231, 0.08)",
      },
    },
  };

  // -----------------------------
  // 2. Tamanhos CITEC
  // -----------------------------
  const sizeStyles = {
    sm: {
      width: 32,
      height: 32,
      fontSize: "1rem",
    },
    md: {
      width: 40,
      height: 40,
      fontSize: "1.2rem",
    },
    lg: {
      width: 48,
      height: 48,
      fontSize: "1.4rem",
    },
  };

  return (
    <IconButton
      disabled={disabled || loading}
      {...props}
      sx={{
        borderRadius: theme.shape.borderRadius,
        transition: "all 0.2s ease",
        ...variantStyles[variant],
        ...sizeStyles[size],

        ...(loading && {
          opacity: 0.7,
          cursor: "wait",
        }),
      }}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        children
      )}
    </IconButton>
  );
}
