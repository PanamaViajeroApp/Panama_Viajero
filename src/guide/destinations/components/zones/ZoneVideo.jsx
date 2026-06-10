import SmartVideo from '../../../components/video/SmartVideo.jsx'

function ZoneVideo({ provinceData, zone, videoSrc, fixedBackground = false, scrollProgress = 0 }) {
  const banner = provinceData.banner || {}
  const source = videoSrc || zone?.imagen || zone?.banner?.src || banner.src
  const isVideo = typeof source === 'string' && source.endsWith('.mp4')
  const fallbackPoster =
    provinceData.imagenProvincia?.src ||
    provinceData.lugaresDestacados?.find((lugar) => lugar.tipo !== 'video')?.imagen
  const poster = zone?.imagen || zone?.banner?.src || banner.poster || fallbackPoster
  const backgroundImage = !isVideo && source ? `url("${source}")` : poster ? `url("${poster}")` : undefined

  const mediaClassName = fixedBackground
    ? 'h-full w-full object-cover object-top'
    : 'h-screen w-full object-cover object-top'

  const media = isVideo ? (
    <SmartVideo
      src={source}
      className={mediaClassName}
      autoPlay
      poster={poster}
      preload="none"
      eager
    />
  ) : (
    <img
src="/images/destinations/chiriqui/z-boquete/bg-z-boquete.jpg"
      alt={zone?.nombre || banner.alt || provinceData.nombre}
      className={fixedBackground ? 'h-full w-full object-cover' : 'h-screen w-full object-cover'}
    />
  )

  const heading = zone?.nombre || provinceData.nombre
  const sub = zone?.descripcion || provinceData.descripcionCorta

  if (fixedBackground) {
    return (
      <section id="video" className="relative min-h-screen overflow-hidden bg-brand-charcoal">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-brand-charcoal"
          
        >
          {media}
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="">
            <h1
              className="font-main text-5xl font-bold brightness-150 text-brand-white transition-opacity duration-300 md:text-6xl"
              style={{ textShadow: '0 0 6px rgba(39, 39, 75, 0.9)', opacity: 1 - scrollProgress }}
            >
              {heading}
            </h1>
            
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="video">
      <div className="relative z-0 ">
        {media}
        <div
          className="absolute inset-0 z-10 flex items-start bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/35 to-transparent bg-cover bg-center bg-no-repeat px-4 md:items-center"
          style={backgroundImage ? { backgroundImage } : undefined}
        >
          <div className="mt-24 max-w-md rounded-xl border border-white/15 bg-black/35 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md md:mt-0 md:ml-15">
            <h1 className="font-main text-6xl font-bold brightness-150 text-brand-white md:pb-4 md:text-6xl">{heading}</h1>
            <p className="font-body text-lg leading-7 text-brand-white/90">{sub}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZoneVideo
