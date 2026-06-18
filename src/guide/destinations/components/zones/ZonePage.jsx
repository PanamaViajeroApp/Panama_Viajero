import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Menu from '../../../components/menu/Menu.jsx'
import ButtomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import ZoneVideo from './ZoneVideo.jsx'
import ProvinceTargetsGrid from '../destinations/ProvinceTargetsGrid.jsx'
import OtherProvinces from '../destinations/OtherProvinces.tsx'
import { zoneRegistry } from '../../destinations-pages/zoneRegistry.js'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import { provincias as chiriquiProvincias } from '../../destinations-pages/chiriqui/ChiriquiData.js'
import { provincias as colonProvincias } from '../../destinations-pages/colon/ColonData.js'
import { provincias as cocleProvincias } from '../../destinations-pages/cocle/CocleData.js'
import { provincias as panamaProvincias } from '../../destinations-pages/panama/PanamaData.js'
import { provincias as panamaOesteProvincias } from '../../destinations-pages/panama-oeste/PanamaOesteData.js'
import { provincias as veraguasProvincias } from '../../destinations-pages/veraguas/VeraguasData.js'

const provinceDataRegistry = {
  chiriqui: chiriquiProvincias[0],
  colon: colonProvincias[0],
  cocle: cocleProvincias[0],
  panama: panamaProvincias[0],
  'panama-oeste': panamaOesteProvincias[0],
  veraguas: veraguasProvincias[0],
}

function ZonePage() {
  const { zoneId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [scrollProgress, setScrollProgress] = useState(0)

  const decodedZoneId = zoneId ? decodeURIComponent(zoneId) : ''
  const zone = zoneRegistry[decodedZoneId] ?? zoneRegistry[zoneId] ?? null
  const searchProvinceId = new URLSearchParams(location.search).get('province')
  const provinceId = searchProvinceId || zone?.provinceId || zone?.provinceIds?.[0] || 'chiriqui'
  const provinceData = provinceDataRegistry[provinceId] ?? chiriquiProvinces[0]
  const fallbackTarget =
    provinceData?.targets?.find((target) => target.zoneId === decodedZoneId || target.id === decodedZoneId) ?? null
  const safeHeading = zone?.nombre || fallbackTarget?.nombre || 'Zona'
  const safeDescription = zone?.descripcion || fallbackTarget?.descripcion || provinceData?.descripcionCorta || ''
  const sitios = (zone?.sitios || []).map((id) => siteRegistry[id]).filter(Boolean)

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

  if (!zone) {
    return (
      <main className="min-h-screen bg-brand-charcoal px-6 py-20 text-center text-brand-white">
        <h1 className="text-3xl font-bold">Zona no encontrada</h1>
        <p className="mt-4">{safeHeading}</p>
      </main>
    )
  }

  const toTarget = (s) => ({
    id: s.id,
    nombre: s.nombre,
    descripcion: s.previewDescripcion || s.descripcion || '',
    previewDescripcion: s.previewDescripcion || s.descripcion || '',
    imagen: s.imagen || s.banner?.src || s.thumbnail || s.src,
    ubicacion: s.previewUbicacion || s.ubicacion || `${provinceData.nombre}, ${s.nombre}`,
    type: 'site',
    siteId: s.id,
  })

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-brand-charcoal text-brand-white">
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

      <ZoneVideo provinceData={provinceData} zone={zone} fixedBackground scrollProgress={scrollProgress} />

      <section className="relative z-10 pt-[100vh]">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <div className="mx-auto mb-50 max-w-4xl rounded-[1.75rem] border border-white/15 bg-black/25 px-6 py-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md md:px-10 md:py-8">
            <p className="font-secondary-italic text-xl leading-relaxed text-brand-white/95 md:text-2xl md:leading-[1.9rem]">
              {safeDescription}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-12">
            <ProvinceTargetsGrid
              title="Lugares turísticos"
              targets={sitios.map(toTarget)}
              fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
              mode="sites-only"
            />
          </div>

          <OtherProvinces />

          {!sitios.length && (
            <div className="py-10 text-center text-brand-white/90">
              <h2 className="text-2xl font-bold">{safeHeading}</h2>
              <p className="mt-3">No hay sitios cargados para esta zona.</p>
            </div>
          )}
        </div>
      </section>

      <div className="relative z-20 mt-24">
        <ButtomBanner onLogoClick={() => navigate('/#home')} />
      </div>
    </main>
  )
}

export default ZonePage
