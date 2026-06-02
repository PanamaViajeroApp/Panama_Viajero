function Activities({ provinceData }) {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-16">
            <h1 className="font-main text-3xl font-bold text-brand-white md:text-4xl "
            style={{  textShadow: '0 0 6px rgba(0, 0, 0, 0.9)'}}>Actividades</h1>
            <div className="overflow-hidden py-5 md:mt-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                    {[0, 1].map((grupo) => (
                        <div
                            key={grupo}
                            className="flex shrink-0 gap-3 pr-3"
                            aria-hidden={grupo === 1}
                        >
                            {provinceData.actividades.map((actividad) => (
                                <button
                                    key={`${grupo}-${actividad}`}
                                    type="button"
                                    className="font-secondary whitespace-nowrap rounded-full border border-brand-blue/20 
                                    bg-brand-white px-5 py-2 text-sm text-brand-charcoal shadow-sm transition hover:bg-brand-blue hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                                >
                                    {actividad}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
