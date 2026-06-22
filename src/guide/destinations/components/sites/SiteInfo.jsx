import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../../components/menu/Menu.jsx'
import ButtomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import SiteActivities from './SiteActivities.jsx'
import SiteHero from './SiteHero.jsx'
import SiteMap from './SiteMap.jsx'
import DeferredSection from '../../../layout/layout-components/DeferredSection.jsx'

function SiteInfo() {
  const navigate = useNavigate()
  const { siteId } = useParams()
  const site = siteId ? siteRegistry[decodeURIComponent(siteId)] ?? null : null
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const next = Math.min(window.scrollY / 320, 1)
      setScrollProgress(next)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!site) {
    return <main className="min-h-screen bg-brand-soft" />
  }

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

      <SiteHero site={site} scrollProgress={scrollProgress} />
      

      <section className="relative z-10 mt-[115vh] shadow-[0_0_125px_99px_rgba(0,0,0,0.36)]">
        <div className="relative min-h-screen">
          <div className=" top-0 z-0 h-screen">
            <div className="absolute inset-0 bg-black/34" />
          </div>

          <div className="relative z-20 px-4 md:px-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-50">
              <DeferredSection fallback={<div className="min-h-[420px]" />} rootMargin="300px">
                <SiteActivities activities={site.actividades} featuredImage={site.banner.src} />
              </DeferredSection>
              <DeferredSection fallback={<div className="min-h-[360px]" />} rootMargin="350px">
                <SiteMap site={site} />
              </DeferredSection>
            </div>
          </div>

          <div className="relative z-20 mt-40">
            <ButtomBanner onLogoClick={() => navigate('/#home')} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SiteInfo
