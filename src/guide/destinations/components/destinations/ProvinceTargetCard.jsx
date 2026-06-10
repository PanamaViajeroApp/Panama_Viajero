import SmartVideo from '../../../components/video/SmartVideo.jsx'

function ProvinceTargetCard({ target, onClick, fallbackPoster, mode = 'sites-only' }) {
  const isVideo = target.type === 'video'
  const isZone = target.type === 'zone'

  return (
    <button
      type="button"
      aria-label={`Ver informacion de ${target.nombre}`}
      onClick={onClick}
      className="flex w-full max-w-[350px] cursor-pointer flex-col overflow-hidden rounded-xl bg-brand-white text-left shadow-xl transition hover:-translate-y-1"
    >
      <div className="group relative aspect-[16/9] w-full overflow-hidden bg-brand-soft">
        {isVideo ? (
          <SmartVideo
            src={target.imagen}
            className={`h-[116%] w-full object-cover object-top ${
              mode === 'zones-only' ? 'opacity-20' : 'opacity-100'
            }`}
            autoPlay
            poster={target.poster || fallbackPoster}
            preload="none"
          />
        ) : (
          <img
            src={target.imagen}
            alt={target.nombre}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className={`h-full w-full object-cover ${mode === 'zones-only' ? 'opacity-20' : ''}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        {mode === 'sites-only' && (
          <div className="absolute inset-0 bg-black/8 transition-all duration-300 group-hover:bg-black/0" />
        )}

        {mode === 'zones-only' && (
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <div className="rounded-2xl border border-white/15 bg-black/35 px-5 py-3 backdrop-blur-sm">
              <h3 className="font-secondary-italic text-2xl font-bold text-brand-white">
                {target.nombre}
              </h3>
              {target.descripcion && (
                <p className="font-body mt-2 text-sm leading-5 text-brand-white/90">
                  {target.descripcion}
                </p>
              )}
            </div>
          </div>
        )}

        {mode === 'mixed' && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-secondary-italic text-2xl font-bold text-brand-white">
                  {target.nombre}
                </h3>
                {isZone && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                    Zona
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {mode === 'sites-only' && (
        <div className="flex min-h-[176px] flex-1 flex-col p-5">
          <h3 className="font-secondary-italic mt-2 text-2xl text-brand-blue/95">
            {target.nombre}
          </h3>

          {target.descripcion && (
            <p className="font-body mt-3 text-sm leading-6 text-brand-gray/95 line-clamp-3">
              {target.descripcion}
            </p>
          )}

          {target.ubicacion && (
            <p className="font-secondary-italic mt-auto pt-4 text-sm text-brand-red/95">
              {target.ubicacion}
            </p>
          )}
        </div>
      )}
    </button>
  )
}

export default ProvinceTargetCard
