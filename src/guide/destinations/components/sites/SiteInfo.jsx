import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../../components/menu/Menu.jsx'
import ButtomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import SiteActivities from './SiteActivities.jsx'
import SiteMap from './SiteMap.jsx'
import DeferredSection from '../../../layout/layout-components/DeferredSection.jsx'
import { FiMapPin } from 'react-icons/fi'

function SiteInfo() {
  const navigate = useNavigate()
  const { siteId } = useParams()
  const site = siteId ? siteRegistry[decodeURIComponent(siteId)] ?? null : null

  if (!site) {
    return <main className="min-h-screen bg-brand-soft" />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-brand-charcoal">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-charcoal">
        <img
          src={site.banner.src}
          alt={site.banner.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="fixed top-0 z-50 w-full">
        <Menu
          autoHideOnScroll
          onLogoClick={() => navigate('/#home')}
          onUsClick={() => navigate('/#us')}
          onMapClick={() => navigate('/#map')}
          onSuggestionsClick={() => navigate('/#suggestions')}
          onPreregisterClick={() => navigate('/#preregister')}
        />
      </div>

      <section className="relative min-h-[82vh] overflow-hidden mt-5">
        <div className="relative md:flex  ms:flex-col  min-h-[82vh] items-center px-4 md:mt-15 mt-100 md:mb-0 max-w-8xl justify-between">
          <div className="max-w-md rounded-xl border border-white/10 bg-black/15 p-8 text-start shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm md:mt-0 mt-[-200px] md:ml-15">
            <h1
              className="font-main text-5xl text-brand-white md:text-6xl"
            >
              {site.nombre}
            </h1>
            <div className="flex items-center gap-1 text-[#f1f1f1e6]/85">
              <FiMapPin className="h-4 w-4 " />
              <p className="text-sm text-center font-secondary leading-6">
                {site.previewUbicacion ?? 'Ubicación no disponible'}
              </p>
            </div>
            <p className="mx-auto mt-5 max-w-2xl font-body leading-7 text-brand-white md:text-lg">
              {site.descripcion}
            </p>
          </div>
          <div className='md:mr-15 mt-20'><SiteMap site={site} /></div>
        </div>
      </section>

      <div className="relative min-h-screen">
        <div className="relative z-20 px-4 pt-16 md:px-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-50">
            <DeferredSection fallback={<div className="min-h-[420px]" />} rootMargin="300px">
              <SiteActivities site={site} />
            </DeferredSection>
          </div>
        </div>

        <div className="relative z-20 mt-40">
          <ButtomBanner onLogoClick={() => navigate('/#home')} />
        </div>
      </div>
    </main>
  )
}

export default SiteInfo
