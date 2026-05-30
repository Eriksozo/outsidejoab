export default function Learn() {
  return (
    <section className="section section--surface">
      <div className="container--wide">
        <div className="split-grid">
          <div className="media-frame reveal">
            <img
              src="https://fabricadefrasesinfinitas.com/wp-content/uploads/2025/03/MOCKUP-Masterclass-Outside-scaled.webp"
              alt="Mockup Masterclass Outside"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
              Conteúdo
            </span>
            <h2 className="display display--lg" style={{ marginBottom: "var(--space-5)" }}>
              O que você vai aprender na <span className="accent">Masterclass Outside</span>
            </h2>
            <ul className="check-list" style={{ marginBottom: "var(--space-6)" }}>
              <li>
                <span>
                  Os atalhos para tocar outside de forma segura e musical,{" "}
                  <strong>SEM precisar decorar milhares de escalas</strong> ou estudar teoria por anos.
                </span>
              </li>
              <li>
                <span>
                  Os padrões que <strong>baixistas de elite</strong> usam para improvisar sem medo.
                </span>
              </li>
              <li>
                <span>
                  Como criar tensão e resolução como um profissional, <strong>sem parecer aleatório</strong>.
                </span>
              </li>
            </ul>
            <a href="#oferta" className="btn btn--cta">▶ QUERO DESTRAVAR AGORA!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
