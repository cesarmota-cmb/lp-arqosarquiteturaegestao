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
            <img src="/yuri-ana.jpg" alt="Ana Paula e Yuri — Arqos Arquitetura" className="sobre-foto" />
          </div>

          <div className="sobre-text">
            <h3>Quem Somos</h3>
            <p>
              A ARQOS nasceu da união de dois olhares: arquitetura e engenharia. Ana Paula traz a sensibilidade do design, a escuta do cliente, e a visão estética. Yuri traz a viabilidade técnica, o controle de execução, e a gestão de obra.
            </p>
            <p>
              O resultado? Projetos que são bonitos e funcionais. Obras que são entregues e dentro da expectativa. Clientes que veem o que será construído antes de aprovar, e segurança durante a execução.
            </p>
            <p>
              Atendemos Itajubá e região com uma proposta rara no mercado: arquitetura + gestão de obra. Podendo projetar e acompanhar até o fim.
            </p>
            <div className="sobre-logo">
              <img src="/logo-azul-e-marrom.png" alt="ARQOS Logo — Arquitetura + Engenharia" className="brand-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
