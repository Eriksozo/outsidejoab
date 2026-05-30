const BONUSES = [
  {
    num: "01",
    title: "Aulão Máquina De Padrões Melódicos",
    desc: "Você vai sair daquele shape quadrado e sem graça e desenvolver digitações de escalas fora do padrão que vão te destacar na hora da tocada.",
  },
  {
    num: "02",
    title: "Ferramentas De Linguagem",
    desc: "Sabe aquelas frases cantadas? É isso mesmo! Você vai desenvolver uma linguagem totalmente musical e agradável aos ouvidos.",
  },
  {
    num: "03",
    title: "Comunidade JP Grátis",
    desc: "Acesso vitalício aos materiais de estudo que entrego nas minhas mentorias, alimentados há mais de 1 ano para meus alunos VIPs — sem pagar nada por isso.",
  },
];

export default function Bonus() {
  return (
    <section className="section">
      <div className="container--wide">
        <div className="section-header reveal">
          <span className="eyebrow">Exclusivo desta página</span>
          <h2 className="display display--lg">
            Você ainda leva <span className="accent">3 bônus exclusivos</span>
          </h2>
        </div>
        <div className="grid-cards-3 reveal">
          {BONUSES.map((b) => (
            <div className="bonus-card" key={b.num}>
              <span className="bonus-tag">Bônus {b.num}</span>
              <h3>{b.title}</h3>
              <p className="body-sm">{b.desc}</p>
              <div className="bonus-price">
                <span className="from">R$97,00</span> <span className="badge badge--green">Vai de graça!</span>
              </div>
              <span className="bonus-bg-number">{b.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
