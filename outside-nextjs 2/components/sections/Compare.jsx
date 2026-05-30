export default function Compare() {
  return (
    <section className="section section--surface">
      <div className="container--wide">
        <div className="compare-grid reveal">
          <div className="card">
            <h3 className="display display--md" style={{ marginBottom: "var(--space-5)" }}>
              Sem a Masterclass você vai...
            </h3>
            <ul className="cross-list">
              <li>
                <span>
                  <strong>Continuar preso no básico</strong>, sem conseguir sair do mesmo padrão de frases previsíveis.
                </span>
              </li>
              <li>
                <span>
                  Tentar tocar outside, mas acabar <strong>soando perdido</strong>, sem entender como resolver a tensão.
                </span>
              </li>
              <li>
                <span>
                  <strong>Passar horas estudando</strong> teoria sem conseguir aplicá-la de forma musical e natural.
                </span>
              </li>
              <li>
                <span>
                  Sentir que seus improvisos <strong>não impressionam</strong>, enquanto outros baixistas se destacam.
                </span>
              </li>
            </ul>
          </div>
          <div className="card card--highlight">
            <h3 className="display display--md" style={{ marginBottom: "var(--space-5)" }}>
              Com a Masterclass você vai...
            </h3>
            <ul className="check-list">
              <li>
                <span>
                  Aprender a <strong>improvisar com confiança</strong>, criando frases outside que realmente fazem
                  sentido.
                </span>
              </li>
              <li>
                <span>
                  <strong>Dominar as técnicas que os grandes baixistas</strong> usam para soar único e impressionar
                  qualquer plateia.
                </span>
              </li>
              <li>
                <span>
                  Transformar sua forma de tocar, adicionando tensão e resolução <strong>sem medo de errar</strong>.
                </span>
              </li>
              <li>
                <span>
                  Criar um vocabulário outside sólido, <strong>sem precisar decorar mil escalas</strong> ou padrões
                  complexos.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "var(--space-8)" }}>
          <a href="#oferta" className="btn btn--cta">▶ QUERO DOMINAR AS TÉCNICAS!</a>
        </div>
      </div>
    </section>
  );
}
