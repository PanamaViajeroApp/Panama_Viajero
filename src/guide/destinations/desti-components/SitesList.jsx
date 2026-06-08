import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { bocasSiteRegistry } from '../../sites/dataSites/bocas-del-toro/siteRegistry.js'

function SitesList({ provinceData }) {
  const targets = Object.values(bocasSiteRegistry)
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
    <ProvinceTargetsGrid
      title="Sitios Turísticos"
      targets={targets}
      fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
      mode="sites-only"
    />
  )
}

export default SitesList
