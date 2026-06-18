function SiteMap({ site }) {
  return (
    <div className="text-center">
      <h2 className="font-main mb-10 mt-[-2rem] text-4xl text-brand-white md:mb-10 md:text-6xl">
        Traza tu Ruta
      </h2>
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
        <iframe
          title={`Mapa de ${site.nombre}`}
          src={site.ubicacion}
          className="h-[300px] w-full border-0 md:h-[350px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default SiteMap
