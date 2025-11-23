import React from "react";
import { Grid } from "@mui/material";

export default function DSGrid({ children, spacing = 3, ...props }) {
  return (
    <Grid container spacing={spacing} {...props}>
      {children}
    </Grid>
  );
}
