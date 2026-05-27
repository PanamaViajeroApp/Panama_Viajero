function MapSection({ provinceData }) {
    return (
        <section className="mx-auto my-10 w-full max-w-6xl px-4 py-16">
            <iframe
                src={provinceData.ubicacionProvincia.src}
                title={`Mapa de ${provinceData.nombre}`}
                className="h-[300px] w-full rounded-xl border-0 shadow-[0_18px_45px_rgba(77,76,76,0.24)]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </section>
    );
}

export default MapSection;