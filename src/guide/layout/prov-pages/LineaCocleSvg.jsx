const lineaCocleSvg = new URL('../../img_test/srcProvincias/cocle/LineaCoclé.svg', import.meta.url).href;

function LineaCocleSvg({ className = '' }) {
    return <img src={lineaCocleSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaCocleSvg;
