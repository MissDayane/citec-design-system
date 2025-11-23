import React from "react";
import { Container } from "@mui/material";

export default function DSGridContainer({ children, maxWidth = "lg", ...props }) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
