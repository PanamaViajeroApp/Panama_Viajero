import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DeferredSection from './components/layout/DeferredSection.jsx'
import Menu from './components/menu/Menu.jsx'
import useHomeNavigation from './layout/functions/useHomeNavigation.js'
import './App.css'
import Logo from './img_test/LogoRectangular.svg'

const AboutUs = lazy(() => import('./components/about us/AboutUs.jsx'))
const Map = lazy(() => import('./layout/map/DinamicMap.jsx'))
const AleatorySuggestions = lazy(() => import('./layout/suggestion/Suggestions.tsx'))
const Preregister = lazy(() => import('./layout/preregister/Preregister.jsx'))
const BottomBanner = lazy(() => import('./components/bottombanner/Bottombanner.jsx'))
const BannerLayout = lazy(() => import('./layout/banner/BannerLayout.jsx'))
const CountdownModal = lazy(() => import('./layout/counter/Counter.jsx'))
const BocasDelToro = lazy(() => import('./data/panama/BocasDelToro/BocasDelToro.jsx'))
const Chiriqui = lazy(() => import('./data/panama/chiriqui/chiriqui.jsx'))
const Cocle = lazy(() => import('./data/panama/cocle/Cocle.jsx'))
const Colon = lazy(() => import('./data/panama/colon/Colon.jsx'))
const Darien = lazy(() => import('./data/panama/darien/Darien.jsx'))
const Herrera = lazy(() => import('./data/panama/herrera/Herrera.jsx'))
const LosSantos = lazy(() => import('./data/panama/lossantos/LosSantos.jsx'))
const Panama = lazy(() => import('./data/panama/panama/Panama.jsx'))
const PanamaOeste = lazy(() => import('./data/panama/panama_oeste/PanamaOeste.jsx'))
const Veraguas = lazy(() => import('./data/panama/veraguas/Veraguas.jsx'))
const GunaYala = lazy(() => import('./data/panama/comarca_guna_yala/GunaYala.jsx'))

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
        <div className="pointer-events-none absolute inset-0 z-20 mr-2 mb-2 flex items-end justify-end md:mr-5 md:mb-4">
          <img
            src={Logo}
            alt="Logo"
            fetchPriority="high"
            decoding="async"
            className="mb-1 h-7 w-auto max-w-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)] md:mb-none md:h-15 md:drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)]"
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

      <section id="map" ref={mapRef}>
        <DeferredSection fallback={<SectionFallback className="min-h-[560px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[560px]" />}>
            <Map />
          </Suspense>
        </DeferredSection>
      </section>

      <section id="suggestions" ref={suggestionsRef} className="scroll-mt-24 md:scroll-mt-28">
        <DeferredSection fallback={<SectionFallback className="min-h-[480px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[480px]" />}>
            <AleatorySuggestions />
          </Suspense>
        </DeferredSection>
      </section>

      <section id="preregister" ref={preregisterRef} className="scroll-mt-30">
        <DeferredSection fallback={<SectionFallback className="min-h-[440px]" />}>
          <Suspense fallback={<SectionFallback className="min-h-[440px]" />}>
            <Preregister />
          </Suspense>
        </DeferredSection>
      </section>

      <DeferredSection fallback={<SectionFallback className="min-h-[120px]" />} rootMargin="200px">
        <Suspense fallback={<SectionFallback className="min-h-[120px]" />}>
          <BottomBanner onLogoClick={scrollToHome} />
        </Suspense>
      </DeferredSection>
    </div>
  )
}

function GuideApp() {
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
      </Routes>
    </Suspense>
  )
}

export default GuideApp
