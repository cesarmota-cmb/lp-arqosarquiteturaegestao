import './Diferenciais.css';

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: '🏗️',
      title: 'Arquitetura + Gestão',
      description: 'A união das duas frentes reduz risco e aumenta previsibilidade. Quem projeta acompanha a obra — sem "telefone sem fio", sem surpresas.'
    },
    {
      icon: '💰',
      title: 'Controle de Orçamento',
      description: 'Sabemos onde gastar e onde economizar. Mesa personalizada mais barata que vitrine, escolha de materiais com leitura de custo-benefício real.'
    },
    {
      icon: '👁️',
      title: '3D no Pré-Projeto',
      description: 'Você vê antes de executar. Aprova com segurança, reduz retrabalho, e evita o "não era isso que eu imaginava" que todo mundo tem medo.'
    },
    {
      icon: '✨',
      title: 'Luxo Invisível',
      description: 'Não gritamos ostentação. Entregamos soluções sofisticadas que só quem entende percebe — e isso atrai exatamente o público com mais repertório.'
    }
  ];

  return (
    <section className="diferenciais section-padding" id="diferenciais">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Por que escolher a ARQOS</span>
          <h2 className="section-title">O que nos torna diferentes</h2>
          <p className="section-description">
            Não é só fazer bonito. É fazer certo, com controle, transparência e um processo que você entende do começo ao fim.
          </p>
        </div>

        <div className="diferenciais-grid">
          {diferenciais.map((item, index) => (
            <div key={index} className="diferencial-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="diferencial-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
