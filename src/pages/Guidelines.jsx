// src/pages/Guidelines.jsx
import React from "react";

import DSPage from "../design-system/layout/DSPage.jsx";
import DSContainer from "../design-system/layout/DSContainer.jsx";
import DSSection from "../design-system/layout/DSSection.jsx";

import DSText from "../design-system/components/DSText.jsx";
import DSCard from "../design-system/components/DSCard.jsx";

export default function GuidelinesPage() {
  return (
    <DSPage>
      <DSContainer>

        {/* Cabeçalho */}
        <DSText variant="title" weight={700} sx={{ mb: 2 }}>
          Guidelines – Diretrizes Oficiais CITEC
        </DSText>

        <DSText variant="body" sx={{ mb: 4 }}>
          Este documento define as práticas essenciais que garantem consistência,
          acessibilidade e qualidade na construção de interfaces CITEC.
        </DSText>


        {/* ======================= */}
        {/* ACESSIBILIDADE */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Acessibilidade (A11y)
          </DSText>

          <DSCard title="Princípios de Acessibilidade" subtitle="WCAG 2.2">
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Contraste mínimo 4.5:1 para textos comuns</li>
              <li>Todos os botões precisam indicar foco visível</li>
              <li>Elementos clicáveis devem ter área mínima de 44×44px</li>
              <li>Atalhos de teclado devem ser suportados em componentes chave</li>
              <li>Textos nunca devem ser transmitidos apenas por cor</li>
              <li>Uso adequado de ARIA labels em inputs e botões icônicos</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* CORES */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Uso de Cores
          </DSText>

          <DSCard title="Quando usar cada cor">
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li><b>Primária:</b> ações principais, CTAs e destaques importantes</li>
              <li><b>Secundária:</b> ações auxiliares e navegação</li>
              <li><b>Sucesso:</b> confirmações, estados positivos</li>
              <li><b>Aviso:</b> atenção sem estado crítico</li>
              <li><b>Erro:</b> alertas e problemas graves</li>
              <li><b>Neutrais:</b> textos, fundos, bordas e separadores</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* TIPOGRAFIA */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Tipografia
          </DSText>

          <DSCard title="Regras de uso">
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Usar apenas fontes definidas no token: <b>Poppins</b> e <b>Inter</b></li>
              <li>Hierarquia clara: H1 → H6, depois body e captions</li>
              <li>Evitar textos muito longos em bold</li>
              <li>Manter line-height confortável para leitura</li>
              <li>Títulos nunca devem ser todos maiúsculos</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* ESPAÇAMENTO / GRID */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Espaçamento & Grid
          </DSText>

          <DSCard title="Spacing Scale CITEC">
            <DSText variant="body" sx={{ mb: 1 }}>
              Baseado no token de espaçamento (4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64).
            </DSText>

            <ul style={{ paddingLeft: "20px" }}>
              <li>Espaçamentos verticais seguem múltiplos de 8px</li>
              <li>Uso de DSGrid para responsividade</li>
              <li>Layouts mobile-first por padrão</li>
              <li>Cards com padding mínimo de 16px</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* ICONOGRAFIA */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Iconografia
          </DSText>

          <DSCard title="Padrões">
            <ul style={{ paddingLeft: "20px" }}>
              <li>Uso exclusivo de <b>Lucide Icons</b> no CITEC DS</li>
              <li>Tamanho padrão: 18–24px</li>
              <li>Evitar ícones complexos ou ilustrativos demais</li>
              <li>Ícones devem sempre ter rótulo acessível</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* TONS DE VOZ */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Tom de Voz
          </DSText>

          <DSCard title="Diretrizes de comunicação">
            <ul style={{ paddingLeft: "20px" }}>
              <li>Clareza sempre acima de formalidade</li>
              <li>Mensagens curtas e diretas</li>
              <li>Evitar jargões técnicos sem explicação</li>
              <li>Feedbacks sempre contextualizados, nunca vagos</li>
              <li>Erro deve ensinar → não apenas avisar</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* COMPONENTIZAÇÃO */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Componentização
          </DSText>

          <DSCard title="Regras gerais">
            <ul style={{ paddingLeft: "20px" }}>
              <li>Todo componente deve seguir tokens oficiais</li>
              <li>Não utilizar cores hardcoded (usar theme.palette)</li>
              <li>Estados: hover, active, focus, disabled</li>
              <li>Props devem ser claras e minimalistas</li>
              <li>Evitar lógica pesada dentro do componente de UI</li>
            </ul>
          </DSCard>
        </DSSection>


        {/* ======================= */}
        {/* MOTION / FEEDBACK */}
        {/* ======================= */}
        <DSSection>
          <DSText variant="h4" sx={{ mb: 2 }}>
            Motion & Feedback
          </DSText>

          <DSCard title="Boas práticas">
            <ul style={{ paddingLeft: "20px" }}>
              <li>Transições rápidas (150–250ms)</li>
              <li>Feedback imediato ao clique</li>
              <li>Nada de animações exageradas</li>
              <li>Motion sempre funcional → nunca decorativo</li>
            </ul>
          </DSCard>
        </DSSection>

      </DSContainer>
    </DSPage>
  );
}
