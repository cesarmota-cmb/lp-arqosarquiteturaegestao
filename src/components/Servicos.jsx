import './Servicos.css';

const Servicos = () => {
  const servicos = [
    {
      id: 'arquitetonico',
      image: '/images/projeto-arquitetonico.jpg',
      titulo: 'Projeto Arquitetônico',
      destaque: false,
      descricao: 'Residencial e comercial. Da concepção à aprovação na prefeitura. Funcionalidade, estética, e viabilidade técnica em cada detalhe.',
      features: [
        'Estudo de viabilidade',
        'Projeto legal (prefeitura)',
        'Projeto executivo completo',
        'Compatibilização de projetos',
        'Detalhamento técnico',
        'Soluções criativas, a partir de estudo topográfico, solar...'
      ]
    },
    {
      id: 'interiores',
      image: '/images/design-de-interiores.jpg',
      titulo: 'Design de Interiores',
      destaque: true,
      descricao: 'Sua casa merece um layout inteligente e bonito! Integre seus ambientes, personalize com o seu jeito e adaptado para a sua rotina. É aqui que a maioria dos clientes começam, e descobrem o valor que tem um projeto bem feito.',
      features: [
        'Otimização de layout e fluxo',
        'Seleção de materiais e acabamentos',
        'Projeto de marcenaria personalizada',
        'Visualização 3D realista'
      ]
    },
    {
      id: 'gestao',
      image: '/images/gestao-de-obras.png',
      titulo: 'Gestão de Obras',
      destaque: false,
      descricao: 'O grande diferencial. Acompanhamento técnico, controle de orçamento, cronograma, qualidade. Você não fica sozinho na hora de executar.',
      features: [
        'Controle de cronograma e orçamento',
        'Acompanhamento técnico semanal',
        'Gestão de fornecedores',
        'Trello, diário de obra via aplicativo (acompanhe o andamento da obra de onde você estiver)',
        'Segurança e qualidade garantidas'
      ]
    }
  ];

  return (
    <section className="servicos section-padding" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Soluções Completas</span>
          <h2 className="section-title">Arquitetura e Gestão de Obras</h2>
        </div>

        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div
              key={servico.id}
              className={`servico-card ${servico.destaque ? 'featured' : ''} fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {servico.destaque && <div className="servico-badge">MAIS PROCURADO</div>}

              <div className="servico-image">
                <img src={servico.image} alt={servico.titulo} />
              </div>

              <div className="servico-content">
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>

                <ul className="servico-features">
                  {servico.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
