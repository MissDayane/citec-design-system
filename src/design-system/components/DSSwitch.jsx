import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

// ==========================
// SWITCH FIXO — TAMANHO MD
// ==========================
const CITECStyledSwitch_md = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  display: "flex",

  "& .MuiSwitch-switchBase": {
    padding: 2,
    transition: "0.3s ease",

    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },

    "&.Mui-disabled": {
      opacity: 0.5,
    },
  },

  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: theme.shadows[3],
    transition: "0.3s ease",
  },

  "& .MuiSwitch-track": {
    borderRadius: 26,
    backgroundColor: theme.palette.neutral[300],
    opacity: 1,
    transition: "0.3s ease",
  },
}));


// ==========================
// SWITCH FIXO — TAMANHO SM
// ==========================
const CITECStyledSwitch_sm = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",

  "& .MuiSwitch-switchBase": {
    padding: 2,
    transition: "0.3s ease",

    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },

    "&.Mui-disabled": {
      opacity: 0.5,
    },
  },

  "& .MuiSwitch-thumb": {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: theme.shadows[3],
    transition: "0.3s ease",
  },

  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: theme.palette.neutral[300],
    opacity: 1,
    transition: "0.3s ease",
  },
}));


// =============================================
// COMponente PRINCIPAL
// =============================================
export default function DSSwitch({
  label,
  checked,
  onChange,
  disabled = false,
  size = "md",
  ...props
}) {
  const Component = size === "sm" ? CITECStyledSwitch_sm : CITECStyledSwitch_md;

  return (
    <FormControlLabel
      control={
        <Component
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: size === "sm" ? "0.85rem" : "1rem",
        },
      }}
    />
  );
}
