import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";

export default function DSInput({
  label,
  value,
  onChange,
  placeholder,
  size = "md",
  startIcon,
  endIcon,
  success = false,
  error = false,
  disabled = false,
  readOnly = false,
  helperText,
  ...props
}) {
  const theme = useTheme();

  // -----------------------------
  // 1. Tamanhos CITEC
  // -----------------------------
  const sizeStyles = {
    sm: {
      "& .MuiInputBase-root": {
        height: 36,
        fontSize: "0.8rem",
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.75rem",
      },
    },

    md: {
      "& .MuiInputBase-root": {
        height: 44,
        fontSize: "0.9rem",
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.85rem",
      },
    },

    lg: {
      "& .MuiInputBase-root": {
        height: 52,
        fontSize: "1rem",
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.9rem",
      },
    },
  };

  // -----------------------------
  // 2. Estilos de estado CITEC
  // -----------------------------
  const stateStyles = {
    success: success && {
      "& .MuiOutlinedInput-root fieldset": {
        borderColor: theme.palette.success.main,
      },
      "& .MuiInputLabel-root": {
        color: theme.palette.success.dark,
      },
    },

    error: error && {
      "& .MuiOutlinedInput-root fieldset": {
        borderColor: theme.palette.error.main,
        borderWidth: 2,
      },
      "& .MuiInputLabel-root": {
        color: theme.palette.error.main,
      },
      "& .MuiFormHelperText-root": {
        color: theme.palette.error.main,
        fontWeight: 500,
      },
    },

    disabled: disabled && {
      opacity: 0.6,
    },

    readOnly: readOnly && {
      "& .MuiOutlinedInput-input": {
        cursor: "default",
      },
    },
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      InputProps={{
        readOnly,
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null,
      }}
      error={error}
      helperText={helperText}
      fullWidth
      {...props}
      sx={{
        ...sizeStyles[size],
        ...stateStyles.success,
        ...stateStyles.error,
        ...stateStyles.disabled,
        ...stateStyles.readOnly,
      }}
    />
  );
}
