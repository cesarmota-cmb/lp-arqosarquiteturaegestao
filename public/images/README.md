# IMPORTANTE: Adicione suas imagens aqui!

Esta pasta deve conter 40 imagens PNG da animação do hero.

## Nomenclatura esperada:

```
ezgif-frame-001.png
ezgif-frame-002.png
ezgif-frame-003.png
...
ezgif-frame-040.png
```

## Recomendações:

1. **Formato**: PNG ou JPG (preferencialmente PNG para qualidade)
2. **Resolução**: Mínimo 1920x1080px para desktop
3. **Otimização**: Comprima as imagens antes de adicionar (use TinyPNG ou similar)
4. **Peso**: Tente manter cada frame com ~100-200KB para melhor performance
5. **Proporção**: Mantenha a mesma proporção em todos os frames

## Como otimizar as imagens:

### Online (mais fácil):
- https://tinypng.com (até 20 imagens por vez)
- https://squoosh.app (uma por vez, mais controle)

### Linha de comando:
```bash
# Usando ImageMagick (se instalado)
for i in *.png; do convert "$i" -quality 85 "optimized-$i"; done
```

## Verificação:

Após adicionar as imagens, verifique se:
- ✅ Todas as 40 imagens estão presentes
- ✅ Nomenclatura está correta (001, 002, ..., 040)
- ✅ Todas têm a mesma resolução
- ✅ Peso total razoável (idealmente abaixo de 10MB)

---

**Importante**: Sem as imagens, o preloader ficará travado em 0% e a animação não funcionará.
