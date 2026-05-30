export default function Summary() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Direto ao ponto</span>
          <h2 className="display display--lg">
            Resumo da <span className="accent">ópera</span>
          </h2>
        </div>
        <p className="body-lg text-center reveal" style={{ maxWidth: 640, margin: "0 auto var(--space-6)" }}>
          Caso você seja uma daquelas pessoas (como eu) que pula para o final, aqui vai o resumo direto ao ponto: o que
          estou te propondo é ter acesso a um <strong>método comprovado para tocar outside</strong> com confiança,
          criando frases marcantes sem soar perdido – tudo de forma prática,{" "}
          <strong>sem enrolação e com resultados rápidos.</strong>
        </p>
        <div className="text-center reveal" style={{ marginBottom: "var(--space-10)" }}>
          <a href="#oferta" className="btn btn--cta">▶ QUERO DOMINAR AS TÉCNICAS!</a>
        </div>

        <div className="card card--highlight reveal" style={{ maxWidth: 680, margin: "0 auto" }}>
          <ul className="check-list">
            <li>
              <span>
                <strong>Você não precisa</strong> dominar todas as escalas do mundo – os melhores baixistas tocam{" "}
                <em>menos</em> notas, mas do jeito certo.
              </span>
            </li>
            <li>
              <span>
                <strong>Você não precisa</strong> entender teoria avançada – muitos músicos que soam incríveis não
                sabem nem ler partitura.
              </span>
            </li>
            <li>
              <span>
                <strong>Você não precisa</strong> ser um gênio do jazz – os truques certos fazem qualquer baixista
                soar profissional.
              </span>
            </li>
            <li>
              <span>
                <strong>Você não precisa</strong> tocar notas aleatórias para criar tensão – isso só faz você soar
                perdido, e não ousado.
              </span>
            </li>
            <li>
              <span>
                E você ainda pode <strong>testar tudo por 7 dias.</strong> Se não gostar, devolvo o seu investimento.
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center reveal" style={{ marginTop: "var(--space-8)" }}>
          <a href="#oferta" className="btn btn--cta btn--cta--pulse">▶ SIM! QUERO ACESSAR AGORA</a>
        </div>
      </div>
    </section>
  );
}
