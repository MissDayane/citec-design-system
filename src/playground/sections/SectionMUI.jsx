import React from "react";
import { Button, Stack } from "@mui/material";

// Layout
import DSGrid from "../../design-system/layout/DSGrid.jsx";
import DSGridItem from "../../design-system/layout/DSGridItem.jsx";

// Components CITEC
import DSText from "../../design-system/components/DSText.jsx";
import DSInput from "../../design-system/components/DSInput.jsx";

import { Edit } from "lucide-react";

export default function SectionMUI() {
  return (
    <DSGrid spacing={4}>
      <DSGridItem xs={12}>
        <DSText variant="h4" sx={{ mb: 1 }}>
          MUI Components (Overrides CITEC)
        </DSText>
      </DSGridItem>

      {/* BOTÕES */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">Botões Padrão MUI</DSText>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </DSGridItem>

      {/* INPUTS */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">Inputs Override</DSText>
        <Stack spacing={2} sx={{ mt: 2, maxWidth: 300 }}>
          <DSInput label="Nome" />
          <DSInput label="Email" endIcon={<Edit size={18} />} />
        </Stack>
      </DSGridItem>
    </DSGrid>
  );
}
