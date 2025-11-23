import React from "react";

// Layout
import DSGrid from "../../design-system/layout/DSGrid.jsx";
import DSGridItem from "../../design-system/layout/DSGridItem.jsx";

// Components CITEC
import DSText from "../../design-system/components/DSText.jsx";
import DSCard from "../../design-system/components/DSCard.jsx";

export default function SectionSobre() {
  return (
    <DSGrid spacing={4}>
      <DSGridItem xs={12} md={8}>
        <DSText variant="h4" weight={600}>
          Sobre o CITEC Design System
        </DSText>

        <DSText variant="body" sx={{ mt: 2 }}>
          O CITEC Design System foi criado para unificar a identidade visual,
          otimizar o desenvolvimento de interfaces e garantir uma experiência
          coerente para usuários, desenvolvedores e designers.
          Aqui você encontra componentes, tokens, padrões visuais e práticas de UI.
        </DSText>
      </DSGridItem>

      <DSGridItem xs={12} md={4}>
        <DSCard title="Objetivo" subtitle="Por que existe?">
          Acelerar desenvolvimento, padronizar interfaces e fortalecer a identidade CITEC.
        </DSCard>
      </DSGridItem>
    </DSGrid>
  );
}
