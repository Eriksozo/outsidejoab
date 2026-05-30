const KIWIFY_URL = "https://pay.kiwify.com.br/Z3dsYJZ";

const STACK = [
  { label: "Masterclass Outside Sem Segredos", sub: "Acesso imediato", value: "R$197" },
  { label: "Bônus 1 · Máquina de Padrões Melódicos", sub: "Aulão completo", value: "R$97" },
  { label: "Bônus 2 · Ferramentas de Linguagem", sub: "Frases cantadas", value: "R$97" },
  { label: "Bônus 3 · Comunidade JP", sub: "Acesso vitalício", value: "R$97" },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function Offer() {
  return (
    <section className="section section--orbs" id="oferta" data-screen-label="Oferta">
      <div className="fx-orb fx-orb--a" aria-hidden="true"></div>
      <div className="fx-orb fx-orb--b" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Acesso imediato</span>
          <h2 className="display display--lg">
            Veja tudo o que você leva <span className="accent">hoje</span>
          </h2>
          <p>
            A <strong>Masterclass Outside Sem Segredos</strong> é um aulão completo, com acesso imediato — sem
            enrolação, sem teoria inútil, apenas o que realmente funciona.
          </p>
        </div>

        <div className="offer-box reveal">
          <div className="offer-urgency">
            <span className="pulse-dot"></span> Oferta exclusiva desta página
          </div>

          <img
            className="offer-mockup"
            src="https://fabricadefrasesinfinitas.com/wp-content/uploads/2025/03/MOCKUP-Masterclass-Outside-scaled.webp"
            alt="Kit Completo Masterclass Outside"
          />
          <h2 className="display display--xl" style={{ marginBottom: "var(--space-2)" }}>
            Kit Completo
          </h2>

          <ul className="value-stack">
            {STACK.map((s) => (
              <li key={s.label}>
                <span className="vs-icon">✓</span>
                <span className="vs-label">
                  {s.label}
                  <small>{s.sub}</small>
                </span>
                <span className="vs-value">{s.value}</span>
              </li>
            ))}
            <li className="vs-total">
              <span className="vs-icon">→</span>
              <span className="vs-label">Valor Total</span>
              <span className="vs-value">R$488</span>
            </li>
          </ul>

          <div className="price-reveal">
            <div className="savings-pill">
              <small>Desconto</small>80% OFF
            </div>
            <div className="price-reveal-eyebrow">De R$397,00 — hoje você investe apenas</div>
            <div className="price-reveal-amount">
              <span className="currency">R$</span>97<span className="cents">,00</span>
            </div>
            <div className="price-reveal-foot">À vista · ou 3× de R$34,29</div>
          </div>

          <a
            href={KIWIFY_URL}
            className="btn btn--cta btn--cta--pulse btn--block"
            style={{ marginBottom: "var(--space-4)" }}
          >
            ▶ SIM! QUERO ACESSAR AGORA
          </a>

          <p className="body-sm" style={{ color: "var(--color-text-low)", marginBottom: "var(--space-5)" }}>
            Se você sair desta página, a Masterclass Outside Sem Segredos custará <strong>R$397,00</strong>.
          </p>

          <div className="trust-row">
            <span className="trust-chip"><ShieldIcon />Pagamento Seguro</span>
            <span className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Acesso Imediato
            </span>
            <span className="trust-chip"><ShieldIcon />7 Dias de Garantia</span>
          </div>
        </div>

        <div className="guarantee-block reveal" style={{ marginTop: "var(--space-10)" }}>
          <img
            className="guarantee-seal"
            src="https://fabricadefrasesinfinitas.com/wp-content/uploads/2024/07/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-300x300-1.png"
            alt="Garantia de 7 dias"
          />
          <p className="body-lg">
            Fique tranquilo, seu investimento é totalmente seguro: temos uma garantia incondicional de{" "}
            <strong>7 dias.</strong> Caso o produto não atenda às suas expectativas,{" "}
            <strong>você poderá solicitar a devolução de todo o valor investido.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
