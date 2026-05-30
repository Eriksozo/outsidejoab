const WHATSAPP_URL =
  "https://wa.me/5595991243841?text=Comprei%20a%20Masterclass%20Outside%20Sem%20Segredos%2C%20n%C3%A3o%20consegui%20o%20acesso!";

export default function Support() {
  return (
    <section className="section">
      <div className="container">
        <div className="card card--highlight text-center reveal" style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 className="display display--md" style={{ marginBottom: "var(--space-4)" }}>
            Ainda tem dúvidas?
          </h2>
          <p className="body-lg" style={{ marginBottom: "var(--space-3)" }}>
            Minha equipe está à disposição para responder qualquer pergunta e garantir que você tome a melhor decisão.
          </p>
          <p className="body-lg" style={{ marginBottom: "var(--space-6)" }}>
            <strong>Clique no botão abaixo e fale conosco pelo WhatsApp.</strong> Estamos te esperando!
          </p>
          <a href={WHATSAPP_URL} className="btn btn--primary">💬 FALAR COM ATENDENTE</a>
        </div>
      </div>
    </section>
  );
}
