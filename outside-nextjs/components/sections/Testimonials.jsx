import WistiaPlayer from "@/components/WistiaPlayer";

const TESTIMONIALS = [
  { mediaId: "2c8dpz7txb", name: "Junior Braguinha" },
  { mediaId: "itdcnt09uw", name: "Michael Pipoquinha" },
  { mediaId: "3qwdxu2sq6", name: "Hadrien Feraud" },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container--wide">
        <div className="section-header reveal">
          <span className="eyebrow">Prova real</span>
          <h2 className="display display--lg">
            Os grandes do outside <span className="accent">não tocam aleatoriamente</span>
          </h2>
          <p>
            Existe um método por trás disso — e eu vou te ensinar. Aprenda as técnicas dos baixistas mais renomados do
            mundo.
          </p>
        </div>

        <div className="grid-cards-3 reveal">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.mediaId}>
              <div className="video-vert media-frame">
                <WistiaPlayer mediaId={t.mediaId} aspect="0.5625" />
              </div>
              <div className="testi-name">{t.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "var(--space-8)" }}>
          <a href="#oferta" className="btn btn--cta">▶ QUERO EVOLUIR AGORA!</a>
        </div>
      </div>
    </section>
  );
}
