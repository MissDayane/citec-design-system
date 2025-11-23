import React from "react";
import { Box } from "@mui/material";
import DSText from "../components/DSText.jsx";

export default function DSSection({
  title,
  subtitle,
  children,
  align = "left",
  paddingY = { xs: 4, sm: 6, md: 8 },
  ...props
}) {
  return (
    <Box sx={{ paddingTop: paddingY, paddingBottom: paddingY }} {...props}>
      
      {/* Título */}
      {title && (
        <DSText
          variant="h4"
          weight={600}
          sx={{
            textAlign: align,
            marginBottom: subtitle ? 1 : 3,
          }}
        >
          {title}
        </DSText>
      )}

      {/* Subtítulo */}
      {subtitle && (
        <DSText
          variant="body"
          color="secondaryText"
          sx={{ textAlign: align, marginBottom: 3 }}
        >
          {subtitle}
        </DSText>
      )}

      {/* Conteúdo */}
      {children}
    </Box>
  );
}
