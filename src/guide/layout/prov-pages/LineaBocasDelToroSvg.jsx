const lineaBocasDelToroSvg = new URL('../../img_test/srcProvincias/bocas_del_toto/LineaBocasDelToro.svg', import.meta.url).href;

function LineaBocasDelToroSvg({ className = '' }) {
    return <img src={lineaBocasDelToroSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaBocasDelToroSvg;
