import './ComoFunciona.css';

const ComoFunciona = () => {
  const etapas = [
    {
      numero: '1',
      titulo: 'Primeira Conversa',
      descricao: 'Entendemos seu projeto, suas necessidades, e o que você realmente quer viver no seu espaço. Escuta ativa, sem pressa.'
    },
    {
      numero: '2',
      titulo: 'Levantamento',
      descricao: 'Coletamos dados técnicos, planta, contexto do imóvel, e alinhamos expectativas de investimento e prazos.'
    },
    {
      numero: '3',
      titulo: 'Pré-Projeto com 3D',
      descricao: 'Aqui a mágica acontece: você visualiza a solução antes de aprovar. Reduz erro, aumenta segurança, e você já sai sabendo como vai ficar.'
    },
    {
      numero: '4',
      titulo: 'Projeto Executivo',
      descricao: 'Detalhamento técnico completo, plantas, cortes, elevações, especificações de materiais. Tudo pronto para executar sem improvisos.'
    },
    {
      numero: '5',
      titulo: 'Gestão de Obra',
      descricao: 'Acompanhamento até a entrega. Controle de cronograma, orçamento, qualidade. Você recebe relatórios e sabe exatamente o que está acontecendo.'
    }
  ];

  return (
    <section className="como-funciona section-padding" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Processo Transparente</span>
          <h2 className="section-title">Como funciona do começo ao fim</h2>
          <p className="section-description">
            Etapas claras, alinhamento visual cedo, e você no controle de cada decisão.
          </p>
        </div>

        <div className="processo-timeline">
          {etapas.map((etapa, index) => (
            <div key={index} className="processo-step fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="processo-number">{etapa.numero}</div>
              <div className="processo-content">
                <h3>{etapa.titulo}</h3>
                <p>{etapa.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
