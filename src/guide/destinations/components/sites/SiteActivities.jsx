import { getActivityIcon } from './activityIcons.js'

function SiteActivities({ activities = [], featuredImage }) {
  const featuredActivity = activities[0]
  const FeaturedActivityIcon = featuredActivity ? getActivityIcon(featuredActivity.nombre).Icon : null
  const secondaryActivities = activities.slice(1)

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,0,0,0.72),rgba(73,86,162,0.34)_48%,rgba(205,46,76,0.24))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-15">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px] " />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-white to-brand-blue " />

      <div className="relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between ">
          <div>
            <p className="font-secondary text-xs uppercase tracking-[0.28em] text-white/65">
              Experiencias
            </p>
            <h2 className="font-main mt-2 text-4xl text-brand-white md:text-6xl">
              Lo que te espera
            </h2>
          </div>
          <div className="flex w-fit items-end gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-brand-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <span className="font-main text-5xl leading-none">{activities.length}</span>
            <span className="font-secondary mb-1 max-w-24 text-xs uppercase tracking-[0.18em] text-white/75">
              planes por descubrir
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 ">
          {featuredActivity && FeaturedActivityIcon && (
            <article className="group relative w-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-brand-white text-brand-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-brand-red to-brand-blue" />
              <div className="relative h-44 overflow-hidden md:h-75">
                <img
                  src={featuredImage}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/75 via-brand-charcoal/25 to-transparent" />
                <span className="font-main absolute right-5 top-3 text-7xl leading-none text-white/60 md:text-8xl">
                  01
                </span>
                <div className="absolute bottom-5 left-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-blue 
                text-brand-white shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-brand-red md:h-28 md:w-28">
                  <FeaturedActivityIcon className="h-14 w-14 md:h-16 md:w-16" />
                </div>
              </div>
              <div className="relative p-6 md:p-8">
                <p className="font-secondary text-xs uppercase tracking-[0.22em] text-brand-red">
                  recomendado
                </p>
                <h3 className="font-secondary-italic mt-3 text-4xl leading-tight text-brand-blue md:text-5xl">
                  {featuredActivity.nombre}
                </h3>
                <p className="font-body mt-5 max-w-xl text-base leading-8 text-brand-charcoal/85 md:text-lg">
                  {featuredActivity.descripcion}
                </p>
              </div>
            </article>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {secondaryActivities.map((actividad, index) => {
              const { Icon } = getActivityIcon(actividad.nombre)
              const activityNumber = String(index + 2).padStart(2, '0')

              return (
                <article
                  key={actividad.nombre}
                  className="group relative min-h-[230px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-black/38 p-5 text-brand-white shadow-[0_16px_38px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-black/48"
                >
                  <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-brand-red to-brand-blue opacity-75" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-white transition duration-500 group-hover:bg-brand-white group-hover:text-brand-blue">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-main text-4xl leading-none text-white/30">
                      {activityNumber}
                    </span>
                  </div>
                  <h3 className="font-secondary-italic mt-6 text-2xl leading-tight text-brand-white md:text-3xl">
                    {actividad.nombre}
                  </h3>
                  <p className="font-body mt-4 text-sm leading-7 text-white/78 md:text-base">
                    {actividad.descripcion}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteActivities
