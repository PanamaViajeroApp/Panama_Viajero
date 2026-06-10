function SiteDescription({ description }) {
  return (
    <div className="relative mx-auto mt-[-400px] mb-40 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,0,0,0.72),rgba(73,86,162,0.34)_48%,rgba(205,46,76,0.24))] p-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 " />
      <p className="font-body relative text-brand-white md:text-3xl">
        {description}
      </p>
    </div>
  )
}

export default SiteDescription
