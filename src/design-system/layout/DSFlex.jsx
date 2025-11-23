import React from "react";
import { Box } from "@mui/material";

export default function DSFlex({
  children,
  gap = 2,
  align = "center",
  justify = "flex-start",
  direction = "row",
  wrap = "nowrap",
  ...props
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
