const lineaGunaYalaSvg = new URL('../../srcProvincias/comarca_guna_yala/LineaGunaYala.svg', import.meta.url).href;

function LineaGunaYalaSvg({ className = '' }) {
    return <img src={lineaGunaYalaSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaGunaYalaSvg;
