import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'

function ProvinceZonesAndSites({ provinceData }) {
  const zones = provinceData?.targets?.filter((target) => target.type === 'zone') ?? []
  const provinceId = provinceData?.id ?? ''
  const directSiteIds = provinceData?.directSiteIds ?? []
  const fallbackSiteIds =
    directSiteIds.length > 0
      ? directSiteIds
      : Object.values(siteRegistry)
          .filter((site) => site.provinceId === provinceId)
          .map((site) => site.id)
  const sites = fallbackSiteIds
    .map((siteId) => siteRegistry[siteId])
    .filter(Boolean)
    .map((site) => ({
      id: site.id,
      nombre: site.nombre,
      descripcion: site.previewDescripcion || site.descripcion || '',
      imagen: site.banner?.src || site.thumbnail || site.src,
      ubicacion: site.previewUbicacion || site.ubicacion,
      type: 'site',
      siteId: site.id,
    }))

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 md:px-0">
      {zones.length > 0 && (
        <ProvinceTargetsGrid
          title="Zonas"
          targets={zones}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="zones-only"
        />
      )}
      {sites.length > 0 && (
        <ProvinceTargetsGrid
          title="Sitios Directos"
          targets={sites}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="sites-only"
        />
      )}
    </div>
  )
}

export default ProvinceZonesAndSites
