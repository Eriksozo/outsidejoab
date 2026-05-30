/**
 * Web component <wistia-player>. Os scripts são carregados globalmente
 * em components/WistiaScripts.jsx (mesmos embeds da página original).
 * O frame/estilo fica a cargo do componente pai.
 */
export default function WistiaPlayer({ mediaId, aspect }) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <wistia-player media-id={mediaId} seo="false" aspect={aspect}></wistia-player>
  );
}
