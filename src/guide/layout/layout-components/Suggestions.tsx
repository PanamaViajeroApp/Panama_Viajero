import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { provinceMedia } from '../../destinations/destinations-pages/provinceMedia.js'

function getRandomItems(items, limit) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }

  return shuffled.slice(0, limit)
}

function Suggestions() {
  const navigate = useNavigate()
  const suggestions = useMemo(() => {
    const provincesWithVideoBanner = provinceMedia.filter((province) => province.banner)
    return getRandomItems(provincesWithVideoBanner, 3)
  }, [])

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-main text-left text-3xl text-brand-blue md:text-5xl">
          Sugerencias para explorar
        </h2>
        <p className="font-body-italic ml-2 mt-3 max-w-2xl text-left text-brand-charcoal/90 md:text-lg">
          Provincias recomendadas para descubrir historia, naturaleza, cultura y experiencias únicas
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl justify-center gap-4 md:gap-8">
        {suggestions.map((province) => (
          <button
            key={province.id}
            type="button"
            aria-label={`Explorar ${province.nombre}`}
            onClick={() => navigate(`${province.path}#video`)}
            className="group flex w-full max-w-md cursor-pointer flex-col items-center md:w-[355px]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-brand-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
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
              <span className="inline-block font-secondary-italic text-2xl font-bold text-brand-blue transition-all duration-300 ease-out group-hover:scale-105 md:text-4xl">
                {province.nombre}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Suggestions
