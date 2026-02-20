# 🏗️ ARQOS Landing Page

Landing page em React.js com animação de scroll baseada em sequência de imagens para ARQOS Arquitetura e Gestão de Obras.

## ✨ Características

- **Hero com animação de scroll**: 40 frames PNG que animam conforme o usuário rola a página
- **Easing suave**: Animação com ease-out cubic para transições naturais
- **Lazy loading**: Carregamento otimizado das imagens com preloader
- **Design sofisticado**: Paleta "luxo invisível" com tipografia elegante
- **100% Responsivo**: Funciona perfeitamente em desktop e mobile
- **Performance otimizada**: Canvas rendering para animação fluida

## 📦 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool rápido
- **Canvas API** - Renderização da animação
- **CSS3** - Estilização avançada com animações

## 🚀 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Adicionar as imagens

Coloque suas **40 imagens PNG** (ezgif-frame-001.png até ezgif-frame-040.png) na pasta:

```
public/images/
├── ezgif-frame-001.png
├── ezgif-frame-002.png
├── ezgif-frame-003.png
...
└── ezgif-frame-040.png
```

### 3. Rodar o projeto

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

## 📁 Estrutura do Projeto

```
arqos-landing/
├── public/
│   └── images/              # 40 frames da animação
│       ├── ezgif-frame-001.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── HeroScrollAnimation.jsx    # Hero com animação
│   │   ├── Diferenciais.jsx           # Seção de diferenciais
│   │   ├── ComoFunciona.jsx           # Processo passo a passo
│   │   ├── CTAFinal.jsx               # CTA de conversão
│   │   └── Footer.jsx                 # Rodapé
│   ├── styles/
│   │   └── global.css                 # Estilos globais
│   ├── App.jsx                        # Componente principal
│   └── main.jsx                       # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personalização

### Ajustar altura de scroll da animação

No arquivo `src/components/HeroScrollAnimation.jsx`, linha 13:

```javascript
const scrollHeight = 3000; // Ajuste este valor (em pixels)
```

- **Valor maior**: Animação mais lenta, usuário precisa rolar mais
- **Valor menor**: Animação mais rápida

### Modificar quantidade de frames

Se você tiver mais ou menos de 40 frames, altere na linha 12:

```javascript
const frameCount = 40; // Altere para sua quantidade
```

### Personalizar cores

As cores estão centralizadas em `src/styles/global.css`:

```css
:root {
  --primary: #8B7355;        /* Cor principal */
  --primary-light: #A68968;  /* Variação clara */
  --primary-dark: #6B5943;   /* Variação escura */
  --bg-cream: #F5F3F0;       /* Fundo creme */
  /* ... */
}
```

## 🎯 Como Funciona a Animação

1. **Preload**: As 40 imagens são carregadas antes da animação começar
2. **Progress Bar**: Mostra o progresso do carregamento (0-100%)
3. **Scroll Detection**: Detecta a posição do scroll do usuário
4. **Easing**: Aplica ease-out cubic para suavizar a animação
5. **Canvas Rendering**: Desenha o frame correto no canvas baseado no scroll
6. **Cover Mode**: Imagem sempre preenche a tela mantendo proporção

## 📱 Responsividade

O projeto é totalmente responsivo:

- **Desktop**: Layout completo com todos os elementos
- **Tablet**: Grid adaptado para 2 colunas
- **Mobile**: Layout em coluna única, botões em largura total

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
```

## 📊 Performance

- **Lazy loading** das imagens para não sobrecarregar a inicial
- **Canvas rendering** para animação sem reflow/repaint
- **CSS animations** para micro-interações
- **Componentes otimizados** com React.memo onde necessário

## 🐛 Troubleshooting

### Imagens não aparecem

- Verifique se as imagens estão em `public/images/`
- Confirme que os nomes seguem o padrão: `ezgif-frame-001.png` até `ezgif-frame-040.png`
- Abra o console do navegador para ver erros de carregamento

### Animação muito rápida ou lenta

- Ajuste o valor de `scrollHeight` no componente `HeroScrollAnimation.jsx`

### Preloader não desaparece

- Verifique se todas as 40 imagens estão presentes e nomeadas corretamente
- Abra o console e veja se há erros de carregamento

## 📞 Contato ARQOS

- **WhatsApp**: (35) 99759-8403
- **Endereço**: Rua Antônio Simão Mauad, 149, Sala 208 – Itajubá, MG
- **Horário**: 08h às 17h

## 📄 Licença

© 2026 ARQOS Arquitetura e Gestão de Obras. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para ARQOS**
