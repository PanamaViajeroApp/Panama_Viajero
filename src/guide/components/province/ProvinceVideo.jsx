import SmartVideo from '../video/SmartVideo.jsx';

function ProvinceVideo({ provinceData, videoSrc, fixedBackground = false }) {
    const banner = provinceData.banner || {};
    const source = videoSrc || banner.src;
    const isVideo = banner.tipo === 'video';
    const fallbackPoster = provinceData.imagenProvincia?.src
        || provinceData.lugaresDestacados?.find((lugar) => lugar.tipo !== 'video')?.imagen;
    const poster = banner.poster || fallbackPoster;

    const mediaClassName = fixedBackground
        ? 'h-full w-full object-cover object-top'
        : 'h-screen w-full object-cover object-top';

    const media = isVideo ? (
        <SmartVideo
            src={source}
            className={mediaClassName}
            autoPlay
            poster={poster}
            preload="none"
            eager
        />
    ) : (
        <img
            src={source}
            alt={banner.alt || provinceData.nombre}
            className={fixedBackground ? 'h-full w-full object-cover' : 'h-screen w-full object-cover'}
        />
    );

    if (fixedBackground) {
        return (
            <section id="video" className="relative min-h-screen">
                <div className="fixed inset-0 -z-10">
                    {media}
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 flex items-start px-4 md:items-center">
                    <div className="mt-24 max-w-md rounded-xl p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm md:mt-0 md:ml-15">
                        <h1 className="font-main text-6xl font-bold brightness-150 text-brand-white md:pb-4 md:text-6xl"
                        style={{  textShadow: '0 0 6px rgba(39, 39, 75, 0.9)'}}>
                            {provinceData.nombre}
                        </h1>
                        <p className="font-body text-lg leading-7 text-brand-white/90">
                            {provinceData.descripcionCorta}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="video">
            <div className="relative z-0">
                {media}
                <div className="absolute inset-0 z-10 flex items-start bg-gradient-to-r from-brand-charcoal/55 via-brand-charcoal/20 to-transparent px-4 md:items-center">
                    <div className="mt-24 max-w-md rounded-xl p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm md:mt-0 md:ml-15">
                        <h1 className="font-main text-6xl font-bold brightness-150 text-brand-white md:pb-4 md:text-6xl"
                        >
                            {provinceData.nombre}
                        </h1>
                        <p className="font-body text-lg leading-7 text-brand-white/90">
                            {provinceData.descripcionCorta}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProvinceVideo;
