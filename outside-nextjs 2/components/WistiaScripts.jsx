"use client";

import Script from "next/script";

/**
 * Carrega o player do Wistia e os 5 vídeos da página.
 * São exatamente os mesmos embeds da página original.
 */
const WISTIA_MEDIA_IDS = [
  "w62y2sjjzb", // Hero (16:9)
  "guo9ynj79n", // Seção "Técnicas testadas" (vertical)
  "2c8dpz7txb", // Depoimento - Junior Braguinha
  "itdcnt09uw", // Depoimento - Michael Pipoquinha
  "3qwdxu2sq6", // Depoimento - Hadrien Feraud
];

export default function WistiaScripts() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      {WISTIA_MEDIA_IDS.map((id) => (
        <Script
          key={id}
          src={`https://fast.wistia.com/embed/${id}.js`}
          type="module"
          strategy="afterInteractive"
        />
      ))}
    </>
  );
}
