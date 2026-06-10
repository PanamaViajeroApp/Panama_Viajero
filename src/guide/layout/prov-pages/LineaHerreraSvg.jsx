const lineaHerreraSvg = new URL('../../img_test/srcProvincias/herrera/LineaHerrera.svg', import.meta.url).href;

function LineaHerreraSvg({ className = '' }) {
    return <img src={lineaHerreraSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaHerreraSvg;
