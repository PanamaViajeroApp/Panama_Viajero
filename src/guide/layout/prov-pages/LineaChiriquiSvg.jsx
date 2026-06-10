const lineaChiriquiSvg = new URL('../../img_test/srcProvincias/chiriqui/LineaChiriquí.svg', import.meta.url).href;

function LineaChiriquiSvg({ className = '' }) {
    return <img src={lineaChiriquiSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaChiriquiSvg;
