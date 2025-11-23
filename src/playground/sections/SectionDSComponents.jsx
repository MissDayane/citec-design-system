import React from "react";
import { Stack, Box } from "@mui/material";
import { Plus, Edit, Trash } from "lucide-react";

// ===== DS Layout =====
import DSGrid from "../../design-system/layout/DSGrid.jsx";
import DSGridItem from "../../design-system/layout/DSGridItem.jsx";

// ===== DS Components =====
import DSText from "../../design-system/components/DSText.jsx";
import DSButton from "../../design-system/components/DSButton.jsx";
import DSIconButton from "../../design-system/components/DSIconButton.jsx";
import DSInput from "../../design-system/components/DSInput.jsx";
import DSCard from "../../design-system/components/DSCard.jsx";
import DSTag from "../../design-system/components/DSTag.jsx";
import DSCheckbox from "../../design-system/components/DSCheckbox.jsx";
import DSRadio from "../../design-system/components/DSRadio.jsx";
import DSSwitch from "../../design-system/components/DSSwitch.jsx";
import DSPagination from "../../design-system/components/DSPagination.jsx";
import DSProgressBar from "../../design-system/components/DSProgressBar.jsx";

// ===== Steppers (index.js permite sem extensão) =====
import {
  DSStepperDots,
  DSStepperChevron,
  DSStepperStatus,
} from "../../design-system/components/stepper";

export default function SectionDSComponents({ page, setPage }) {
  return (
    <DSGrid spacing={4}>

      <DSGridItem xs={12}>
        <DSText variant="h4" sx={{ mb: 1 }}>
          DS Components (Padrões CITEC)
        </DSText>
      </DSGridItem>

      {/* BOTÕES */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSButton</DSText>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <DSButton variant="primary">Primary</DSButton>
          <DSButton variant="secondary">Secondary</DSButton>
          <DSButton variant="outline">Outline</DSButton>
          <DSButton variant="danger">Danger</DSButton>
        </Stack>
      </DSGridItem>

      {/* ICON BUTTON */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSIconButton</DSText>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <DSIconButton variant="primary"><Plus size={20} /></DSIconButton>
          <DSIconButton variant="ghost"><Edit size={20} /></DSIconButton>
          <DSIconButton variant="danger"><Trash size={20} /></DSIconButton>
        </Stack>
      </DSGridItem>

      {/* INPUTS */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSInput</DSText>
        <Stack spacing={2} sx={{ mt: 2, maxWidth: 350 }}>
          <DSInput label="Buscar" startIcon={<Edit size={18} />} />
          <DSInput label="Email" endIcon={<Edit size={18} />} />
        </Stack>
      </DSGridItem>

      {/* TAGS */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSTag</DSText>
        <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: "wrap" }}>
          <DSTag label="Padrão" />
          <DSTag label="Ativo" variant="primary" />
          <DSTag label="Aprovado" variant="success" />
          <DSTag label="Em análise" variant="warning" />
          <DSTag label="Erro" variant="danger" />
          <DSTag label="Info" variant="info" />
          <DSTag label="Pequeno" size="sm" variant="secondary" />
        </Stack>
      </DSGridItem>

      {/* CHECKBOX */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSCheckbox</DSText>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <DSCheckbox label="Padrão" />
          <DSCheckbox label="Selecionado" checked />
          <DSCheckbox label="Desabilitado" disabled />
          <DSCheckbox label="Pequeno" size="sm" />
        </Stack>
      </DSGridItem>

      {/* RADIO */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSRadio</DSText>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <DSRadio label="Opção A" checked />
          <DSRadio label="Opção B" />
          <DSRadio label="Desabilitado" disabled />
          <DSRadio label="Pequeno" size="sm" />
        </Stack>
      </DSGridItem>

      {/* SWITCH */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSSwitch</DSText>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <DSSwitch label="Ativo" checked />
          <DSSwitch label="Modo escuro" />
          <DSSwitch label="Pequeno" size="sm" checked />
        </Stack>
      </DSGridItem>

      {/* PAGINATION */}
      <DSGridItem xs={12} md={6}>
        <DSText variant="subtitle">DSPagination</DSText>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <DSPagination page={page} totalPages={6} onChange={setPage} />
        </Stack>
      </DSGridItem>

      {/* PROGRESS BAR */}
      <DSGridItem xs={12}>
        <DSText variant="subtitle">DSProgressBar</DSText>
        <Stack spacing={2} sx={{ mt: 2, maxWidth: 450 }}>
          <DSProgressBar value={40} />
          <DSProgressBar value={70} variant="success" />
          <DSProgressBar value={50} variant="warning" />
          <DSProgressBar value={90} variant="danger" height={12} />
        </Stack>
      </DSGridItem>

      {/* STEPPERS */}
      <DSGridItem xs={12}>
        <DSText variant="h4" sx={{ mt: 4, mb: 2 }}>
          Steppers (CITEC)
        </DSText>
      </DSGridItem>

      {/* Dots */}
      <DSGridItem xs={12}>
        <DSText variant="subtitle">DSStepperDots</DSText>
        <Box sx={{ mt: 2 }}>
          <DSStepperDots
            steps={[
              { label: "Business Type", description: "Select type" },
              { label: "Business Detail", description: "Provide details" },
              { label: "Your Details", description: "Account info" },
              { label: "Verification", description: "Confirm identity" },
            ]}
            activeStep={1}
          />
        </Box>
      </DSGridItem>

      {/* Chevron */}
      <DSGridItem xs={12}>
        <DSText variant="subtitle" sx={{ mt: 3 }}>
          DSStepperChevron
        </DSText>
        <Box sx={{ mt: 2 }}>
          <DSStepperChevron
            steps={[
              { label: "Info", description: "Basic data" },
              { label: "Address", description: "Location" },
              { label: "Review", description: "Check data" },
              { label: "Finish", description: "Confirmation" },
            ]}
            activeStep={2}
          />
        </Box>
      </DSGridItem>

      {/* Status */}
      <DSGridItem xs={12}>
        <DSText variant="subtitle" sx={{ mt: 3 }}>
          DSStepperStatus
        </DSText>
        <Box sx={{ mt: 2 }}>
          <DSStepperStatus
            steps={[
              { label: "Personal Information" },
              { label: "Security Verification" },
              { label: "Account Setup" },
              { label: "Finish" },
            ]}
            activeStep={1}
          />
        </Box>
      </DSGridItem>

    </DSGrid>
  );
}
