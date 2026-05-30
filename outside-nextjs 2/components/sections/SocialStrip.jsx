const STATS = [
  { value: "2016", label: "Baixista desde" },
  { value: "9 anos", label: "De experiência" },
  { value: "0→Avançado", label: "Do zero ao avançado" },
  { value: "7 dias", label: "De garantia" },
];

export default function SocialStrip() {
  return (
    <div className="social-strip">
      <div className="social-strip-inner container--wide">
        {STATS.map((s, i) => (
          <Cell key={s.label} stat={s} divider={i < STATS.length - 1} />
        ))}
      </div>
    </div>
  );
}

function Cell({ stat, divider }) {
  return (
    <>
      <div className="stat-item">
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
      {divider && <div className="stat-divider"></div>}
    </>
  );
}
