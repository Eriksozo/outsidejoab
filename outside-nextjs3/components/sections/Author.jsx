export default function Author() {
  return (
    <section className="section section--surface">
      <div className="container--wide">
        <div className="split-grid">
          <div className="author-photo reveal">
            <img
              src="https://fabricadefrasesinfinitas.com/wp-content/uploads/2025/03/foto-joab-_1_.webp"
              alt="Joab Pereira"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
              O instrutor
            </span>
            <h2 className="display display--lg" style={{ marginBottom: "var(--space-5)" }}>
              Quem é <span className="accent">Joab Pereira</span>
            </h2>
            <p className="body-lg">
              Baixista desde 2016, <strong>especialista em improvisação.</strong>
              <br /><br />
              9 anos de experiência na música, mentoria e cursos. Durante essa jornada me especializei em acelerar os
              resultados dos meus alunos com <strong>técnicas exclusivas de aprendizagem e evolução.</strong>
              <br /><br />
              Já passei por diversos estágios como músico e conheço todas as dificuldades para evoluir. Hoje, com{" "}
              <strong>múltiplos alunos</strong>, possuo um <strong>método totalmente eficaz</strong> para ajudar todos
              os níveis — do <strong>básico ao avançado.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
