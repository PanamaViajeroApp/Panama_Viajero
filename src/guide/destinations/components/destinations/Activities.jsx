import {
    LuBird,
    LuBike,
    LuCamera,
    LuCompass,
    LuFish,
    LuMapPinned,
    LuMountain,
    LuPartyPopper,
    LuShipWheel,
    LuShoppingBag,
    LuTrees,
    LuUtensilsCrossed,
    LuWaves,
} from 'react-icons/lu';

const activityRules = [
    { test: /(surf|snorkel|buce|kayak|ballena|tortuga|mar|arrecife|playa)/, Icon: LuWaves },
    { test: /(pesca)/, Icon: LuFish },
    { test: /(ciclismo|patinaje|ruta|bicicleta)/, Icon: LuBike },
    { test: /(gastron|comida|restaur|sabores|culin)/, Icon: LuUtensilsCrossed },
    { test: /(compras|shopping|centros comerciales|mall)/, Icon: LuShoppingBag },
    { test: /(vida nocturna|nocturna|fiesta|noche)/, Icon: LuPartyPopper },
    { test: /(senderismo|monta|trek)/, Icon: LuMountain },
    { test: /(bosque|naturaleza|parque)/, Icon: LuTrees },
    { test: /(avistamiento|observaci|aves|pajar)/, Icon: LuBird },
    { test: /(canal|visitas|tour|recorrido|museo|hist|casco|ciudad|urbano|paseo)/, Icon: LuMapPinned },
    { test: /(isla|islote|costa|costera|marino)/, Icon: LuShipWheel },
    { test: /(fotograf|paisaje|foto|mirador)/, Icon: LuCamera },
    { test: /.*/, Icon: LuCompass },
];

function getActivityIcon(activity) {
    const normalized = activity
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    return activityRules.find(({ test }) => test.test(normalized)) ?? activityRules[activityRules.length - 1];
}

function Activities({ provinceData }) {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 mb-16 mt-[-110px]">
            <h1
                className="font-main text-3xl font-bold text-brand-white md:text-4xl "
                style={{ textShadow: '0 0 6px rgba(0, 0, 0, 0.9)' }}
            >
                Actividades
            </h1>
            <div className="overflow-hidden py-5 md:mt-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                    {[0, 1].map((grupo) => (
                        <div
                            key={grupo}
                            className="flex shrink-0 gap-3 pr-3"
                            aria-hidden={grupo === 1}
                        >
                            {provinceData.actividades.map((actividad) => {
                                const { Icon } = getActivityIcon(actividad);

                                return (
                                    <button
                                        key={`${grupo}-${actividad}`}
                                        type="button"
                                        className="font-secondary inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-blue/20 bg-brand-white px-4 py-2 text-sm text-brand-charcoal shadow-sm transition hover:bg-brand-blue hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                                    >
                                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                        {actividad}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
