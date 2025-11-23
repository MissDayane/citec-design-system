import React from "react";
import { Grid } from "@mui/material";

export default function DSGridItem({
  children,
  xs = 12,
  sm = 6,
  md = 4,
  lg = 3,
  ...props
}) {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} {...props}>
      {children}
    </Grid>
  );
}
