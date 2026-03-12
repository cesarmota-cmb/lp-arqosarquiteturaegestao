import './ProvaSocial.css';

const ProvaSocial = ({ onOpenModal }) => {
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

        <div className="section-cta fade-in-up" style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            onClick={() => onOpenModal('casos-reais')}
            className="btn btn-primary"
            id="btn-whatsapp-casos"
            data-gtm="whatsapp-button"
            data-section="casos-reais"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Solicite Seu Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
