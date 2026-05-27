import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { provinceMedia } from '../../data/panama/provinceMedia.js';

function getRandomItems(items, limit) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled.slice(0, limit);
}

function AleatorySuggestions() {
    const navigate = useNavigate();
    const suggestions = useMemo(() => {
        const provincesWithPoster = provinceMedia.filter((province) => province.poster);
        return getRandomItems(provincesWithPoster, 3);
    }, []);

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-0">
            <div className="mb-8 flex flex-col items-end">
                <h2 className="font-main text-2xl text-brand-blue md:text-5xl">
                    Otras provincias
                </h2>
                <p className="font-secondary-italic text-right  mt-3 max-w-3xl text-brand-charcoal/90 md:text-lg">
                    Más allá del horizonte hay un lugar esperando cambiar tu forma de ver el mundo.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex  justify-center gap-4 md:gap-8 ">
                {suggestions.map((province) => (
                    <button
                        key={province.id}
                        type="button"
                        aria-label={`Explorar ${province.nombre}`}
                        onClick={() => navigate(`${province.path}#video`)}
                        className="group flex w-full max-w-md cursor-pointer flex-col items-center md:w-[355px]"
                    >
                        <div
                            className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-brand-soft
                            transition-all duration-300 group-hover:scale-105
                            group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
                        >
                            <img
                                src={province.poster}
                                alt={province.nombre}
                                loading="lazy"
                                decoding="async"
                                className="h-[116%] w-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/0" />
                        </div>
                        <div className="mt-4 w-full overflow-hidden text-center">
                            <span
                                className="inline-block font-secondary-italic text-2xl md:text-4xl font-bold text-brand-blue
                                transform translate-y-0 opacity-100 
                                transition-all duration-300 ease-out
                                md:translate-y-3 md:opacity-0 
                                md:group-hover:translate-y-0 md:group-hover:opacity-100"
                            >
                                {province.nombre}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default AleatorySuggestions;
