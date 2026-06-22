import { getActivityIcon } from './activityIcons.js'

function SiteActivities({ activities = [], featuredImage }) {
  const featuredActivity = activities[0]
  const secondaryActivities = activities.slice(1)
  const FeaturedActivityIcon = featuredActivity ? getActivityIcon(featuredActivity.nombre).Icon : null

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16">
      <div className="rounded-[28px] border border-[#4D4C4C]/10 bg-[#FFFFFF]/85 shadow-[0_20px_55px_rgba(77,76,76,0.10)]">
        <div className="border-b border-[#4D4C4C]/10 px-6 py-5 sm:px-8 ">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CD2E4C]">
            Experiencias
          </p>
          <h2 className="mt-2 font-main text-3xl font-bold text-[#4D4C4C] sm:text-4xl">
            Lo que te espera
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-[0.88fr_1.12fr] ">
          <div className="border-b border-[#4D4C4C]/10 bg-[#EBEBEB]/30 p-5 sm:p-6 md:border-b-0 md:border-r rounded-bl-[28px]">
            {featuredActivity ? (
              <article className="flex h-full flex-col ">
                <div className="relative overflow-hidden rounded-[22px] border border-[#4D4C4C]/10 bg-[#FFFFFF]">
                  <img
                    src={featuredImage}
                    alt=""
                    className="h-52 w-full object-cover sm:h-60 md:h-[280px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent " />
                  <div className="absolute left-4 top-4 rounded-full bg-[#FFFFFF]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4D4C4C]">
                    Recomendado
                  </div>
                  {FeaturedActivityIcon ? (
                    <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4956A2] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                      <FeaturedActivityIcon className="h-7 w-7" />
                    </div>
                  ) : null}
                </div>

                <div className="pt-6 ">
                  <h3 className="font-secondary text-2xl font-bold leading-tight text-[#4D4C4C] sm:text-3xl">
                    {featuredActivity.nombre}
                  </h3>
                  <p className="mt-4 max-w-xl font-body text-sm leading-7 text-[#4D4C4C]/78 sm:text-base">
                    {featuredActivity.descripcion}
                  </p>
                </div>
              </article>
            ) : null}
          </div>

          <div className="bg-[#FFFFFF]/50 p-5 sm:p-6 md:p-8 rounded-br-[28px]">
            <div className="flex items-center justify-between gap-2 border-b border-[#4D4C4C]/10 pb-4">
              <div>
                <p className="text-md font-semibold uppercase tracking-[0.26em] text-[#4956A2]">
                  Catálogo
                </p>
                <p className=" text-md text-[#4D4C4C]/75">
                  {activities.length} nuevas experiencias
                </p>
              </div>
              <div className="rounded-full border border-[#4D4C4C]/10 bg-[#EBEBEB] px-4 py-2 text-sm font-semibold text-[#4D4C4C]">
                {activities.length}
              </div>
            </div>

            <div className="mt-5 max-h-[430px] space-y-3 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#4956A2_#EBEBEB]">
              {secondaryActivities.map((actividad, index) => {
                const { Icon } = getActivityIcon(actividad.nombre)
                const number = String(index + 2).padStart(2, '0')
                const accent = index % 3 === 0 ? '#4956A2' : index % 3 === 1 ? '#CD2E4C' : '#4D4C4C'

                return (
                  <article
                    key={actividad.nombre}
                    className="flex items-start gap-4 rounded-[18px] border border-[#4D4C4C]/10 bg-[#FFFFFF] px-4 py-4 transition duration-300 hover:border-[#4956A2]/25 hover:bg-[#FBFBFB]"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-secondary-italic leading-tight text-[#4D4C4C] sm:text-xl">
                          {actividad.nombre}
                        </h4>
                        <span className="font-secondary text-sm font-bold tracking-[0.2em] text-[#4D4C4C]/25">
                          {number}
                        </span>
                      </div>
                      <p className="mt-2 max-w-2xl font-body text-sm leading-7 text-[#4D4C4C]/72">
                        {actividad.descripcion}
                      </p>
                      <div className="mt-3 h-px w-20 rounded-full" style={{ backgroundColor: accent }} />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteActivities
