
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DSStepperChevron({
  steps = [],
  activeStep = 0,
  onStepChange,
}) {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={1}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        const bg = isActive
          ? theme.palette.primary.main
          : isCompleted
          ? theme.palette.primary.light
          : theme.palette.neutral[100];

        const color = isActive
          ? "#fff"
          : isCompleted
          ? theme.palette.primary.dark
          : theme.palette.text.primary;

        return (
          <Box
            key={step.label ?? index}
            onClick={
              onStepChange ? () => onStepChange(index) : undefined
            }
            sx={{
              position: "relative",
              px: 2.5,
              py: 1.5,
              bgcolor: bg,
              color,
              borderRadius: index === 0 ? "12px 0 0 12px" : 0,
              boxShadow: isActive ? theme.shadows[3] : theme.shadows[1],
              cursor: onStepChange ? "pointer" : "default",
              minWidth: 140,
              overflow: "hidden",
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                right: -16,
                width: 32,
                height: "100%",
                background: `linear-gradient(135deg, transparent 0%, transparent 50%, ${bg} 51%, ${bg} 100%)`,
              },
              ...(index === steps.length - 1 && {
                borderRadius: "0 12px 12px 0",
                "&:after": { display: "none" },
              }),
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, mb: 0.25 }}
            >
              {step.label}
            </Typography>
            {step.description && (
              <Typography
                variant="caption"
                sx={{ opacity: 0.85 }}
              >
                {step.description}
              </Typography>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
