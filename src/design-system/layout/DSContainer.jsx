import React from "react";
import { Box } from "@mui/material";

export default function DSContainer({
  children,
  maxWidth = "1200px",
  padding = { xs: 2, sm: 3, md: 4 },
  ...props
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth,
        margin: "0 auto",
        paddingLeft: padding,
        paddingRight: padding,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
