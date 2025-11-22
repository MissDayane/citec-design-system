import React from "react";
import { Tabs, Tab, Box, Typography, Stack } from "@mui/material";
import DSButton from "../design-system/components/DSButton";
import DSIconButton from "../design-system/components/DSIconButton";
import DSInput from "../design-system/components/DSInput";
import {Plus, Trash, Edit, Search, Mail, Lock } from "lucide-react";
import DSCard from "../design-system/components/DSCard";

export default function Playground() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        CITEC Design System – Playground
      </Typography>

      {/* Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
        DSButton
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <DSButton variant="primary">Primary</DSButton>
        <DSButton variant="secondary">Secondary</DSButton>
        <DSButton variant="outline">Outline</DSButton>
        <DSButton variant="danger">Danger</DSButton>
      </Stack>

      {/* Icon Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
        DSIconButton
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <DSIconButton variant="primary">
          <Plus size={20} />
        </DSIconButton>

        <DSIconButton variant="ghost">
          <Edit size={20} />
        </DSIconButton>

        <DSIconButton variant="danger">
          <Trash size={20} />
        </DSIconButton>
      </Stack>

      <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
        DSInput
        </Typography>

        <Stack spacing={3} sx={{ maxWidth: 400 }}>
        <DSInput label="Nome" placeholder="Digite seu nome" />

        <DSInput
            label="Pesquisar"
            placeholder="Buscar…"
            startIcon={<Search size={18} />}
        />

        <DSInput
            label="Email"
            placeholder="email@exemplo.com"
            endIcon={<Mail size={18} />}
        />

        <DSInput
            label="Senha"
            placeholder="Digite sua senha"
            endIcon={<Lock size={18} />}
            size="lg"
        />

        <DSInput
            label="Com erro"
            placeholder="Digite algo"
            error
            helperText="Campo obrigatório"
        />

        <DSInput
            label="Sucesso"
            placeholder="Tudo certo!"
            success
        />
        </Stack>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
  DSCard
</Typography>

<Stack direction="row" spacing={3}>
  <DSCard title="Card Elevado" subtitle="Com hover padrão">
    Este é um conteúdo dentro do DSCard.
  </DSCard>

  <DSCard variant="outlined" title="Outlined">
    Card com borda padrão CITEC.
  </DSCard>

  <DSCard
    variant="glass"
    title="Glassmorphism"
    subtitle="Efeito blur CITEC"
    padding={3}
  >
    Conteúdo com efeito glass.
  </DSCard>
</Stack>

<DSCard
  title="Card com footer"
  footer={<DSButton variant="primary">Ação</DSButton>}
>
  Exemplo de card com botão no rodapé.
</DSCard>;
    <Box sx={{ mt: 4 }}>
        <Tabs defaultValue={0}>
            <Tab label="Visão Geral" />
            <Tab label="Atividades" />
            <Tab label="Configurações" />
        </Tabs>
    </Box>

    </Box>
    
  );
}
