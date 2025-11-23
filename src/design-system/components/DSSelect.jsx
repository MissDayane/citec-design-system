import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export default function DSSelect({
  label,
  value,
  onChange,
  placeholder,
  options = [],
  variant = "default", // default | outlined | soft
  size = "md",         // sm | md | lg
  error = false,
  success = false,
  helperText,
  disabled = false,
  fullWidth = true,
  ...props
}) {
  const theme = useTheme();

  // ------------------------
  // TAMANHOS
  // ------------------------
  const sizeStyles = {
    sm: {
      fontSize: "0.8rem",
      height: 38,
    },
    md: {
      fontSize: "0.9rem",
      height: 46,
    },
    lg: {
      fontSize: "1rem",
      height: 54,
    },
  };

  // ------------------------
  // VARIANTES
  // ------------------------
  const variantStyles = {
    default: {
      backgroundColor: "#fff",
      border: `1px solid ${theme.palette.neutral[300]}`,
    },
    outlined: {
      backgroundColor: "#fff",
      border: `2px solid ${theme.palette.primary.main}`,
    },
    soft: {
      backgroundColor: `${theme.palette.primary.main}14`,
      border: `1px solid ${theme.palette.primary.main}40`,
    },
  };

  // ------------------------
  // ESTADOS (erro, sucesso, disabled)
  // ------------------------
  const stateStyles = {
    ...(error && {
      borderColor: theme.palette.error.main,
      "& .MuiInputLabel-root": { color: theme.palette.error.main },
    }),

    ...(success && {
      borderColor: theme.palette.success.main,
      "& .MuiInputLabel-root": { color: theme.palette.success.main },
    }),

    ...(disabled && {
      opacity: 0.6,
    }),
  };

  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}

      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        IconComponent={() => <ChevronDown size={18} />}
        renderValue={(selected) =>
          selected ? selected : placeholder || ""
        }
        sx={{
          borderRadius: "12px",
          paddingRight: "32px",

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            height: sizeStyles[size].height,
            paddingLeft: "12px",
            fontSize: sizeStyles[size].fontSize,
          },

          "& fieldset": {
            border: "none",
          },

          ...variantStyles[variant],
          ...stateStyles,
        }}
        {...props}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.icon && (
              <span style={{ marginRight: 8, display: "flex" }}>
                {item.icon}
              </span>
            )}
            {item.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
