import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <img src="/LOGOTIPOVERTICAL10.PNG" alt="Arqos Arquitetura" className="footer-logo-img" />
            <p style={{ marginBottom: '16px' }}>Arquitetura e Gestão de Obras</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              Itajubá e região<br />
              Segunda a Sexta das 08h às 17h<br />
              WhatsApp: (35) 99759-8403
            </p>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#diferenciais">Design de Interiores</a></li>
              <li><a href="#diferenciais">Projeto Arquitetônico</a></li>
              <li><a href="#diferenciais">Gestão de Obras</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Endereço</h4>
            <a
              href="https://maps.app.goo.gl/K4EK6Y6dZ8KRWDyi9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-link"
            >
              Rua Antônio Simão Mauad, 149<br />
              Sala 208 — Itajubá, MG
            </a>
            <div style={{ marginTop: '20px' }}>
              <h4>Formas de Pagamento</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
                Pix • Boleto<br />
                Pix Parcelado • Cartão
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ARQOS Arquitetura e Gestão de Obras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
