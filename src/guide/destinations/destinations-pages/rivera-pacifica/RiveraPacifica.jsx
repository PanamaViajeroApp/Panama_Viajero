import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProvinceSitesOnly from '../../components/destinations/ProvinceSitesOnly.jsx'
import Menu from '../../../components/menu/Menu.jsx'
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import OtherProvinces from '../../components/destinations/OtherProvinces.tsx'
import { provinceMedia } from '../provinceMedia.js'
import { riveraPacificaSiteRegistry } from './siteRegistry.js'

const riveraPacificaProvince = {
  id: 'rivera-pacifica',
  nombre: 'Rivera Pacífica',
  banner: {
    tipo: 'image',
    src: '/images/destinations/rivera-pacifica/bg-rivera-pacifica.webp',
    alt: 'Vista de Rivera Pacífica',
    poster: '/images/destinations/rivera-pacifica/bg-rivera-pacifica.webp',
  },
  descripcionCorta:
    'Un corredor costero compartido entre Coclé y Panamá Oeste, con playas extensas, olas consistentes y paisajes pensados para surf, descanso y recorridos de litoral.',
  directSiteIds: Object.keys(riveraPacificaSiteRegistry),
  displayMode: 'sites-only',
}

function RiveraPacifica() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="relative isolate text-brand-charcoal">
      <div className="fixed top-0 z-30 w-full">
        <Menu
          autoHideOnScroll
          onLogoClick={() => navigate('/#home')}
          onUsClick={() => navigate('/#us')}
          onMapClick={() => navigate('/#map')}
          onSuggestionsClick={() => navigate('/#suggestions')}
          onPreregisterClick={() => navigate('/#preregister')}
        />
      </div>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={riveraPacificaProvince.banner.src}
            alt={riveraPacificaProvince.banner.alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 flex min-h-screen items-center px-4 md:px-10">
          <div className="max-w-2xl rounded-xl border border-white/15 bg-black/35 p-8 text-brand-white backdrop-blur-md">
            <h1 className="font-main text-5xl md:text-7xl">Rivera Pacífica</h1>
            <p className="mt-5 text-lg leading-8 text-brand-white/90">
              {riveraPacificaProvince.descripcionCorta}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 bg-brand-charcoal pt-10 text-brand-white">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <ProvinceSitesOnly provinceData={riveraPacificaProvince} title="Lugares Turísticos" />
          <OtherProvinces provincias={provinceMedia} />
        </div>
      </section>

      <div className="relative z-20 mt-24">
        <BottomBanner onLogoClick={() => navigate('/#home')} />
      </div>
    </div>
  )
}

export default RiveraPacifica
