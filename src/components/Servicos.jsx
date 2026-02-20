import './Servicos.css';

const Servicos = () => {
  const servicos = [
    {
      id: 'interiores',
      icon: '🏠',
      titulo: 'Design de Interiores',
      destaque: true,
      descricao: 'Especialmente para apartamentos. Layout inteligente, integração de ambientes, personalização total. É aqui que a maioria dos clientes começa — e descobre o valor de um projeto bem feito.',
      features: [
        'Otimização de layout e fluxo',
        'Seleção de materiais e acabamentos',
        'Projeto de marcenaria personalizada',
        'Integração de áreas sociais',
        'Visualização 3D realista'
      ]
    },
    {
      id: 'arquitetonico',
      icon: '📐',
      titulo: 'Projeto Arquitetônico',
      destaque: false,
      descricao: 'Residencial e comercial. Da concepção à aprovação na prefeitura. Funcionalidade, estética, e viabilidade técnica em cada detalhe.',
      features: [
        'Estudo de viabilidade',
        'Projeto legal (prefeitura)',
        'Projeto executivo completo',
        'Compatibilização de projetos',
        'Detalhamento técnico'
      ]
    },
    {
      id: 'gestao',
      icon: '🔧',
      titulo: 'Gestão de Obras',
      destaque: false,
      descricao: 'O grande diferencial. Acompanhamento técnico, controle de orçamento, cronograma, qualidade. Você não fica sozinho na hora de executar.',
      features: [
        'Controle de cronograma e orçamento',
        'Acompanhamento técnico semanal',
        'Gestão de fornecedores',
        'Relatórios fotográficos',
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
              
              <div className="servico-image">{servico.icon}</div>
              
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
