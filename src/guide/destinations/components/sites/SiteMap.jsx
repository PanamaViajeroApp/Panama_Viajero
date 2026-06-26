function SiteMap({ site }) {
  return (
    <div id="site-map" className="text-center">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border-3 border-[#ffffff]/30">
        <iframe
          title={`Mapa de ${site.nombre}`}
          src={site.ubicacion}
          className="h-[300px] w-full border-0 md:h-[390px] md:w-150"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default SiteMap
