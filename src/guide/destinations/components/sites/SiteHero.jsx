function SiteHero({ site, scrollProgress }) {
  return (
    <section className="fixed left-0 top-0 z-0 h-screen w-full">
      <img
        src={site.banner.src}
        alt={site.banner.alt}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 flex items-center justify-center px-4 text-center transition-all duration-300"
        style={{
          opacity: 1 - scrollProgress,
          transform: `translateY(${scrollProgress * -28}px)`,
        }}
      >
        <h1
          className="font-main text-5xl text-brand-white md:text-7xl"
          style={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.9)' }}
        >
          {site.nombre}
        </h1>
      </div>
    </section>
  )
}

export default SiteHero
