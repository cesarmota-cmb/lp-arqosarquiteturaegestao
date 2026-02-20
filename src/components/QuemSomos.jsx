import './QuemSomos.css';

const QuemSomos = () => {
  return (
    <section className="quem-somos section-padding" id="quem-somos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Conheça a ARQOS</span>
          <h2 className="section-title">Arquitetura e engenharia trabalhando juntos</h2>
        </div>

        <div className="sobre-content">
          <div className="sobre-image">
            {/* Aqui vai a foto da Ana Paula + Yuri */}
            <div className="image-placeholder">
              <span>Ana Paula + Yuri</span>
            </div>
          </div>

          <div className="sobre-text">
            <h3>Ana Paula + Yuri</h3>
            <p>
              A ARQOS nasceu da união de dois olhares: arquitetura e engenharia. Ana Paula traz a sensibilidade do design, a escuta do cliente, e a visão estética. Yuri traz a viabilidade técnica, o controle de execução, e a gestão de obra.
            </p>
            <p>
              O resultado? Projetos que são bonitos <em>e</em> funcionam. Obras que são entregues <em>e</em> não dão problema. Clientes que veem valor antes de aprovar, e segurança durante a execução.
            </p>
            <p>
              Atendemos Itajubá e região (até 100km) com uma proposta rara no mercado: arquitetura + gestão de obra no mesmo pacote. Porque quem projeta deveria acompanhar até o fim.
            </p>
            <span className="equipe-tag">👷‍♀️ Arquitetura + Engenharia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
