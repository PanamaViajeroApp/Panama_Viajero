import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'

function ProvinceSitesOnly({ provinceData, title = 'Sitios Turisticos' }) {
  const provinceId = provinceData?.id ?? ''
  const directSiteIds = provinceData?.directSiteIds ?? []
  const fallbackSiteIds =
    directSiteIds.length > 0
      ? directSiteIds
      : Object.values(siteRegistry)
          .filter((site) => site.provinceId === provinceId)
          .map((site) => site.id)
  const targets = fallbackSiteIds
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
    <ProvinceTargetsGrid
      title={title}
      targets={targets}
      fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
      mode="sites-only"
    />
  )
}

export default ProvinceSitesOnly
