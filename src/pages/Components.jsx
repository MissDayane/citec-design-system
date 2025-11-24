// src/pages/Components.jsx
import React, { useState } from "react";
import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";
import DSText from "../design-system/components/DSText.jsx";

import SectionDSComponents from "../playground/sections/SectionDSComponents.jsx";

export default function ComponentsPage() {
  const [page, setPage] = useState(1);

  return (
    <DSPage>
      <DSContainer>

        <DSText variant="title" weight={700} sx={{ mb: 3 }}>
          Componentes – Padrões CITEC
        </DSText>

        <DSText variant="body" sx={{ mb: 4 }}>
          Esta página reúne todos os componentes oficiais do CITEC Design System.
          São elementos padronizados que garantem consistência, acessibilidade e velocidade no desenvolvimento.
        </DSText>

        <DSSection>
          <SectionDSComponents page={page} setPage={setPage} />
        </DSSection>

      </DSContainer>
    </DSPage>
  );
}
