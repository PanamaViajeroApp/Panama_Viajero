import { useEffect, useMemo, useState } from 'react'
import Menu from '../../components/menu/Menu.jsx'
import ButtomBanner from '../../components/bottombanner/Bottombanner.jsx'
import { siteRegistry } from './siteRegistry.js'
import { useNavigate, useParams } from 'react-router-dom'
import {
  LuBird,
  LuBike,
  LuChevronLeft,
  LuChevronRight,
  LuCompass,
  LuFish,
  LuGalleryHorizontal,
  LuMapPinned,
  LuMountain,
  LuPartyPopper,
  LuShipWheel,
  LuTrees,
  LuUtensilsCrossed,
  LuWaves,
  LuX,
} from 'react-icons/lu'

const activityIconRules = [
  { test: /(surf|snorkel|buce|kayak|mar|arrecife|playa)/, Icon: LuWaves },
  { test: /(pesca)/, Icon: LuFish },
  { test: /(ciclismo|patinaje|ruta|bicicleta)/, Icon: LuBike },
  { test: /(gastron|comida|restaur|sabores|culin)/, Icon: LuUtensilsCrossed },
  { test: /(vida nocturna|nocturna|fiesta|noche)/, Icon: LuPartyPopper },
  { test: /(senderismo|monta|trek)/, Icon: LuMountain },
  { test: /(bosque|naturaleza|parque)/, Icon: LuTrees },
  { test: /(avistamiento|observaci|aves|pajar)/, Icon: LuBird },
  { test: /(tour|recorrido|museo|hist|casco|ciudad|urbano|paseo|visitas)/, Icon: LuMapPinned },
  { test: /(isla|islote|costa|costera|marino)/, Icon: LuShipWheel },
  { test: /(fotograf|paisaje|foto|mirador)/, Icon: LuGalleryHorizontal },
  { test: /.*/, Icon: LuCompass },
]

const islandColonGallery = [
  '/images/sites/isla-colon/g1-isla-colon.jpg',
  '/images/sites/isla-colon/g2-isla-colon.jpg',
  '/images/sites/isla-colon/g3-isla-colon.jpg',
  '/images/sites/isla-colon/g4-isla-colon.jpg',
  '/images/sites/isla-colon/g6-isla-colon.jpg',
  '/images/sites/isla-colon/g7-isla-colon.jpg',
  '/images/sites/isla-colon/g8-isla-colon.jpg',
  '/images/sites/isla-colon/g9-isla-colon.jpg',
  '/images/sites/isla-colon/g10-isla-colon.jpg',
]

const previewGalleryLayouts = [
  [
    'col-start-1 col-span-2 row-start-1 row-span-2',
    'col-start-3 col-span-2 row-start-1 row-span-1',
    'col-start-5 col-span-2 row-start-1 row-span-2',
    'col-start-3 col-span-2 row-start-2 row-span-3',
    'col-start-1 col-span-2 row-start-3 row-span-2',
    'col-start-5 col-span-2 row-start-3 row-span-2',
  ],
  [
    'col-start-1 col-span-3 row-start-1 row-span-1',
    'col-start-4 col-span-3 row-start-1 row-span-2',
    'col-start-1 col-span-2 row-start-2 row-span-3',
    'col-start-3 col-span-1 row-start-2 row-span-3',
    'col-start-4 col-span-1 row-start-3 row-span-2',
    'col-start-5 col-span-2 row-start-3 row-span-2',
  ],
  [
    'col-start-1 col-span-2 row-start-1 row-span-4',
    'col-start-3 col-span-2 row-start-1 row-span-1',
    'col-start-5 col-span-2 row-start-1 row-span-2',
    'col-start-3 col-span-1 row-start-2 row-span-3',
    'col-start-4 col-span-1 row-start-2 row-span-3',
    'col-start-5 col-span-2 row-start-3 row-span-2',
  ],
  [
    'col-start-1 col-span-3 row-start-1 row-span-2',
    'col-start-4 col-span-2 row-start-1 row-span-1',
    'col-start-6 col-span-1 row-start-1 row-span-2',
    'col-start-4 col-span-2 row-start-2 row-span-1',
    'col-start-1 col-span-3 row-start-3 row-span-2',
    'col-start-4 col-span-3 row-start-3 row-span-2',
  ],
]

const fullGalleryLayouts = [
  [
    'col-start-1 col-span-2 row-start-1 row-span-2',
    'col-start-3 col-span-2 row-start-1 row-span-1',
    'col-start-5 col-span-2 row-start-1 row-span-1',
    'col-start-3 col-span-1 row-start-2 row-span-1',
    'col-start-4 col-span-1 row-start-2 row-span-1',
    'col-start-5 col-span-2 row-start-2 row-span-1',
    'col-start-1 col-span-3 row-start-3 row-span-2',
    'col-start-4 col-span-2 row-start-3 row-span-2',
    'col-start-6 col-span-1 row-start-3 row-span-2',
  ],
  [
    'col-start-1 col-span-3 row-start-1 row-span-1',
    'col-start-4 col-span-1 row-start-1 row-span-2',
    'col-start-5 col-span-2 row-start-1 row-span-2',
    'col-start-1 col-span-1 row-start-2 row-span-1',
    'col-start-2 col-span-2 row-start-2 row-span-1',
    'col-start-1 col-span-2 row-start-3 row-span-2',
    'col-start-3 col-span-2 row-start-3 row-span-2',
    'col-start-5 col-span-1 row-start-3 row-span-2',
    'col-start-6 col-span-1 row-start-3 row-span-2',
  ],
]

function getActivityIcon(activityName) {
  const normalized = activityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return activityIconRules.find(({ test }) => test.test(normalized)) ?? activityIconRules[activityIconRules.length - 1]
}

function SiteInfo() {
  const navigate = useNavigate()
  const { siteId } = useParams()
  const site = siteId ? siteRegistry[decodeURIComponent(siteId)] ?? null : null
  const [activeImageIndex, setActiveImageIndex] = useState(null)
  const [showAllGallery, setShowAllGallery] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const shuffledGallery = useMemo(() => {
    const seeded = [...islandColonGallery]
    return seeded.sort(() => Math.random() - 0.5)
  }, [])

  const galleryLayout = useMemo(() => {
    const randomIndex = (length) => Math.floor(Math.random() * length)

    return {
      preview: previewGalleryLayouts[randomIndex(previewGalleryLayouts.length)],
      full: fullGalleryLayouts[randomIndex(fullGalleryLayouts.length)],
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const next = Math.min(window.scrollY / 320, 1)
      setScrollProgress(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (activeImageIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImageIndex(null)
      if (event.key === 'ArrowLeft') setActiveImageIndex((current) => (current - 1 + shuffledGallery.length) % shuffledGallery.length)
      if (event.key === 'ArrowRight') setActiveImageIndex((current) => (current + 1) % shuffledGallery.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImageIndex, shuffledGallery.length])

  if (!site) {
    return <main className="min-h-screen bg-brand-soft" />
  }

  const visibleGallery = showAllGallery
    ? shuffledGallery
    : [...shuffledGallery.slice(0, 5), shuffledGallery[shuffledGallery.length - 1]]

  const openImage = (index) => setActiveImageIndex(index)
  const closeImage = () => setActiveImageIndex(null)

  return (
    <main className="relative min-h-screen overflow-x-hidden text-brand-charcoal">
      <div className="fixed top-0 z-50 w-full">
        <Menu
          autoHideOnScroll
          hideMobileMenu
          onLogoClick={() => navigate('/#home')}
          onUsClick={() => navigate('/#us')}
          onMapClick={() => navigate('/#map')}
          onSuggestionsClick={() => navigate('/#suggestions')}
          onPreregisterClick={() => navigate('/#preregister')}
        />
      </div>

      <section className="fixed left-0 top-0 z-0 h-screen w-full">
        <img
          src={site.banner.src}
          alt={site.banner.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 flex items-center justify-center px-4 text-center transition-all duration-300"
          style={{
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * -28}px)`,
          }}
        >
          <h1
            className="font-main text-5xl text-brand-white md:text-7xl"
            style={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.9)' }}
          >
            {site.nombre}
          </h1>
        </div>
      </section>

      <section className="relative z-10 mt-[100vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative min-h-screen">
          <div className="sticky top-0 z-0 h-screen">
            <img
              src={site.banner.src}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="relative z-20 -mt-[100vh] px-4 py-[50px] md:px-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-12">
              <div className="mx-auto max-w-5xl py-[50px] text-center">
                <p className="font-body text-brand-white md:text-3xl">
                  {site.descripcion}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-10">
                <h2 className="font-main flex justify-center text-4xl text-brand-white md:text-6xl">
                  Lo que te espera
                </h2>
                <div className="mt-8 flex flex-col gap-6">
                  {site.actividades?.map((actividad) => {
                    const { Icon } = getActivityIcon(actividad.nombre)

                    return (
                      <article
                        key={actividad.nombre}
                        className="rounded-[2rem] border border-white/10 bg-black/35 p-6 text-brand-white shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8"
                      >
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
                          <Icon className="h-24 w-24 shrink-0 text-brand-white md:h-32 md:w-32" />
                          <div>
                            <h3 className="font-secondary-italic text-3xl md:text-4xl">
                              {actividad.nombre}
                            </h3>
                            <p className="font-body mt-3 max-w-3xl leading-8 text-white/90 md:text-lg">
                              {actividad.descripcion}
                            </p>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              <div className="mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black/20 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <div className="grid h-full grid-cols-6 grid-rows-4 gap-1">
                  {visibleGallery.map((src, index) => {
                    const globalIndex = shuffledGallery.indexOf(src)
                    const isFeature = !showAllGallery && index === visibleGallery.length - 1
                    const layoutClass = showAllGallery ? galleryLayout.full[index] : galleryLayout.preview[index]

                    return (
                      <button
                        key={`${src}-${index}`}
                        type="button"
                        onClick={() => isFeature ? setShowAllGallery(true) : openImage(globalIndex)}
                        className={`group relative overflow-hidden rounded-lg ${layoutClass} text-left`}
                      >
                        <img
                          src={src}
                          alt={`Galeria de ${site.nombre}`}
                          className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${isFeature ? 'opacity-50' : 'opacity-100'}`}
                        />
                        {isFeature && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-secondary text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                              Ver mas
                            </span>
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                <iframe
                  title={`Mapa de ${site.nombre}`}
                  src={site.ubicacion}
                  className="h-[300px] w-full border-0 md:h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <ButtomBanner onLogoClick={() => navigate('/#home')} />
      </section>

      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md">
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/40 p-3 text-white transition hover:bg-black/70"
              aria-label="Cerrar galeria"
            >
              <LuX className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => setActiveImageIndex((current) => (current - 1 + shuffledGallery.length) % shuffledGallery.length)}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-4 text-white transition hover:bg-black/70"
              aria-label="Imagen anterior"
            >
              <LuChevronLeft className="h-7 w-7" />
            </button>

            <button
              type="button"
              onClick={() => setActiveImageIndex((current) => (current + 1) % shuffledGallery.length)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-4 text-white transition hover:bg-black/70"
              aria-label="Imagen siguiente"
            >
              <LuChevronRight className="h-7 w-7" />
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <img
                src={shuffledGallery[activeImageIndex]}
                alt={`Galeria ampliada de ${site.nombre}`}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default SiteInfo
