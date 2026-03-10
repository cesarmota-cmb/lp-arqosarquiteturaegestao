import './ProvaSocial.css';

const ProvaSocial = () => {
  const casos = [
    {
      id: 'orcamento',
      titulo: '“Arquitetura viável, sem abrir mão da identidade.”',
      desafio: 'A cliente possuía um projeto com custo de execução estimado em R$ 1,5 milhão, valor que inviabilizava a obra dentro do seu orçamento real.',
      solucao: 'Reiniciamos o processo focando no planejamento financeiro, utilizando blocos estruturais aparentes e acabamentos essenciais para reduzir custos sem perder a estética.',
      resultado: 'A obra foi concluída com total segurança financeira, entregando uma casa funcional, personalizada e rigorosamente dentro do teto orçamentário previsto.',
      depoimento: {
        texto: 'Nossa experiência foi totalmente satisfatória quanto à qualidade, eficiência e prazos. Soluções criativas e funcionais que atenderam nossas necessidades com transparência.',
        autor: 'Lucia Garrido Rios'
      }
    },
    {
      id: 'visualizacao',
      titulo: '"O primeiro lar começa quando o projeto traduz exatamente quem você é.”',
      desafio: 'Um casal jovem buscava transformar o sonho da primeira casa em um projeto real, com o medo comum de que o resultado final não traduzisse sua personalidade.',
      solucao: 'Através de uma escuta sensível, transformamos ideias abstratas em soluções técnicas detalhadas, guiando cada decisão para garantir segurança total ao casal.',
      resultado: 'Um projeto autoral e funcional que gerou a confiança necessária para o início da construção, superando as expectativas estéticas e emocionais.',
      depoimento: {
        texto: 'A Ana conseguiu traduzir nossos sonhos e ideias. Sempre muito atenciosa e cuidadosa aos detalhes. Nosso projeto ficou incrível!',
        autor: 'Luana Osório Faria'
      }
    },
    {
      id: 'gestao',
      titulo: '"Planejamos por etapas, mas com uma visão inteira do lar.”',
      desafio: 'O casal precisava conciliar as exigências de financiamento da Caixa com o sonho de uma casa completa, exigindo um planejamento que permitisse construir por etapas sem perder a unidade visual.',
      solucao: 'Planejamos uma execução inteligente em duas fases: a primeira totalmente adequada ao crédito aprovado e a segunda já projetada para garantir continuidade estética e funcional no futuro.',
      resultado: 'Segurança financeira absoluta e clareza total dos próximos passos, permitindo que a família já desfrute de um lar que está pronto para crescer com eles.',
      depoimento: {
        texto: 'A ARQOS deu vida ao nosso lar e aos nossos sonhos. Mesmo no caos de uma obra, a experiência foi incrível com uma equipe comprometida, responsável e dedicada a cada detalhe.',
        autor: 'Mariana Carneiro'
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
