import SmartVideo from '../video/SmartVideo.jsx';

function ProvinceVideo({ provinceData, videoSrc }) {
    const banner = provinceData.banner || {};
    const source = videoSrc || banner.src;
    const isVideo = banner.tipo === 'video';
    const fallbackPoster = provinceData.imagenProvincia?.src
        || provinceData.lugaresDestacados?.find((lugar) => lugar.tipo !== 'video')?.imagen;
    const poster = banner.poster || fallbackPoster;

    return (
        <section id="video">
            <div className="relative z-0">
                {isVideo ? (
                    <SmartVideo
                        src={source}
                        className="h-screen w-full object-cover object-top"
                        autoPlay
                        poster={poster}
                        preload="none"
                        eager
                    />
                ) : (
                    <img
                        src={source}
                        alt={banner.alt || provinceData.nombre}
                        className="h-screen w-full object-cover"
                    />
                )}
                
                <div className="absolute inset-0 z-10 flex items-start md:items-center bg-gradient-to-r from-brand-charcoal/55 via-brand-charcoal/20 to-transparent px-4">
                    <div className="max-w-md rounded-xl p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm mt-24 md:mt-0 md:ml-15">
                        <h1 className="font-main font-bold text-6xl  text-brand-white md:pb-4 md:text-6xl brightness-150 ">
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
