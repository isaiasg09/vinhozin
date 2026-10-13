# DESIGN_BRIEF.md — Vinhozin • Loja de Vinhos

## 1. Arquétipo Selecionado
**Arquétipo 1: Sofisticação & Craft (Luxury Boutique Wine Atelier)**
- **Justificativa do Desempate:** Embora as avaliações ressaltem um ambiente aconchegante, o diferencial competitivo chave do Vinhozin é a curadoria de rótulos selecionados ("vinhos para todos os gostos", "bons vinhos e excelentes preços") em um espaço intimista. O cliente de vinhos em São Paulo (especialmente na região nobre do Jardim Colombo / Morumbi) busca a segurança de uma curadoria refinada, atendimento de excelência (citado nominalmente nas avaliações) e exclusividade visual que transmita autoridade sem afastar pelo preço.
- **3 Adjetivos de Marca (extraídos das avaliações reais):**
  1. *Aconchegante* ("lugar excelente, aconchegante")
  2. *Qualidade* ("atendimento da melhor qualidade", "bons vinhos")
  3. *Agradável* ("lugar bonito, agradável")

---

## 2. DFII (Design Feasibility & Impact Index) — Score: 14/15
- **Aesthetic Impact (5/5):** Layout escuro cinematográfico (vinho profundo + dourado antigo), tipografia serifada editorial imponente, tall cards assimétricos e microinterações táteis.
- **Context Fit (5/5):** Encaixe exato para uma boutique enológica no Jardim Colombo, SP.
- **Implementation Feasibility (4/5):** React 18, Tailwind CSS, Framer Motion com `useScroll` e `useTransform`, e `lucide-react`.
- **Performance Safety (5/5):** Imagens otimizadas com lazy loading e decode assíncrono, CSS-first tokens, ausência de bibliotecas externas pesadas.
- **Consistency Risk (-1):** Reduzido pelo uso estrito de variáveis semânticas CSS em `src/index.css`.

---

## 3. Paleta de Cores e Sistema de Tokens (WCAG AA)
Definida como variáveis CSS nativas em `src/index.css` e mapeada no `tailwind.config.js`:

| Token | CSS Variable | Valor / Função |
| :--- | :--- | :--- |
| **Fundo Primário** | `--bg-primary` | `#080708` (Dark Obsidian / Quase ébano) |
| **Fundo de Superfície** | `--bg-surface` | `#120f13` (Vinho/Zin profundo escuro) |
| **Fundo Elevado** | `--bg-elevated` | `#1c171e` (Card surface com brilho sutil) |
| **Acento Primário (CTA)** | `--color-accent` | `#c69255` (Ouro Envelhecido / Champagne Warm Gold) |
| **Acento Hover** | `--color-accent-hover` | `#dba467` (Ouro radiante) |
| **Bordas / Filetes** | `--border-subtle` | `rgba(198, 146, 85, 0.18)` (Filete dourado translúcido) |
| **Texto Primário** | `--text-primary` | `#fdfbf7` (Branco seda suave) |
| **Texto Secundário** | `--text-secondary` | `#b8b0b8` (Cinza ametista suave para leitura) |
| **Texto Muted** | `--text-muted` | `#7a707a` (Neutro atenuado) |

*Regra de Ouro:* Uma **única cor de destaque para todos os CTAs primários** (`--color-accent` dourado quente).

---

## 4. Tipografia
- **Display / Títulos (`font-display`):** `Playfair Display`, serif, com variações itálicas refinadas para palavras-chave de destaque.
- **Corpo / UI (`font-sans`):** `Plus Jakarta Sans`, sans-serif moderno, legível e neutro, garantindo leitura limpa em 16px+ no mobile.
- Importação via Google Fonts com `display=swap`.

---

## 5. Raios, Sombras e Texturas
- **Raios de Borda:** Estruturados e sóbrios: `rounded-lg` (8px) a `rounded-2xl` (16px). Sem cantos arredondados excessivos de app de consumo.
- **Sombras:** Suaves e profundas (`shadow-2xl shadow-black/80`).
- **Textura:** Grão cinematográfico sutil inline via SVG noise pattern overlay (`opacity-[0.03]`).
- **Formatos:** Tall cards (aspect ratio 3:4 e 4:5), imagens verticais flutuando em camadas assimétricas.

---

## 6. Estilo de Movimento e Animações
- **Curva de Easing:** `[0.22, 1, 0.36, 1]` (Cubic Bezier elegante e cadenciado).
- **Entradas:** `fade-up` e `blur-in` orquestrados via `framer-motion` com `staggerChildren`.
- **Hero:** Revelação tipográfica em máscara + Parallax sutil de imagens verticais via `useScroll` e `useTransform`.
- **Interações:** Botões e cartões com hook `useMagnetic` no desktop e elevação suave ao hover.
- **Acessibilidade:** Desativação total de parallax e movimentos amplos quando `prefers-reduced-motion` estiver ativo.
