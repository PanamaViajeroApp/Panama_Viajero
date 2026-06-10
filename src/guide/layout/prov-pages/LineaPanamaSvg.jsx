const lineaPanamaSvg = new URL('../../img_test/srcProvincias/panama/LineaPanamá.svg', import.meta.url).href;

function LineaPanamaSvg({ className = '' }) {
    return <img src={lineaPanamaSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaPanamaSvg;
