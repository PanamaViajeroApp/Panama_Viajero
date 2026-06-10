import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'

function ChiriquiSitesList({ provinceData }) {
  const targets = provinceData.targets?.map((zone) => ({
    ...zone,
    type: 'zone',
  })) ?? []

  return (
    <ProvinceTargetsGrid
      title="Zonas"
      targets={targets}
      fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
      mode="zones-only"
    />
  )
}

export default ChiriquiSitesList
