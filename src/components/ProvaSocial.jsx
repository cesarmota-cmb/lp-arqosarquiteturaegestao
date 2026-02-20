import './ProvaSocial.css';

const ProvaSocial = () => {
  const casos = [
    {
      id: 'orcamento',
      titulo: '"Controlamos o orçamento sem perder qualidade"',
      desafio: 'Cliente com medo de estourar orçamento na reforma do apartamento.',
      solucao: 'Orçamento detalhado por ambiente, escolha estratégica de materiais (investir onde vale, economizar sem perder qualidade), acompanhamento semanal da obra.',
      resultado: 'Obra entregue dentro do orçamento combinado, com acabamento superior ao esperado.',
      depoimento: {
        texto: 'A ARQOS me mostrou onde gastar e onde economizar. Consegui ter a casa que eu queria sem aquele medo de "vai estourar tudo". Valeu cada centavo.',
        autor: 'Juliana M., professora'
      }
    },
    {
      id: 'visualizacao',
      titulo: '"Visualizamos tudo antes de começar"',
      desafio: 'Casal inseguro com layout e integração de cozinha + sala.',
      solucao: 'Pré-projeto em 3D apresentado na primeira reunião. Cliente viu exatamente como ficaria, aprovou rápido, e obra começou sem dúvidas.',
      resultado: 'Zero retrabalho, cliente satisfeito antes mesmo da entrega.',
      depoimento: {
        texto: 'Ver o 3D antes mudou tudo. Eu tinha medo de não gostar depois de pronto. Com a ARQOS, eu já sabia que ia ficar perfeito.',
        autor: 'Roberto e Ana, casal de TI'
      }
    },
    {
      id: 'gestao',
      titulo: '"Obra sem dor de cabeça"',
      desafio: 'Cliente já tinha passado por obra problemática (atraso, estouro, falta de comunicação).',
      solucao: 'Gestão de obra integrada ao projeto. Relatórios semanais, controle de cronograma, alinhamento constante, transparência total.',
      resultado: 'Obra entregue no prazo, sem surpresas, e cliente virou case de indicação.',
      depoimento: {
        texto: 'Depois da experiência ruim que tive antes, estava com medo. A ARQOS me passou segurança do início ao fim. Recebi relatório toda semana, sabia exatamente o que estava acontecendo. Sem estresse.',
        autor: 'Marcelo L., empresário'
      }
    }
  ];

  return (
    <section className="prova-social section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Casos Reais</span>
          <h2 className="section-title">O que nossos clientes conquistaram</h2>
          <p className="section-description">
            Não é só sobre estética. É sobre segurança, previsibilidade, e viver bem no seu espaço.
          </p>
        </div>

        <div className="casos-grid">
          {casos.map((caso, index) => (
            <div 
              key={caso.id} 
              className="caso-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="caso-titulo">{caso.titulo}</h3>
              
              <div className="caso-descricao">
                <p><strong>Desafio:</strong> {caso.desafio}</p>
                <p><strong>Solução ARQOS:</strong> {caso.solucao}</p>
                <p><strong>Resultado:</strong> {caso.resultado}</p>
              </div>

              <div className="depoimento">
                <p>"{caso.depoimento.texto}"</p>
                <p className="depoimento-autor">— {caso.depoimento.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
