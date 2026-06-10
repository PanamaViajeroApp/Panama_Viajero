import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../../components/menu/Menu.jsx'
import ButtomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import ZoneVideo from './ZoneVideo.jsx'
import ProvinceTargetsGrid from '../destinations/ProvinceTargetsGrid.jsx'
import { zoneRegistry } from '../../destinations-pages/zoneRegistry.js'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import { provincias as chiriquiProvincias } from '../../destinations-pages/chiriqui/ChiriquiData.js'
import { provincias as cocleProvincias } from '../../destinations-pages/cocle/CocleData.js'
import { provincias as panamaOesteProvincias } from '../../destinations-pages/panama-oeste/PanamaOesteData.js'

const provinceDataRegistry = {
  chiriqui: chiriquiProvincias[0],
  cocle: cocleProvincias[0],
  'panama-oeste': panamaOesteProvincias[0],
}

function ZonePage() {
  const { zoneId } = useParams()
  const navigate = useNavigate()
  const [scrollProgress, setScrollProgress] = useState(0)

  const decodedZoneId = zoneId ? decodeURIComponent(zoneId) : ''
  const zone = zoneRegistry[decodedZoneId] ?? zoneRegistry[zoneId] ?? null
  const provinceId = zone?.provinceIds?.[0] ?? zone?.provinceId ?? 'chiriqui'
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

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <p className="mb-50 text-center text-2xl font-secondary-italic text-brand-white/95 backdrop-blur-sm">
            {safeDescription}
          </p>

          <div className="mt-8 flex flex-col gap-12">
            <ProvinceTargetsGrid
              title="Sitios Turisticos"
              targets={sitios.map(toTarget)}
              fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
              mode="sites-only"
            />
          </div>

          {!sitios.length && (
            <div className="py-10 text-center text-brand-white/90">
              <h2 className="text-2xl font-bold">{safeHeading}</h2>
              <p className="mt-3">No hay sitios cargados para esta zona.</p>
            </div>
          )}
        </div>
      </section>

      <div className="mt-24">
        <ButtomBanner onLogoClick={() => navigate('/#home')} />
      </div>
    </main>
  )
}

export default ZonePage
