const markersSvg = '/maps/provinces/Se%C3%B1aladores.svg';

function MapMarkersLayer({ className = '', style = {} }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-0 ${className}`.trim()}
            style={style}
        >
            <img
                src={markersSvg}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full select-none object-contain"
                draggable="false"
            />
        </div>
    );
}

export default MapMarkersLayer;
