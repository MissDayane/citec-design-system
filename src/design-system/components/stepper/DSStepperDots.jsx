
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSStepperDots({
  steps = [],
  activeStep = 0,
  onStepChange,
  showLabels = true,
}) {
  const theme = useTheme();
  const total = steps.length;
  const progress =
    total > 1 ? (activeStep / (total - 1)) * 100 : 0;

  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 3,
        boxShadow: theme.shadows[2],
        bgcolor: "background.paper",
      }}
    >
      {/* Linha de progresso */}
      <Box sx={{ position: "relative", mb: showLabels ? 3 : 1.5 }}>
        <Box
          sx={{
            height: 4,
            borderRadius: 999,
            bgcolor: theme.palette.neutral[200],
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 4,
            borderRadius: 999,
            width: `${progress}%`,
            bgcolor: theme.palette.primary.main,
            transition: "width 0.35s ease",
          }}
        />
      </Box>

      {/* Steps */}
      <Stack direction="row" justifyContent="space-between">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          const circleBg = isActive
            ? theme.palette.primary.main
            : isCompleted
            ? theme.palette.primary.light
            : theme.palette.neutral[200];

          const circleColor = isActive
            ? "#fff"
            : isCompleted
            ? theme.palette.primary.dark
            : theme.palette.text.secondary;

          return (
            <Stack
              key={step.label ?? index}
              alignItems="center"
              spacing={1}
              sx={{ minWidth: 0 }}
            >
              <Box
                onClick={
                  onStepChange
                    ? () => onStepChange(index)
                    : undefined
                }
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  bgcolor: circleBg,
                  color: circleColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  boxShadow: isActive ? theme.shadows[3] : "none",
                  cursor: onStepChange ? "pointer" : "default",
                  transition: "all 0.25s ease",
                  border: isCompleted && !isActive
                    ? `1px solid ${theme.palette.primary.main}`
                    : "none",
                }}
              >
                {step.icon ? step.icon : index + 1}
              </Box>

              {showLabels && (
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {step.label}
                  </Typography>
                  {step.description && (
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                      noWrap
                    >
                      {step.description}
                    </Typography>
                  )}
                </Box>
              )}
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}
