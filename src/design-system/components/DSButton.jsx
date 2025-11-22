import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

export default function DSButton({
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  loading = false,
  disabled,
  ...props
}) {
  const theme = useTheme();

  // -------------------------------
  // 1. Variantes CITEC
  // -------------------------------
  const variantStyles = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
      "&:hover": { backgroundColor: theme.palette.primary.dark },
    },

    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: "#000",
      "&:hover": { backgroundColor: theme.palette.secondary.dark },
    },

    outline: {
      backgroundColor: "transparent",
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      "&:hover": {
        borderColor: theme.palette.primary.dark,
        backgroundColor: "rgba(0, 87, 231, 0.08)",
      },
    },

    text: {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      "&:hover": { backgroundColor: "rgba(0, 87, 231, 0.08)" },
    },

    danger: {
      backgroundColor: theme.palette.error.main,
      color: "#FFF",
      "&:hover": { backgroundColor: theme.palette.error.dark },
    },
  };

  // -------------------------------
  // 2. Tamanhos CITEC
  // -------------------------------
  const sizeStyles = {
    sm: {
      padding: "6px 12px",
      fontSize: "0.75rem",
    },
    md: {
      padding: "10px 18px",
      fontSize: "0.875rem",
    },
    lg: {
      padding: "14px 24px",
      fontSize: "1rem",
    },
  };

  return (
    <Button
      {...props}
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      sx={{
        borderRadius: theme.shape.borderRadius,
        fontWeight: 600,
        textTransform: "none",
        transition: "all 0.2s ease",

        // aplica estilos da variante
        ...variantStyles[variant],

        // aplica estilos do tamanho
        ...sizeStyles[size],

        // quando estiver carregando
        ...(loading && {
          cursor: "wait",
          opacity: 0.8,
        }),
      }}
    >
      {loading ? (
        <CircularProgress size={22} color="inherit" />
      ) : (
        children
      )}
    </Button>
  );
}
