import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import LosSantos from '../../prov-pages/LosSantos.jsx'
import ChiriquiSvg from '../../prov-pages/ChiriquiSvg.jsx'
import LineaBocasDelToroSvg from '../../prov-pages/LineaBocasDelToroSvg.jsx'
import LineaChiriquiSvg from '../../prov-pages/LineaChiriquiSvg.jsx'
import BocasDelToroSvg from '../../prov-pages/BocasDelToroSvg.jsx'
import Cocle from '../../prov-pages/CocleSvg.jsx'
import Colon from '../../prov-pages/Colon.jsx'
import GunaYala from '../../prov-pages/GunaYalaSvg.jsx'
import Darien from '../../prov-pages/Darien.jsx'
import Veraguas from '../../prov-pages/VeraguasSvg.jsx'
import Herrera from '../../prov-pages/HerreraSvg.jsx'
import Panama from '../../prov-pages/PanamaSvg.jsx'
import PanamaOeste from '../../prov-pages/PanamaOesteSvg.jsx'
import LineaCocleSvg from '../../prov-pages/LineaCocleSvg.jsx'
import LineaColonSvg from '../../prov-pages/LineaColonSvg.jsx'
import LineaDarienSvg from '../../prov-pages/LineaDarienSvg.jsx'
import LineaGunaYalaSvg from '../../prov-pages/LineaGunaYalaSvg.jsx'
import LineaHerreraSvg from '../../prov-pages/LineaHerreraSvg.jsx'
import LineaLosSantosSvg from '../../prov-pages/LineaLosSantosSvg.jsx'
import LineaPanamaSvg from '../../prov-pages/LineaPanamaSvg.jsx'
import LineaPanamaOesteSvg from '../../prov-pages/LineaPanamaOesteSvg.jsx'
import LineaVeraguasSvg from '../../prov-pages/LineaVeraguasSvg.jsx'

const provinces = [
  { component: LosSantos, alt: 'Los Santos', hoverKey: 'los-santos', to: '/provincias/los-santos#video', top: '68.87%', left: '39.90%', width: '11.71%', zIndex: 24 },
  { component: ChiriquiSvg, alt: 'Chiriquí', hoverKey: 'chiriqui', to: '/provincias/chiriqui#video', top: '28.5%', left: '-0.20%', width: '25.66%' },
  { component: BocasDelToroSvg, alt: 'Bocas del Toro', hoverKey: 'bocas-del-toro', to: '/provincias/bocas-del-toro#video', top: '-3%', left: '0.50%', width: '32%' },
  { component: Cocle, alt: 'Coclé', hoverKey: 'cocle', to: '/provincias/cocle#video', top: '12%', left: '34.75%', width: '21%' },
  { component: Colon, alt: 'Colón', hoverKey: 'colon', to: '/provincias/colon#video', top: '0%', left: '37.56%', width: '30.05%', zIndex: 31 },
  { component: GunaYala, alt: 'Guna Yala (San Blas)', hoverKey: 'guna-yala', to: '/provincias/comarca-guna-yala#video', top: '7.08%', left: '64.68%', width: '31.22%', zIndex: 23 },
  { component: Darien, alt: 'Darién', hoverKey: 'darien', to: '/provincias/darien#video', top: '18.5%', left: '77.2%', width: '23.5%' },
  { component: Veraguas, alt: 'Veraguas', hoverKey: 'veraguas', to: '/provincias/veraguas#video', top: '26%', left: '20.85%', width: '23.60%', zIndex: 22 },
  { component: Herrera, alt: 'Herrera', hoverKey: 'herrera', to: '/provincias/herrera#video', top: '58.50%', left: '28.85%', width: '20.85%', zIndex: 23 },
  { component: PanamaOeste, alt: 'Panamá Oeste', hoverKey: 'panama-oeste', to: '/provincias/panama-oeste#video', top: '12.2%', left: '46.35%', width: '15.5%', zIndex: 32 },
  { component: Panama, alt: 'Panamá', hoverKey: 'panama', to: '/provincias/panama#video', top: '0%', left: '56.5%', width: '30.80%', zIndex: 29 },
]

const externalProvinceDecorations = [
  { alt: 'Bocas del Toro', hoverKey: 'bocas-del-toro', to: '/provincias/bocas-del-toro#video', lineComponent: LineaBocasDelToroSvg, lineTop: '13%', lineLeft: '13.8%', lineWidth: '4%', buttonTop: '13%', buttonLeft: '16.5%', color: 'text-brand-charcoal/85' },
  { alt: 'Chiriquí', hoverKey: 'chiriqui', to: '/provincias/chiriqui#video', lineComponent: LineaChiriquiSvg, lineTop: '51.9%', lineLeft: '7.4%', lineWidth: '4%', buttonTop: '62.6%', buttonLeft: '10.2%', color: 'text-brand-charcoal/65' },
  { alt: 'Veraguas', hoverKey: 'veraguas', to: '/provincias/veraguas#video', lineComponent: LineaVeraguasSvg, lineTop: '71.4%', lineLeft: '25.4%', lineWidth: '4%', buttonTop: '86%', buttonLeft: '20.7%', color: 'text-brand-charcoal/65' },
  { alt: 'Los Santos', hoverKey: 'los-santos', to: '/provincias/los-santos#video', lineComponent: LineaLosSantosSvg, lineTop: '85%', lineLeft: '48.4%', lineWidth: '4%', buttonTop: '95%', buttonLeft: '51.2%', color: 'text-brand-charcoal/65' },
  { alt: 'Herrera', hoverKey: 'herrera', to: '/provincias/herrera#video', lineComponent: LineaHerreraSvg, lineTop: '64.7%', lineLeft: '43%', lineWidth: '4%', buttonTop: '64.8%', buttonLeft: '46.8%', color: 'text-brand-charcoal/65' },
  { alt: 'Coclé', hoverKey: 'cocle', to: '/provincias/cocle#video', lineComponent: LineaCocleSvg, lineTop: '43%', lineLeft: '48.5%', lineWidth: '4%', buttonTop: '56.6%', buttonLeft: '51.3%', color: 'text-brand-charcoal/65' },
  { alt: 'Colón', hoverKey: 'colon', to: '/provincias/colon#video', lineComponent: LineaColonSvg, lineTop: '4.5%', lineLeft: '40.7%', lineWidth: '3%', buttonTop: '4.4%', buttonLeft: '43.4%', color: 'text-brand-charcoal/85' },
  { alt: 'Panamá Oeste', hoverKey: 'panama-oeste', to: '/provincias/panama-oeste#video', lineComponent: LineaPanamaOesteSvg, lineTop: '35.5%', lineLeft: '53%', lineWidth: '4%', buttonTop: '49.5%', buttonLeft: '55.9%', color: 'text-brand-charcoal/85' },
  { alt: 'Panamá', hoverKey: 'panama', to: '/provincias/panama#video', lineComponent: LineaPanamaSvg, lineTop: '23%', lineLeft: '61.1%', lineWidth: '4%', buttonTop: '37.3%', buttonLeft: '64%', color: 'text-brand-charcoal/85' },
  { alt: 'Guna Yala (San Blas)', hoverKey: 'guna-yala', to: '/provincias/comarca-guna-yala#video', lineComponent: LineaGunaYalaSvg, lineTop: '3.1%', lineLeft: '81%', lineWidth: '5%', buttonTop: '5.4%', buttonLeft: '84.6%', color: 'text-brand-charcoal/85' },
  { alt: 'Darién', hoverKey: 'darien', to: '/provincias/darien#video', lineComponent: LineaDarienSvg, lineTop: '67.8%', lineLeft: '77.3%', lineWidth: '4%', buttonTop: '82.6%', buttonLeft: '74.3%', color: 'text-brand-charcoal/85' },
]

function Map() {
  const [activeProvince, setActiveProvince] = useState(null)
  const mapRef = useRef(null)
  const navigate = useNavigate()
  const activeScale = 1.1

  return (
    <div className="mx-auto flex max-w-full flex-col items-center pt-20 pb-20 text-center">
      <div className="w-full max-w-6xl rounded-xl">
        <div className="mb-10 flex flex-col text-center">
          <label className="font-secondary-italic text-3xl text-brand-red">¡Conoce Panamá como nunca antes lo viste!</label>
        </div>

        <div ref={mapRef} className="relative mb-6 aspect-[1025/424]">
          {externalProvinceDecorations.map((item) => {
            const LineComponent = item.lineComponent
            return (
              <div
                key={`${item.hoverKey}-line`}
                className="pointer-events-none absolute z-0"
                style={{
                  top: item.lineTop,
                  left: item.lineLeft,
                  width: item.lineWidth,
                }}
              >
                <LineComponent className="h-auto w-full" />
              </div>
            )
          })}

          {provinces.map((province) => (
            <div
              key={province.hoverKey}
              className="pointer-events-none absolute transition duration-300 ease-out drop-shadow-[0_3px_2px_rgba(77,76,76,0.50)]"
              style={{
                top: province.top,
                left: province.left,
                width: province.width,
                zIndex: activeProvince === province.hoverKey ? 50 : (province.zIndex ?? 1),
                transform: activeProvince === province.hoverKey ? `scale(${activeScale})` : 'scale(1)',
                transformOrigin: 'center center',
              }}
            >
              <province.component
                className="pointer-events-auto h-auto w-full"
                onMouseEnter={() => setActiveProvince(province.hoverKey)}
                onMouseLeave={() => setActiveProvince(null)}
                onClick={() => navigate(province.to)}
              />
            </div>
          ))}

          {externalProvinceDecorations.map((item) => (
            <button
              key={`${item.hoverKey}-button`}
              type="button"
              className="font-secondary absolute z-[60] cursor-pointer whitespace-nowrap bg-transparent leading-none tracking-wide transition-transform duration-300 text-[0.50rem] md:text-[0.85rem]"
              style={{
                top: item.buttonTop,
                left: item.buttonLeft,
                color: item.color,
                transform: activeProvince === item.hoverKey ? `scale(${activeScale})` : 'scale(1)',
              }}
              onMouseEnter={() => setActiveProvince(item.hoverKey)}
              onMouseLeave={() => setActiveProvince(null)}
              onClick={() => navigate(item.to)}
            >
              {item.alt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Map
