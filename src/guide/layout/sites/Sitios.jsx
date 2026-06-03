import SmartVideo from '../../components/video/SmartVideo.jsx'
import { useNavigate } from 'react-router-dom'

function Sitios({ provinceData }) {
  const navigate = useNavigate()
  const fallbackPoster =
    provinceData.banner?.poster ||
    provinceData.imagenProvincia?.src ||
    provinceData.lugaresDestacados.find((item) => item.tipo !== 'video')?.imagen

  return (
    <div className="flex flex-col gap-5">
      <h1
        className="font-main flex justify-center text-3xl font-bold text-brand-white/95 md:pb-4 md:text-4xl"
        style={{ textShadow: '0 0 6px rgba(0, 0, 0, 0.9)' }}
      >
        Sitios Turisticos
      </h1>
      <div className="mx-auto flex max-w-6xl flex flex-wrap gap-6">
        {provinceData.lugaresDestacados.map((lugar) => {
          const isVideo = lugar.tipo === 'video'

          return (
            <button
              key={lugar.id}
              type="button"
              aria-label={`Ver informacion de ${lugar.nombre}`}
              onClick={() => navigate(`/sitios/${encodeURIComponent(lugar.id)}`)}
              className="flex w-full max-w-md cursor-pointer flex-col overflow-hidden rounded-xl bg-brand-white text-left shadow-xl transition hover:-translate-y-1 md:w-[355px]"
            >
              <div className="group relative aspect-[16/9] w-full overflow-hidden bg-brand-soft">
                {isVideo ? (
                  <SmartVideo
                    src={lugar.imagen}
                    className="h-[116%] w-full object-cover object-top"
                    autoPlay
                    poster={lugar.poster || fallbackPoster}
                    preload="none"
                  />
                ) : (
                  <img
                    src={lugar.imagen}
                    alt={lugar.nombre}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/8 transition-all duration-300 group-hover:bg-black/0" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-secondary-italic mt-2 text-2xl text-brand-blue/95">
                  {lugar.nombre}
                </h3>

                {lugar.descripcion && (
                  <p className="font-body mt-3 text-sm leading-6 text-brand-gray/95">
                    {lugar.descripcion}
                  </p>
                )}

                <p className="font-secondary-italic mt-auto pt-4 text-sm text-brand-red/95">
                  {lugar.ubicacion}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Sitios
