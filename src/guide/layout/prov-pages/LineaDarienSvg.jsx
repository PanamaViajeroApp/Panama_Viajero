const lineaDarienSvg = new URL('../../img_test/srcProvincias/darien/LineaDarién.svg', import.meta.url).href;

function LineaDarienSvg({ className = '' }) {
    return <img src={lineaDarienSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaDarienSvg;
