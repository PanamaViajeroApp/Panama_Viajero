import SmartVideo from '../../../components/video/SmartVideo.jsx'

function ZoneVideo({ provinceData, zone, videoSrc, fixedBackground = false, scrollProgress = 0 }) {
  const banner = provinceData.banner || {}
  const source = videoSrc || banner.src
  const mediaClassName = fixedBackground
    ? 'h-full w-full object-cover object-top'
    : 'h-screen w-full object-cover object-top'

  const media = (
    <SmartVideo
      src={source}
      className={mediaClassName}
      autoPlay
      poster={banner.poster}
      preload="none"
      eager
    />
  )

  const heading = zone?.nombre || provinceData.nombre
  const sub = zone?.descripcion || provinceData.descripcionCorta

  if (fixedBackground) {
    return (
      <section id="video" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          {media}
        </div>
      </section>
    )
  }

  return (
    <section id="video">
      <div className="relative z-0">
        {media}
        <div className="absolute inset-0 z-10 flex items-start bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/35 to-transparent bg-cover bg-center bg-no-repeat px-4 md:items-center">
          <div className="mt-24 max-w-md rounded-xl border border-white/15  p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md md:mt-0 md:ml-15">
            <h1 className="font-main text-6xl font-bold brightness-150 text-brand-white md:pb-4 md:text-6xl">
              {heading}
            </h1>
            <p className="font-body text-lg leading-7 text-brand-white/90">{sub}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZoneVideo
