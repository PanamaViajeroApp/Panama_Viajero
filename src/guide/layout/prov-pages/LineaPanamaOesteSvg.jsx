const lineaPanamaOesteSvg = new URL('../../img_test/srcProvincias/panama_oeste/LineaPanamáOeste.svg', import.meta.url).href;

function LineaPanamaOesteSvg({ className = '' }) {
    return <img src={lineaPanamaOesteSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaPanamaOesteSvg;
