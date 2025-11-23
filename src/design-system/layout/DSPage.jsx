import React from "react";
import { Box } from "@mui/material";
import DSContainer from "./DSContainer.jsx";

export default function DSPage({
  header,
  footer,
  children,
  background = "background.default",
}) {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: background }}>
      
      {/* Header */}
      {header && (
        <Box sx={{ paddingY: 2, borderBottom: "1px solid #E5E7EB" }}>
          <DSContainer>{header}</DSContainer>
        </Box>
      )}

      {/* Conteúdo principal */}
      <Box sx={{ paddingY: 4 }}>
        <DSContainer>{children}</DSContainer>
      </Box>

      {/* Footer */}
      {footer && (
        <Box sx={{ paddingY: 2, marginTop: 4, borderTop: "1px solid #E5E7EB" }}>
          <DSContainer>{footer}</DSContainer>
        </Box>
      )}
    </Box>
  );
}
