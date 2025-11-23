
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle2 } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export default function DSStepperStatus({
  steps = [],
  activeStep = 0,
}) {
  const theme = useTheme();

  return (
    <Stack spacing={1.5}>
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;

        const statusText = isCompleted
          ? "Completed"
          : isActive
          ? "In Progress"
          : "Pending";

        const statusColor = isCompleted
          ? theme.palette.success.main
          : isActive
          ? theme.palette.info.main
          : theme.palette.text.disabled;

        return (
          <Box
            key={step.label ?? index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.5,
              borderRadius: 2,
              boxShadow: theme.shadows[1],
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={0.25}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Step {index + 1}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {step.label}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              {isCompleted && (
                <CheckCircle2 size={18} color={theme.palette.success.main} />
              )}
              <Typography
                variant="caption"
                sx={{ color: statusColor, fontWeight: 600 }}
              >
                {statusText}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
}
