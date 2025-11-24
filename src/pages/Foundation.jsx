// src/pages/Foundation.jsx
import React from "react";
import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";
import DSText from "../design-system/components/DSText.jsx";

import Tokens from "./Tokens.jsx"; // reutilizamos os tokens dentro do foundation

export default function FoundationPage() {
  return (
    <DSPage>
      <DSContainer>

        <DSText variant="title" weight={700} sx={{ mb: 3 }}>
          Fundamentos – CITEC Design System
        </DSText>

        <DSText variant="body" sx={{ mb: 4 }}>
          Os fundamentos estabelecem a base visual do CITEC Design System.
          Eles definem como cores, tipografia, espaçamentos, sombras e efeitos
          se comportam para garantir consistência e alinhamento estético.
        </DSText>

        {/* Tokens reutilizados aqui */}
        <DSSection>
          <Tokens embedded />
        </DSSection>

      </DSContainer>
    </DSPage>
  );
}
