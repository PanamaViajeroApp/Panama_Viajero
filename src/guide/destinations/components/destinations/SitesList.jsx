import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'

function SitesList({ provinceData }) {
  const zoneTargets = provinceData?.targets ?? []
  const provinceId = provinceData?.id ?? ''
  const directSiteIds = provinceData?.directSiteIds ?? []
  const fallbackSiteIds =
    directSiteIds.length > 0
      ? directSiteIds
      : Object.values(siteRegistry)
          .filter((site) => site.provinceId === provinceId)
          .map((site) => site.id)
  const siteTargets = fallbackSiteIds
    .map((siteId) => siteRegistry[siteId])
    .filter(Boolean)
    .map((site) => ({
      id: site.id,
      nombre: site.nombre,
      descripcion: site.previewDescripcion || '',
      imagen: site.banner?.src || site.thumbnail || site.src,
      ubicacion: site.previewUbicacion,
      type: 'site',
      siteId: site.id,
    }))

  return (
    <div className="flex flex-col gap-12">
      {zoneTargets.length > 0 && (
        <ProvinceTargetsGrid
          title="Zonas"
          targets={zoneTargets}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="zones-only"
        />
      )}

      {siteTargets.length > 0 && (
        <ProvinceTargetsGrid
          title="Sitios Directos"
          targets={siteTargets}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="sites-only"
        />
      )}
    </div>
  )
}

export default SitesList
