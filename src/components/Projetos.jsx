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
      metragem: '105m²',
      descricao: 'Esse projeto nasceu de um limite claro: o orçamento disponível. Redesenhamos a casa para que ela fosse possível, transformando restrições em linguagem. O bloco estrutural aparente, o cimento queimado e as soluções diretas deram forma a um espaço autêntico, econômico e cheio de identidade.\nUma casa onde o essencial foi valorizado, e onde morar bem se tornou viável.',
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
      metragem: '26m²',
      descricao: 'Este projeto nasceu do desafio de traduzir a identidade da marca em dois universos distintos, dentro do mesmo espaço. Criamos uma recepção mais sóbria e acolhedora, pensada para o atendimento adulto, e um setor infantil lúdico e sensível, onde as cores, as formas orgânicas e a parede em aquarela constroem uma experiência mais intuitiva. As soluções de armazenamento e o desenho dos elementos garantem funcionalidade sem perder a leveza. O resultado é um consultório que equilibra profissionalismo e afeto, respeitando as diferentes formas de acolher quem chega.',
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
      metragem: '20m²',
      descricao: 'Este projeto marcou o início da vida desse casal no primeiro apartamento. A cozinha, escolhida como o coração da casa, foi o primeiro espaço a ganhar forma. Trabalhamos a marcenaria em azul como elemento central, trazendo identidade e profundidade, em equilíbrio com tons claros e madeira natural. As soluções integradas garantem funcionalidade e leveza, respeitando a estética sóbria dos moradores. O resultado é um espaço que traduz conquista e permanência, onde a rotina começa a construir novas memórias. 💙',
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
      metragem: '26m²',
      descricao: 'Este projeto nasceu da integração de dois quartos existentes, que já não atendiam às novas demandas do hotel. Ao remover a parede entre eles, criamos uma suíte mais ampla e funcional, pensada para estadias mais longas e confortáveis. Mantivemos elementos originais e incorporamos novos usos, como a copa e o espaço de permanência, ampliando a experiência do hóspede sem descaracterizar o edifício. A iluminação indireta e os materiais escolhidos reforçam a sensação de acolhimento e qualificam o tempo de permanência dentro do quarto.',
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
