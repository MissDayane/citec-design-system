import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSCard({
  title,
  subtitle,
  children,
  variant = "elevated",
  hover = true,
  padding = 3, // <-- padding padrão maior
  header,
  footer,
  ...props
}) {
  const theme = useTheme();

  // -----------------------------
  // Variantes
  // -----------------------------
  const variants = {
    elevated: {
      backgroundColor: "#FFFFFF",
      boxShadow: theme.shadows[2],
      border: "none",
    },

    outlined: {
      backgroundColor: "#FFFFFF",
      border: `1px solid ${theme.palette.neutral[300]}`,
      boxShadow: "none",
    },

    glass: {
      ...theme.customEffects.glass.light,
      background: theme.customEffects.glass.light.background,
      backdropFilter: theme.customEffects.glass.light.backdropFilter,
      border: theme.customEffects.glass.light.border,
      boxShadow: theme.shadows[1],
    },
  };

  return (
    <Box
      {...props}
      sx={{
        borderRadius: "16px", // <-- novo radius padrão
        padding: padding,
        transition: "0.25s ease",
        ...variants[variant],

        ...(hover && {
          "&:hover": {
            boxShadow: theme.shadows[4],
            transform: "translateY(-2px)",
          },
        }),
      }}
    >

      {/* Header custom */}
      {header && <Box sx={{ mb: 2 }}>{header}</Box>}

      {/* Título */}
      {title && (
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
      )}

      {/* Subtítulo */}
      {subtitle && (
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, mb: 2 }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Conteúdo */}
      <Box sx={{ mt: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      {footer && <Box sx={{ mt: 2 }}>{footer}</Box>}
    </Box>
  );
}
