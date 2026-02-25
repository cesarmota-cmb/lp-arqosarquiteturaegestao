import { useState } from 'react';
import './Projetos.css';

const Projetos = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projetos = [
    {
      id: 'apt-integrado',
      tipo: 'Design de Interiores',
      titulo: 'Apartamento Integrado',
      localizacao: 'Itajubá',
      metragem: '85m²',
      descricao: 'Integração total de cozinha e sala, marcenaria sob medida, e área gourmet que se tornou o coração da casa.',
      image: '/images/design-de-interiores.jpg', // Placeholder principal atualizado
      gallery: ['/images/projects/apt-integrado/img1.jpg'] // Base para o usuário subir
    },
    {
      id: 'casa-office',
      tipo: 'Projeto + Gestão',
      titulo: 'Casa Home Office',
      localizacao: 'Região',
      metragem: '120m²',
      descricao: 'Casal de TI precisava de espaço funcional para trabalho + vida pessoal. Criamos dois escritórios integrados.',
      image: '/images/projeto-arquitetonico.jpg',
      gallery: ['/images/projects/casa-office/img1.jpg']
    },
    {
      id: 'renovacao',
      tipo: 'Reforma Completa',
      titulo: 'Renovação Total',
      localizacao: 'Itajubá',
      metragem: '95m²',
      descricao: 'De "casa antiga dos anos 90" para um espaço moderno, acolhedor, e funcional. Obra entregue no prazo.',
      image: '/images/gestao-de-obras.png',
      gallery: ['/images/projects/renovacao/img1.jpg']
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
          <div className="projetos-carousel">
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
          <div className="carousel-hint">Arraste para o lado ➔</div>
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
