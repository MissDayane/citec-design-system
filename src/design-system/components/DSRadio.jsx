import React from "react";
import { Radio, FormControlLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSRadio({
  label,
  value,
  checked,
  onChange,
  size = "md", // sm | md | lg
  disabled = false,
  ...props
}) {
  const theme = useTheme();

  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 26,
  };

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          icon={
            <span
              style={{
                width: sizeMap[size],
                height: sizeMap[size],
                borderRadius: "50%",
                border: `2px solid ${theme.palette.neutral[400]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.2s ease",
              }}
            />
          }
          checkedIcon={
            <span
              style={{
                width: sizeMap[size],
                height: sizeMap[size],
                borderRadius: "50%",
                border: `6px solid ${theme.palette.primary.main}`,
                boxSizing: "border-box",
                display: "flex",
                transition: "0.2s ease",
              }}
            />
          }
          {...props}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize:
            size === "sm" ? "0.85rem" : size === "md" ? "0.95rem" : "1rem",
        },
        opacity: disabled ? 0.5 : 1,
      }}
    />
  );
}
