import WistiaPlayer from "@/components/WistiaPlayer";

const FUNDAMENTALS = [
  { num: "01", icon: "🎯", title: "Pontos de Resolução", body: ["O outside precisa ", "voltar para casa", " de forma natural."] },
  { num: "02", icon: "🧭", title: "Movimento Direcionado", body: ['Não é sobre tocar notas "erradas", mas criar ', "tensão controlada", "."] },
  { num: "03", icon: "⚡", title: "Fórmulas Testadas", body: ["Atalhos e padrões que fazem o outside soar ", "profissional desde o 1º dia", "."] },
];

export default function Story() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">A virada de chave</span>
          <h2 className="display display--xl">
            Técnicas testadas para improvisar <span className="accent">fora da escala sem medo</span>
          </h2>
        </div>

        <div className="media-frame reveal" style={{ marginBottom: "var(--space-8)" }}>
          <img
            data-parallax="0.12"
            src="https://fabricadefrasesinfinitas.com/wp-content/uploads/2025/03/MOCKUP-Masterclass-Outside-scaled.webp"
            alt="Mockup Masterclass Outside"
          />
        </div>

        <p className="body-lg reveal" style={{ marginBottom: "var(--space-8)" }}>
          Você já percebeu como alguns baixistas <strong>soam previsíveis</strong> enquanto outros parecem quebrar
          todas as regras e <strong>criar linhas que hipnotizam</strong> qualquer ouvinte?
          <br /><br />
          Eu também passei por isso. Durante anos, me limitava ao que era "seguro", sem me arriscar além da escala.
          Achava que pra tocar outside eu <strong>precisava de um dom natural</strong> ou passar décadas estudando
          teoria complexa. Até que um dia, vi um baixista improvisando sem medo e sem depender das mesmas frases
          batidas. Fiquei obcecado: como ele fazia aquilo soar tão bem?
          <br /><br />
          Depois de muita pesquisa, estudo e prática, descobri que o segredo do outside não estava na sorte, mas em
          um conjunto de estratégias que poucos dominam.
        </p>

        <div className="video-vert media-frame reveal" style={{ marginBottom: "var(--space-8)" }}>
          <WistiaPlayer mediaId="guo9ynj79n" aspect="0.5625" />
        </div>

        <p className="body-lg text-center reveal" style={{ maxWidth: 640, margin: "0 auto var(--space-6)" }}>
          A verdade é que tocar outside não é só sair da tonalidade e torcer para soar bem. O que os grandes mestres
          fazem é entender <strong>três fundamentos essenciais:</strong>
        </p>

        <div className="grid-cards-3 reveal" style={{ marginBottom: "var(--space-8)" }}>
          {FUNDAMENTALS.map((f) => (
            <div className="curriculum-card" data-num={f.num} key={f.num}>
              <div className="curriculum-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p className="body-sm">
                {f.body[0]}
                <strong>{f.body[1]}</strong>
                {f.body[2]}
              </p>
            </div>
          ))}
        </div>

        <p
          className="body-lg text-center reveal"
          style={{ maxWidth: 640, margin: "0 auto var(--space-8)", color: "var(--color-text-mid)" }}
        >
          Foi assim que nasceu a <strong>Masterclass Outside Sem Segredos</strong> – um AULÃO 100% direto ao ponto,
          onde eu te ensino exatamente como aplicar o outside de forma segura e musical,{" "}
          <strong>sem precisar decorar milhares de escalas ou estudar anos de teoria.</strong> Mesmo que você nunca
          tenha tocado uma nota outside na vida, o método te guia do{" "}
          <span className="pitch-highlight">ZERO AO AVANÇADO</span>.
        </p>

        <div className="text-center">
          <a href="#oferta" className="btn btn--cta">▶ QUERO ACESSAR AGORA!</a>
        </div>
      </div>
    </section>
  );
}
