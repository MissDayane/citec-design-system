# 🎨 CITEC Design System — UI Kit & Component Library

O **CITEC Design System** é um conjunto padronizado de componentes, tokens visuais, guidelines e boas práticas que garantem consistência, velocidade e qualidade no desenvolvimento das interfaces do ecossistema CITEC.

Este repositório reúne:

- 🌈 *Design Tokens* (cores, tipografia, espaçamentos, sombras, efeitos)
- 🧩 *Componentes React* padronizados (botões, inputs, cards, steppers, etc.)
- 📐 *Foundations* do design (grid, espaçamento, elevation)
- 📘 *Guidelines* oficiais de uso
- 🧭 Estrutura modular com rotas e pré-visualização dos componentes

---

## 📁 Estrutura do Projeto
```md 
📦 citec-design-system/
├── 📁 src/
│   ├── 📁 design-system/
│   │   ├── 📁 components/          # Botões, Inputs, Tags, Cards, Steppers etc.
│   │   ├── 📁 layout/              # DSPage, DSSection, DSContainer...
│   │   ├── 📁 theme/               # Tokens: palette, typography, spacing, shadows, effects
│   │   └── 📁 hooks/
│   │
│   ├── 📁 pages/
│   │   ├── 🏠 Home.jsx
│   │   ├── 🎨 Foundation.jsx
│   │   ├── 🎯 Tokens.jsx
│   │   ├── 🧩 Components.jsx
│   │   └── 📘 Guidelines.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md

```

## 🎨 Design Tokens Implementados

O CITEC DS inclui todas as bases visuais:

Categoria	Conteúdo
- Cores	Paleta completa com estados (hover, active, disabled)
- Tipografia	Escalas com Poppins (títulos) + Inter (corpo)
- Spacing	Sistema modular baseado em 4px
- Shadows	Elevações padronizadas
- Effects	Blur, glass, overlay, noise e estados visuais

## 🧩 Componentes Disponíveis

- Botões: primary, secondary, outline, danger
- Ícones: DSIconButton
- Inputs: DSInput minimalista com ícones
- Cards: DSCard responsivo
- Tags / Chips: DSTag
- Form Controls: DSCheckbox, DSRadio, DSSwitch
- Navigation: DSPagination
- Feedback: DSProgressBar
- Steppers:
 Dots, Chevron, Status

## 🗂 Páginas do Design System
- Página	Descrição
- Home	Introdução ao DS
- Foundation	Visão geral das bases do design
- Tokens	Cores, tipografia, spacing, sombras, efeitos
- Components	Catálogo visual dos componentes
- Guidelines	Regras de acessibilidade e boas práticas

 ## 🛠 Tecnologias

- React + Vite

- Material UI (MUI)

- Lucide Icons

- Styled-system via sx do MUI

## 👩‍💻 Objetivo do Projeto

- Criar um Design System escalável, consistente e reutilizável para aumentar a eficiência do desenvolvimento no ecossistema CITEC, garantindo:

- Experiência unificada

- Redução de retrabalho

- Padronização visual

- Componentes robustos e documentados

## 🤝 Contribuindo

Faça um fork

Crie uma branch:

- git checkout -b feat/nova-feature


Commit:

- git commit -m "feat: descrição da mudança"


Abra um Pull Request

## ✨ Autor(a)

### Dayane Pontes
- UI/UX Designer & Front-end Developer
- CITEC — Centro de Inovação, Tecnologia do CESMAC
