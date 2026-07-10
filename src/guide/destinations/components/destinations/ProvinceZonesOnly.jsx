import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'

function ProvinceZonesOnly({ provinceData, title = 'Costas', selectedActivity = null, breadcrumbSourceLabel = 'Mapa' }) {
  const targets = provinceData?.targets?.filter((target) => target.type === 'zone') ?? []

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-0">
      <ProvinceTargetsGrid
        title={title}
      targets={targets}
      fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
      mode="zones-only"
      provinceId={provinceData.id}
      provinceLabel={provinceData?.nombre}
      selectedActivity={selectedActivity}
      breadcrumbSourceLabel={breadcrumbSourceLabel}
    />
  </section>
  )
}

export default ProvinceZonesOnly
