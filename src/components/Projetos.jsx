import { useState, useRef } from 'react';
import './Projetos.css';

const Projetos = () => {
  const [activeProject, setActiveProject] = useState(null);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 432; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const projetos = [
    {
      id: 'casa-bloco',
      tipo: 'Residencial',
      titulo: 'Casa Bloco',
      localizacao: 'Itajubá',
      metragem: '250m²',
      descricao: 'Arquitetura contemporânea com foco em volumetria e integração com o entorno. Espaços amplos e luz natural estratégica.',
      image: '/images/projects/casa-bloco/FOTO-36.webp',
      gallery: [
        '/images/projects/casa-bloco/FOTO-4.webp',
        '/images/projects/casa-bloco/FOTO-7.webp',
        '/images/projects/casa-bloco/FOTO-13.webp',
        '/images/projects/casa-bloco/FOTO-14.webp',
        '/images/projects/casa-bloco/FOTO-32.webp',
        '/images/projects/casa-bloco/FOTO-38.webp',
        '/images/projects/casa-bloco/FOTO-40.webp'
      ]
    },
    {
      id: 'consultorio-fono',
      tipo: 'Saúde / Comercial',
      titulo: 'Consultório Fono',
      localizacao: 'Itajubá',
      metragem: '45m²',
      descricao: 'Design voltado para o bem-estar e acolhimento. Cores suaves e mobiliário ergonômico para um ambiente profissional e humano.',
      image: '/images/projects/consultorio-fono/FOTO-32.webp',
      gallery: [
        '/images/projects/consultorio-fono/FOTO-11.webp',
        '/images/projects/consultorio-fono/FOTO-17.webp',
        '/images/projects/consultorio-fono/FOTO-19.webp',
        '/images/projects/consultorio-fono/FOTO-28.webp'
      ]
    },
    {
      id: 'cozinha',
      tipo: 'Interiores',
      titulo: 'Cozinha Integrada',
      localizacao: 'Itajubá',
      metragem: '30m²',
      descricao: 'Reforma de cozinha com integração total, marcenaria funcional e acabamentos de alto padrão.',
      image: '/images/projects/cozinha/FOTO-14.webp',
      gallery: [
        '/images/projects/cozinha/FOTO-13.webp',
        '/images/projects/cozinha/FOTO-15.webp',
        '/images/projects/cozinha/FOTO-16.webp',
        '/images/projects/cozinha/FOTO-17.webp',
        '/images/projects/cozinha/FOTO-23.webp'
      ]
    },
    {
      id: 'hotel-amantikyr',
      tipo: 'Comercial / Luxo',
      titulo: 'Hotel Amantikyr',
      localizacao: 'Serra da Mantiqueira',
      metragem: '1800m²',
      descricao: 'Complexo hoteleiro de luxo. Design sofisticado que respeita a natureza e oferece experiência única aos hóspedes.',
      image: '/images/projects/hotel-amantikyr/FOTO-9.webp',
      gallery: [
        '/images/projects/hotel-amantikyr/FOTO-4.webp',
        '/images/projects/hotel-amantikyr/FOTO-7.webp',
        '/images/projects/hotel-amantikyr/FOTO-8.webp',
        '/images/projects/hotel-amantikyr/FOTO-12.webp'
      ]
    }
  ];

  return (
    <section className="projetos section-padding" id="projetos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projetos que transformam espaços</h2>
          <p className="section-description">
            Cada projeto conta uma história. Do "não aguento mais isso" ao "é exatamente o que eu queria".
          </p>
        </div>

        <div className="projetos-carousel-container">
          <button className="carousel-nav prev" onClick={() => scroll('left')} aria-label="Anterior">❮</button>

          <div className="projetos-carousel" ref={carouselRef}>
            {projetos.map((projeto, index) => (
              <div
                key={projeto.id}
                className="projeto-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveProject(projeto)}
              >
                <div className="projeto-image">
                  <img src={projeto.image} alt={projeto.titulo} />
                  <span className="projeto-badge">{projeto.tipo}</span>
                  <div className="projeto-overlay">
                    <span>Ver Detalhes</span>
                  </div>
                </div>

                <div className="projeto-content">
                  <h3>{projeto.titulo}</h3>
                  <p className="projeto-meta">{projeto.localizacao} • {projeto.metragem}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={() => scroll('right')} aria-label="Próximo">❯</button>

          <div className="carousel-hint">Arraste para o lado ou use as setas ➔</div>
        </div>

        <div className="portfolio-cta">
          <a
            href="https://www.behance.net/ellosengenha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver Portfólio Completo
          </a>
        </div>
      </div>

      {activeProject && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>&times;</button>
            <div className="modal-header">
              <h2>{activeProject.titulo}</h2>
              <p>{activeProject.tipo} • {activeProject.localizacao} • {activeProject.metragem}</p>
            </div>
            <div className="modal-body">
              <p>{activeProject.descricao}</p>
              <div className="modal-gallery">
                {activeProject.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${activeProject.titulo} - ${i + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none'; // Esconde se a imagem ainda não existir
                    }}
                  />
                ))}
              </div>
              <div className="modal-hint">Mais imagens disponíveis em breve</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
