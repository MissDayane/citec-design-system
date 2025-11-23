import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";

// Sections internas
import SectionSobre from "./sections/SectionSobre";
import SectionMUI from "./sections/SectionMUI";
import SectionDSComponents from "./sections/SectionDSComponents";

function SectionButton({ active, onClick, label }) {
  return (
    <Button
      variant={active ? "contained" : "text"}
      onClick={onClick}
      sx={{ marginRight: 1.5, textTransform: "none", fontWeight: 600 }}
    >
      {label}
    </Button>
  );
}

export default function Playground() {
  const [section, setSection] = useState("sobre");
  const [page, setPage] = useState(1);

  return (
    <DSPage
      header={
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            CITEC Design System – Playground
          </Typography>

          <Stack direction="row">
            <SectionButton active={section === "sobre"} onClick={() => setSection("sobre")} label="Sobre" />
            <SectionButton active={section === "mui"} onClick={() => setSection("mui")} label="MUI" />
            <SectionButton active={section === "ds"} onClick={() => setSection("ds")} label="DS Components" />
          </Stack>
        </Stack>
      }
    >
      {/* Conteúdo */}
      <DSContainer>
        {section === "sobre" && (
          <DSSection title="Sobre o CITEC Design System">
            <SectionSobre />
          </DSSection>
        )}

        {section === "mui" && (
          <DSSection title="Componentes MUI" subtitle="Overrides personalizados do CITEC">
            <SectionMUI />
          </DSSection>
        )}

        {section === "ds" && (
          <DSSection title="Componentes CITEC">
            <SectionDSComponents page={page} setPage={setPage} />
          </DSSection>
        )}
      </DSContainer>
    </DSPage>
  );
}
