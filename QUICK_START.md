# 🚀 Guia Rápido - ARQOS Landing Page

## ⚡ Início Rápido (3 passos)

### 1️⃣ Instalar dependências
```bash
cd arqos-landing
npm install
```

### 2️⃣ Adicionar suas 40 imagens
Coloque os arquivos `ezgif-frame-001.png` até `ezgif-frame-040.png` em:
```
public/images/
```

### 3️⃣ Rodar o projeto
```bash
npm run dev
```

Abra: **http://localhost:3000** 🎉

---

## 📋 Checklist Pré-Launch

- [ ] Todas as 40 imagens estão em `public/images/`
- [ ] Imagens seguem nomenclatura: `ezgif-frame-001.png` ... `040.png`
- [ ] WhatsApp configurado: (35) 99759-8403
- [ ] Testado em desktop e mobile
- [ ] Performance verificada (carregamento rápido)

---

## 🎨 Ajustes Rápidos

### Velocidade da animação
`src/components/HeroScrollAnimation.jsx` (linha 13):
```javascript
const scrollHeight = 3000; // Diminua = mais rápido | Aumente = mais lento
```

### Cores do site
`src/styles/global.css`:
```css
--primary: #8B7355;  /* Sua cor principal */
```

### WhatsApp
Substitua em todos os arquivos que contêm:
```
5535997598403
```

---

## 🏗️ Build de Produção

```bash
npm run build
```

Arquivos otimizados estarão em: `dist/`

---

## 📞 Precisa de ajuda?

- Leia o `README.md` completo
- Veja troubleshooting no README
- Abra o console do navegador (F12) para ver erros

**Boa sorte! 🚀**
