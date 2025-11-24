import React from "react";
import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";

import DSText from "../design-system/components/DSText.jsx";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Componente para círculos de cores
function ColorCircle({ color, label }) {
  return (
    <Stack alignItems="center" spacing={1}>
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: color,
          border: "2px solid #FFF",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      />
      <DSText variant="caption" color="secondaryText">
        {label}
      </DSText>
    </Stack>
  );
}

export default function TokensPage() {
  const theme = useTheme();

  return (
    <DSPage title="Design Tokens – CITEC UI Kit">
      <DSContainer>

        {/* HERO */}
        <DSSection>
          <DSText variant="h3" weight={700}>
            CITEC UI Kit — Design Tokens
          </DSText>

          <DSText variant="body" sx={{ mt: 1, maxWidth: "700px" }}>
            Estes são os tokens oficiais do CITEC Design System: cores,
            tipografia, espaçamento, sombras e efeitos. Eles garantem
            consistência e escalabilidade em toda a experiência.
          </DSText>
        </DSSection>

        {/* COLORS */}
        <DSSection title="Colors" description="Paleta oficial do CITEC">
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={4}
            sx={{ mt: 2 }}
          >
            {Object.entries(theme.palette).map(([groupName, groupValue]) => {
              if (typeof groupValue !== "object") return null;

              return Object.entries(groupValue).map(([name, color]) => {
                if (typeof color !== "string") return null;

                return (
                  <ColorCircle
                    key={`${groupName}-${name}`}
                    color={color}
                    label={`${groupName}.${name}`}
                  />
                );
              });
            })}
          </Stack>
        </DSSection>

        {/* TYPOGRAPHY */}
        <DSSection title="Typography" description="Escalas tipográficas">
          <Stack spacing={3} sx={{ mt: 3 }}>
            <DSText variant="h1">Aa</DSText>

            <DSText variant="body">
              Tipografia moderna e legível. O CITEC usa Poppins como fonte
              principal, garantindo clareza visual.
            </DSText>

            {Object.entries(theme.typography).map(([key, value]) => {
  if (typeof value !== "object") return null;

  return (
    <Box key={key} sx={{ mt: 2 }}>
      <DSText variant="subtitle">{key}</DSText>

      <Box sx={{ ...value }}>
        The quick brown fox jumps over the lazy dog.
      </Box>
    </Box>
  );
})}
          </Stack>
        </DSSection>

        {/* SPACING */}
        <DSSection title="Spacing" description="Escala de espaçamento">
          <Stack spacing={2} sx={{ mt: 3 }}>
            {[4, 8, 12, 16, 20, 24, 32, 40].map((space) => (
              <Stack
                key={space}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: space,
                    height: 12,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1,
                  }}
                />
                <DSText variant="body">{space}px</DSText>
              </Stack>
            ))}
          </Stack>
        </DSSection>

        {/* SHADOWS */}
        <DSSection title="Shadows" description="Sombras oficiais do sistema">
          <Stack spacing={3} sx={{ mt: 3 }}>
            {theme.shadows.map((shadow, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  padding: 2,
                  borderRadius: 2,
                  background: "#FFF",
                  boxShadow: shadow,
                }}
              >
                <DSText variant="body">shadow[{index}]</DSText>
              </Box>
            ))}
          </Stack>
        </DSSection>

        {/* EFFECTS */}
<DSSection
  title="Effects"
  description="Transições e estados visuais"
>
  <Stack spacing={2} sx={{ mt: 3 }}>
    {Object.entries(theme?.customEffects?.state || {}).map(
      ([stateName, stateValue]) => (
        <Stack key={stateName} spacing={1}>
          <DSText variant="subtitle">{stateName}</DSText>

          <Box
            sx={{
              width: 160,
              height: 50,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              backgroundColor:
                theme.palette.primary.main + "CC",
              ...(typeof stateValue === "object" ? stateValue : {}),
            }}
          >
            {stateName}
          </Box>
        </Stack>
      )
    )}
  </Stack>
</DSSection>


      </DSContainer>
    </DSPage>
  );
}
