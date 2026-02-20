import { useEffect, useRef, useState } from 'react';
import './HeroScrollAnimation.css';

const HeroScrollAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [heroActive, setHeroActive] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const imagesRef = useRef([]);

  const frameCount = 40;
  const scrollHeight = 3000; // Altura de scroll para completar a animação

  // Função de easing suave (ease-out cubic)
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Preload das imagens com lazy loading
  useEffect(() => {
    const images = [];
    let loadedCount = 0;

    const preloadImages = async () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/images/ezgif-frame-${frameNumber}.webp`;

        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / frameCount) * 100));

          if (loadedCount === frameCount) {
            setImagesLoaded(true);
          }
        };

        img.onerror = () => {
          console.error(`Erro ao carregar frame ${frameNumber}`);
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
        };

        images.push(img);
      }
    };

    preloadImages();
    imagesRef.current = images;
  }, []);

  // Controla visibilidade do hero
  useEffect(() => {
    const handleHeroVisibility = () => {
      const scrollTop = window.pageYOffset;
      const fadeStart = scrollHeight - window.innerHeight - 200; // começa a sumir 200px antes do fim
      const fadeEnd = scrollHeight - window.innerHeight;

      if (scrollTop >= fadeEnd) {
        setHeroActive(false);
        setHeroOpacity(0);
      } else if (scrollTop >= fadeStart) {
        const progress = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        setHeroOpacity(1 - progress);
        setHeroActive(true);
      } else {
        setHeroActive(true);
        setHeroOpacity(1);
      }
    };

    window.addEventListener('scroll', handleHeroVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleHeroVisibility);
  }, []);

  // Animação baseada em scroll
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;

    // Configura canvas responsivo
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Função de renderização
    const render = () => {
      const scrollTop = window.pageYOffset;
      const maxScroll = container.offsetHeight - window.innerHeight;

      // Calcula progresso com easing
      const rawProgress = Math.min(scrollTop / maxScroll, 1);
      const easedProgress = easeOutCubic(rawProgress);

      // Calcula o frame atual baseado no progresso
      const frameIndex = Math.min(
        Math.floor(easedProgress * (frameCount - 1)),
        frameCount - 1
      );

      const img = imagesRef.current[frameIndex];

      if (img && img.complete) {
        // Limpa canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calcula dimensões para cover (manter proporção)
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Renderiza no scroll
    window.addEventListener('scroll', render);
    render(); // Renderiza frame inicial

    return () => {
      window.removeEventListener('scroll', render);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [imagesLoaded]);

  return (
    <div
      ref={containerRef}
      className="hero-scroll-container"
      style={{ height: `${scrollHeight}px` }}
    >
      {/* Preloader */}
      {!imagesLoaded && (
        <div className="preloader">
          <div className="preloader-content">
            <div className="logo-loader">ARQOS</div>
            <div className="loading-bar">
              <div
                className="loading-progress"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="loading-text">{loadingProgress}%</p>
          </div>
        </div>
      )}

      {/* Canvas com a animação - sempre no DOM para preservar o contexto de renderização */}
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        style={{
          opacity: heroActive ? heroOpacity : 0,
          transition: 'opacity 0.1s linear',
          pointerEvents: 'none',
        }}
      />

      {/* Conteúdo fixo do Hero */}
      {heroActive && (
        <div className="hero-content-fixed" style={{ opacity: heroOpacity, transition: 'opacity 0.1s linear' }}>
          <div className="hero-card">
            <span className="hero-badge">Itajubá e Região • Até 100km</span>
            <h1 className="hero-title">
              O lar ideal ele não se procura.<br />
              <strong>Ele se projeta.</strong>
            </h1>
            <p className="hero-subtitle">
              Projetos personalizados + gestão de obra integrada. Sem surpresas no orçamento, sem retrabalho, sem dor de cabeça.
            </p>
            <div className="hero-cta-group">
              <a
                href="https://wa.me/5535997598403?text=Olá! Gostaria de agendar uma conversa sobre meu projeto."
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar Conversa
              </a>
              <a href="#diferenciais" className="btn btn-secondary">
                Ver Como Funciona
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><span className="stat-num">100+</span><span className="stat-label">Projetos</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><span className="stat-num">12+</span><span className="stat-label">Anos</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><span className="stat-num">100km</span><span className="stat-label">Área de atuação</span></div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="scroll-indicator">
            <div className="scroll-icon">
              <div className="scroll-wheel"></div>
            </div>
            <span>Role para explorar</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroScrollAnimation;
