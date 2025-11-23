import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Check } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export default function DSCheckbox({
  label,
  checked,
  onChange,
  size = "md", // sm | md | lg
  disabled = false,
  ...props
}) {
  const theme = useTheme();

  const sizeMap = {
    sm: 18,
    md: 22,
    lg: 26,
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          icon={
            <span
              style={{
                width: sizeMap[size],
                height: sizeMap[size],
                borderRadius: 6,
                border: `2px solid ${theme.palette.neutral[400]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                transition: "all 0.2s ease",
              }}
            />
          }
          checkedIcon={
            <span
              style={{
                width: sizeMap[size],
                height: sizeMap[size],
                borderRadius: 6,
                background: theme.palette.primary.main,
                border: `2px solid ${theme.palette.primary.main}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                color: "white",
              }}
            >
              <Check size={sizeMap[size] * 0.55} />
            </span>
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
