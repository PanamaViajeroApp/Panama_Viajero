import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { chiriquiSiteRegistry } from '../../sites/dataSites/chiriqui/siteRegistry.js'

function ChiriquiSitesList({ provinceData }) {
  const targets = Object.values(chiriquiSiteRegistry).map((site) => ({
    id: site.id,
    nombre: site.nombre,
    descripcion: site.previewDescripcion || '',
    imagen: site.banner?.src || site.thumbnail || site.src,
    ubicacion: site.previewUbicacion,
    type: 'site',
    siteId: site.id,
  }))

  return (
    <ProvinceTargetsGrid
      title="Zonas y Sitios"
      targets={targets}
      fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
      mode="sites-only"
    />
  )
}

export default ChiriquiSitesList
