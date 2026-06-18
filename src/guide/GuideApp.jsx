import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DeferredSection from './layout/layout-components/DeferredSection.jsx'
import Menu from './components/menu/Menu.jsx'
import useHomeNavigation from './layout/layout-components/functions/useHomeNavigation.js'
import './App.css'
import Logo from './img_test/LogoRectangular.svg'
import CountdownModal from './layout/layout-components/counter/Counter.jsx'

const AboutUs = lazy(() => import('./layout/layout-components/about-us/AboutUs.jsx'))
const Map = lazy(() => import('./layout/layout-components/map/DinamicMap.jsx'))
const Suggestions = lazy(() => import('./layout/layout-components/Suggestions.tsx'))
const SiteInfo = lazy(() => import('./destinations/components/sites/SiteInfo.jsx'))
const ZonePage = lazy(() => import('./destinations/components/zones/ZonePage.jsx'))
const Preregister = lazy(() => import('./layout/layout-components/preregister/Preregister.jsx'))
const BottomBanner = lazy(() => import('./components/bottombanner/Bottombanner.jsx'))
const BannerLayout = lazy(() => import('./layout/layout-components/banner/BannerLayout.jsx'))
const BocasDelToro = lazy(() => import('./destinations/destinations-pages/bocas-del-toro/BocasDelToro.jsx'))
const Chiriqui = lazy(() => import('./destinations/destinations-pages/chiriqui/Chiriqui.jsx'))
const Cocle = lazy(() => import('./destinations/destinations-pages/cocle/Cocle.jsx'))
const Colon = lazy(() => import('./destinations/destinations-pages/colon/Colon.jsx'))
const Darien = lazy(() => import('./destinations/destinations-pages/darien/Darien.jsx'))
const Herrera = lazy(() => import('./destinations/destinations-pages/herrera/Herrera.jsx'))
const LosSantos = lazy(() => import('./destinations/destinations-pages/los-santos/LosSantos.jsx'))
const Panama = lazy(() => import('./destinations/destinations-pages/panama/Panama.jsx'))
const PanamaOeste = lazy(() => import('./destinations/destinations-pages/panama-oeste/PanamaOeste.jsx'))
const Veraguas = lazy(() => import('./destinations/destinations-pages/veraguas/Veraguas.jsx'))
const GunaYala = lazy(() => import('./destinations/destinations-pages/comarca-guna-yala/GunaYala.jsx'))
const RiveraPacifica = lazy(() => import('./destinations/destinations-pages/rivera-pacifica/RiveraPacifica.jsx'))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-soft px-6 text-center text-brand-charcoal">
      <p className="text-sm uppercase tracking-[0.2em]">Cargando provincia...</p>
    </div>
  )
}

function SectionFallback({ className = '' }) {
  return <div aria-hidden="true" className={className} />
}

function GuideHome() {
  const {
    homeRef,
    mapRef,
    preregisterRef,
    scrollToHome,
    scrollToMap,
    scrollToPreregister,
    scrollToSuggestions,
    scrollToUs,
    setShowCountdown,
    showCountdown,
    showMenu,
    suggestionsRef,
    usRef,
  } = useHomeNavigation()

  return (
    <div className="relative bg-brand-soft text-brand-charcoal">
      {showCountdown && (
        <Suspense fallback={null}>
          <CountdownModal
            onClose={() => setShowCountdown(false)}
            onPreregister={scrollToPreregister}
          />
        </Suspense>
      )}

      <div
        className={`fixed top-0 z-[200] w-full transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Menu
          onLogoClick={scrollToHome}
          onPreregisterClick={scrollToPreregister}
          onMapClick={scrollToMap}
          onUsClick={scrollToUs}
          onSuggestionsClick={scrollToSuggestions}
        />
      </div>

      <section id="home" ref={homeRef} className="relative">
        <BannerLayout />
        <div className="pointer-events-none absolute inset-0 z-20 mr-2 mb-2 flex items-end justify-start md:mr-5 md:mb-4">
          <img
            src={Logo}
            alt="Logo"
            fetchPriority="high"
            decoding="async"
            className="mb-15 ml-25 h-7 md:h-35 opacity-95 w-auto max-w-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)] md:mb-none  md:drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)]"
          />
        </div>
      </section>

      <section id="us" ref={usRef} className="scroll-mt-7 md:scroll-mt-20">
        <DeferredSection fallback={<SectionFallback className="min-h-[320px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[320px]" />}>
            <AboutUs />
          </Suspense>
        </DeferredSection>
      </section>

      <section id="map" ref={mapRef} className='max-w-full '>
        <DeferredSection fallback={<SectionFallback className="min-h-[560px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[560px]" />}>
            <Map />
          </Suspense>
        </DeferredSection>
      </section>

      <section id="suggestions" ref={suggestionsRef} className="scroll-mt-24 md:scroll-mt-28 mt-[-50px]">
        <DeferredSection fallback={<SectionFallback className="min-h-[480px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[480px]" />}>
            <Suggestions />
          </Suspense>
        </DeferredSection>
      </section>

      <section id="preregister" ref={preregisterRef} className="scroll-mt-30 ">
        <DeferredSection fallback={<SectionFallback className="min-h-[440px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[440px]" />}>
            <Preregister />
          </Suspense>
        </DeferredSection>
      </section>

      <DeferredSection fallback={<SectionFallback className="min-h-[120px]" />} rootMargin="200px">
        <Suspense fallback={<SectionFallback className="min-h-[120px]" />}>
          <div className="relative z-10 shadow">
            <BottomBanner onLogoClick={scrollToHome} />
          </div>
        </Suspense>
      </DeferredSection>
    </div>
  )
}

function GuideApp() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<GuideHome />} />
        <Route path="/provincias/bocas-del-toro" element={<BocasDelToro />} />
        <Route path="/provincias/chiriqui" element={<Chiriqui />} />
        <Route path="/provincias/cocle" element={<Cocle />} />
        <Route path="/provincias/colon" element={<Colon />} />
        <Route path="/provincias/darien" element={<Darien />} />
        <Route path="/provincias/herrera" element={<Herrera />} />
        <Route path="/provincias/los-santos" element={<LosSantos />} />
        <Route path="/provincias/panama" element={<Panama />} />
        <Route path="/provincias/panama-oeste" element={<PanamaOeste />} />
        <Route path="/provincias/veraguas" element={<Veraguas />} />
        <Route path="/provincias/comarca-guna-yala" element={<GunaYala />} />
        <Route path="/rivera-pacifica" element={<RiveraPacifica />} />
        <Route path="/sitios/:siteId" element={<SiteInfo />} />
        <Route path="/zonas/:zoneId" element={<ZonePage />} />
      </Routes>
    </Suspense>
  )
}

export default GuideApp
