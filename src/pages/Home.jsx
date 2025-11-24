import React from "react";
import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";

import DSText from "../design-system/components/DSText.jsx";
import DSCard from "../design-system/components/DSCard.jsx";

import { Stack, Box } from "@mui/material";
import { Palette, Layers, Package2 } from "lucide-react";

export default function Home() {
  return (
    <DSPage title="CITEC Design System">
      <DSContainer>

        {/* ======================================================= */}
        {/* HERO */}
        {/* ======================================================= */}
        <DSSection>
          <DSText variant="h3" weight={700}>
            CITEC Design System
          </DSText>

          <DSText variant="body" sx={{ mt: 2, maxWidth: 700 }}>
            O CITEC Design System centraliza diretrizes visuais, tokens,
            componentes e boas práticas para garantir consistência, velocidade
            no desenvolvimento e uma experiência unificada em todos os projetos.
          </DSText>
        </DSSection>

        {/* ======================================================= */}
        {/* SEÇÕES PRINCIPAIS */}
        {/* ======================================================= */}
        <DSSection
          title="Fundamentos"
          description="Tokens essenciais que definem a identidade visual do CITEC"
        >
          <Stack
            direction="row"
            spacing={3}
            flexWrap="wrap"
            sx={{ mt: 3 }}
          >
            <DSCard
              title="Design Tokens"
              subtitle="Cores, tipografia, espaçamentos e efeitos"
              icon={<Palette size={32} />}
              href="/tokens"
            >
              A base visual da identidade CITEC.
            </DSCard>

            <DSCard
              title="Componentes"
              subtitle="Biblioteca completa CITEC UI"
              icon={<Package2 size={32} />}
              href="/components"
            >
              Experiência consistente através de UI modular.
            </DSCard>

            <DSCard
              title="Foundation"
              subtitle="Princípios e guias visuais"
              icon={<Layers size={32} />}
              href="/foundation"
            >
              A filosofia por trás do design CITEC.
            </DSCard>
          </Stack>
        </DSSection>

        {/* ======================================================= */}
        {/* VISÃO GERAL */}
        {/* ======================================================= */}
        <DSSection
          title="Por que usar o CITEC DS?"
          description="Principais benefícios para equipes de design e desenvolvimento"
        >
          <Stack spacing={3} sx={{ maxWidth: 700, mt: 3 }}>
            <Box>
              <DSText variant="subtitle" weight={600}>Consistência Visual</DSText>
              <DSText variant="body">
                Garantimos padrões de UI e experiência unificada em múltiplos projetos.
              </DSText>
            </Box>

            <Box>
              <DSText variant="subtitle" weight={600}>Velocidade de Desenvolvimento</DSText>
              <DSText variant="body">
                Componentes prontos, documentados e fáceis de reutilizar.
              </DSText>
            </Box>

            <Box>
              <DSText variant="subtitle" weight={600}>Escalabilidade</DSText>
              <DSText variant="body">
                Estrutura modular e flexível que cresce com as demandas dos projetos.
              </DSText>
            </Box>
          </Stack>
        </DSSection>
      </DSContainer>
    </DSPage>
  );
}
