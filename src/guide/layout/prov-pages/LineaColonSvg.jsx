const lineaColonSvg = new URL('../../img_test/srcProvincias/colon/LineaColon.svg', import.meta.url).href;

function LineaColonSvg({ className = '' }) {
    return <img src={lineaColonSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaColonSvg;
