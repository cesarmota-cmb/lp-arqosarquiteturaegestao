import './Projetos.css';

const Projetos = () => {
  const projetos = [
    {
      id: 'apt-integrado',
      tipo: 'Design de Interiores',
      titulo: 'Apartamento Integrado',
      localizacao: 'Itajubá',
      metragem: '85m²',
      descricao: 'Integração total de cozinha e sala, marcenaria sob medida, e área gourmet que se tornou o coração da casa. Cliente saiu do "padrão construtora" para um espaço com identidade própria.',
      cor: 'linear-gradient(135deg, #996B5C, #9C6D4C)'
    },
    {
      id: 'casa-office',
      tipo: 'Projeto + Gestão',
      titulo: 'Casa Home Office',
      localizacao: 'Região',
      metragem: '120m²',
      descricao: 'Casal de TI precisava de espaço funcional para trabalho + vida pessoal. Criamos dois escritórios integrados, iluminação natural estratégica, e controle total de orçamento na execução.',
      cor: 'linear-gradient(135deg, #414C50, #643E31)'
    },
    {
      id: 'renovacao',
      tipo: 'Reforma Completa',
      titulo: 'Renovação Total',
      localizacao: 'Itajubá',
      metragem: '95m²',
      descricao: 'De "casa antiga dos anos 90" para um espaço moderno, acolhedor, e funcional. Layout repensado, materiais inteligentes, obra entregue no prazo e dentro do orçamento combinado.',
      cor: 'linear-gradient(135deg, #B69676, #9C6D4C)'
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

        <div className="projetos-grid">
          {projetos.map((projeto, index) => (
            <div 
              key={projeto.id} 
              className="projeto-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projeto-image" style={{ background: projeto.cor }}>
                <span className="projeto-badge">{projeto.tipo}</span>
              </div>
              
              <div className="projeto-content">
                <h3>{projeto.titulo}</h3>
                <p className="projeto-meta">{projeto.localizacao} • {projeto.metragem}</p>
                <p>{projeto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
