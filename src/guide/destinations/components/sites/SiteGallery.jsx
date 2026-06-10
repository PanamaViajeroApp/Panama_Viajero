import { useMemo, useRef, useState } from 'react'
import { previewGalleryLayouts } from './galleryLayouts.js'

function getRandomGalleryLayout() {
  const randomIndex = Math.floor(Math.random() * previewGalleryLayouts.length)
  return previewGalleryLayouts[randomIndex]
}

function SiteGallery({ gallery = [], siteName }) {
  const galleryRef = useRef(null)
  const [showAllGallery, setShowAllGallery] = useState(false)
  const base = import.meta.env.BASE_URL || '/'

  const shuffledGallery = useMemo(() => {
    const seeded = [...gallery]
    return seeded.sort(() => Math.random() - 0.5)
  }, [gallery])

  const previewLayout = useMemo(() => getRandomGalleryLayout(), [])
  const canExpand = shuffledGallery.length > 6
  const visibleGallery = showAllGallery || !canExpand
    ? shuffledGallery
    : [...shuffledGallery.slice(0, 5), shuffledGallery[shuffledGallery.length - 1]]

  const collapseGallery = () => {
    setShowAllGallery(false)
    window.requestAnimationFrame(() => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  if (shuffledGallery.length === 0) return null

  return (
    <div className="text-center">
      <h2 className="font-main mb-10 mt-[-2rem] text-4xl text-brand-white md:mb-10 md:text-6xl">
        Descubre el Enfoque
      </h2>
      <div ref={galleryRef} className={`mx-auto w-full rounded-xl border border-white/10 bg-black/20 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm ${showAllGallery ? 'max-w-7xl' : 'h-[400px] max-w-6xl overflow-hidden'}`}>
        <div className={showAllGallery ? 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid h-full grid-cols-6 grid-rows-4 gap-1'}>
          {visibleGallery.map((src, index) => {
            const isFeature = canExpand && !showAllGallery && index === visibleGallery.length - 1
            const layoutClass = showAllGallery ? '' : previewLayout[index]
            const tileClass = showAllGallery ? 'aspect-[5/3]' : layoutClass
            const imageClass = showAllGallery
              ? 'h-full w-full object-cover transition duration-700 group-hover:scale-105'
              : `h-full w-full object-cover transition duration-700 group-hover:scale-110 ${isFeature ? 'opacity-50' : 'opacity-100'}`

            const resolvedSrc = `${base}${(src || '').replace(/^\/+/, '')}`
            function handleError(e) {
              if (e?.target && e.target.src !== src) {
                e.target.src = src
              }
            }

            const imageContent = (
              <>
                <img
                  src={resolvedSrc}
                  alt={`Galeria de ${siteName}`}
                  onError={handleError}
                  className={imageClass}
                />
                {isFeature && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-secondary text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                      Ver más
                    </span>
                  </div>
                )}
              </>
            )

            return isFeature ? (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setShowAllGallery(true)}
                className={`group relative overflow-hidden rounded-lg ${tileClass} text-left`}
              >
                {imageContent}
              </button>
            ) : (
              <div
                key={`${src}-${index}`}
                className={`group relative overflow-hidden rounded-lg ${tileClass}`}
              >
                {imageContent}
              </div>
            )
          })}
          {showAllGallery && canExpand && (
            <button
              type="button"
              onClick={collapseGallery}
              className="group relative aspect-[5/3] overflow-hidden rounded-lg text-left"
            >
              <img
                src={shuffledGallery[0]}
                alt=""
                className="h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-secondary text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  Ver menos
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SiteGallery
