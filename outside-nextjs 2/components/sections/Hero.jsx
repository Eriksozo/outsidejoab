"use client";

import { motion } from "framer-motion";
import WistiaPlayer from "@/components/WistiaPlayer";
import AmberShader from "@/components/fx/AmberShader";

const ease = [0.2, 0.7, 0.2, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <AmberShader />
      <div className="container container--wide">
        <div className="hero-grid">
          <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
            <motion.div className="hero-eyebrow" variants={item}>
              <span className="eyebrow">Masterclass Outside Sem Segredos · com Joab Pereira</span>
            </motion.div>
            <motion.h1
              className="display display--hero hero-title"
              style={{ fontSize: "clamp(2.2rem, 5.4vw, 4.25rem)", lineHeight: 1.04, overflowWrap: "break-word" }}
              variants={item}
            >
              Pare De Soar Como Um <span className="accent">Robô</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={item}>
              Você Não Precisa Ser Um Gênio Do Jazz Para Tocar Outside – Só Precisa Do{" "}
              <span className="text-high">MÉTODO CERTO</span>.
            </motion.p>
            <motion.p className="hero-body body-lg" variants={item}>
              <strong>O Fim da Mesmice no Seu Baixo:</strong> o segredo por trás das frases outside matadoras usadas
              pelos maiores baixistas do mundo.
            </motion.p>
            <motion.div className="hero-cta-wrap" variants={item}>
              <a href="#oferta" className="btn btn--cta btn--cta--pulse">▶ QUERO SAIR DA MESMICE</a>
              <span className="hero-guarantee">
                🔒 De R$397 por apenas R$97 &nbsp;·&nbsp; 7 dias de garantia incondicional
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
          >
            <WistiaPlayer mediaId="w62y2sjjzb" aspect="1.7777777777777777" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
