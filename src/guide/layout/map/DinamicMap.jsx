import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LosSantos from '../../components/prov_pages/LosSantos.jsx';
import ChiriquiSvg from '../../components/prov_pages/ChiriquiSvg.jsx';
import LineaBocasDelToroSvg from '../../components/prov_pages/LineaBocasDelToroSvg.jsx';
import LineaChiriquiSvg from '../../components/prov_pages/LineaChiriquiSvg.jsx';
import BocasDelToroSvg from '../../components/prov_pages/BocasDelToroSvg.jsx';
import Cocle from '../../components/prov_pages/CocleSvg.jsx';
import Colon from '../../components/prov_pages/Colon.jsx';
import GunaYala from '../../components/prov_pages/GunaYalaSvg.jsx';
import Darien from '../../components/prov_pages/Darien.jsx';
import Veraguas from '../../components/prov_pages/VeraguasSvg.jsx';
import Herrera from '../../components/prov_pages/HerreraSvg.jsx';
import Panama from '../../components/prov_pages/PanamaSvg.jsx';
import PanamaOeste from '../../components/prov_pages/PanamaOesteSvg.jsx';
import LineaCocleSvg from '../../components/prov_pages/LineaCocleSvg.jsx';
import LineaColonSvg from '../../components/prov_pages/LineaColonSvg.jsx';
import LineaDarienSvg from '../../components/prov_pages/LineaDarienSvg.jsx';
import LineaGunaYalaSvg from '../../components/prov_pages/LineaGunaYalaSvg.jsx';
import LineaHerreraSvg from '../../components/prov_pages/LineaHerreraSvg.jsx';
import LineaLosSantosSvg from '../../components/prov_pages/LineaLosSantosSvg.jsx';
import LineaPanamaSvg from '../../components/prov_pages/LineaPanamaSvg.jsx';
import LineaPanamaOesteSvg from '../../components/prov_pages/LineaPanamaOesteSvg.jsx';
import LineaVeraguasSvg from '../../components/prov_pages/LineaVeraguasSvg.jsx';

const provinces = [
    { component: LosSantos, alt: 'Los Santos', to: '/provincias/los-santos#video', top: '68.87%', left: '39.90%', width: '11.71%', zIndex: 24, useExternalTrigger: true },
    { component: ChiriquiSvg, alt: 'Chiriquí', to: '/provincias/chiriqui#video', top: '28.5%', left: '-0.20%', width: '25.66%', useExternalTrigger: true },
    { component: BocasDelToroSvg, alt: 'Bocas del Toro', to: '/provincias/bocas-del-toro#video', top: '-3%', left: '0.50%', width: '32%', useExternalTrigger: true },
    { component: Cocle, alt: 'Coclé', to: '/provincias/cocle#video', top: '12%', left: '34.75%', width: '21%', useExternalTrigger: true },
    { component: Colon, alt: 'Colón', to: '/provincias/colon#video', top: '0%', left: '37.56%', width: '30.05%', zIndex: 31, useExternalTrigger: true, hoverScale: true },
    { component: GunaYala, alt: 'Guna Yala (San Blas)', to: '/provincias/comarca-guna-yala#video', top: '7.08%', left: '64.68%', width: '31.22%', zIndex: 23, useExternalTrigger: true },
    { component: Darien, alt: 'Darién', to: '/provincias/darien#video', top: '18.5%', left: '77.2%', width: '23.5%', useExternalTrigger: true },
    { component: Veraguas, alt: 'Veraguas', to: '/provincias/veraguas#video', top: '26%', left: '20.85%', width: '23.60%', zIndex: 22, useExternalTrigger: true },
    { component: Herrera, alt: 'Herrera', to: '/provincias/herrera#video', top: '58.50%', left: '28.85%', width: '20.85%', zIndex: 23, useExternalTrigger: true },
    { component: PanamaOeste, alt: 'Panamá Oeste', to: '/provincias/panama-oeste#video', top: '12.2%', left: '46.35%', width: '15.5%', zIndex: 32, useExternalTrigger: true, hoverScale: true },
    { component: Panama, alt: 'Panamá', to: '/provincias/panama#video', top: '0%', left: '56.5%', width: '30.80%', zIndex: 29, useExternalTrigger: true },
];

const externalProvinceDecorations = [
    { alt: 'Bocas del Toro', to: '/provincias/bocas-del-toro#video', lineComponent: LineaBocasDelToroSvg, lineTop: '13%', lineLeft: '13.8%', lineWidth: '4%', buttonTop: '13%', buttonLeft: '16.5%', buttonFontSize: '0.55rem', color: 'text-brand-charcoal/85' },
    { alt: 'Chiriquí', to: '/provincias/chiriqui#video', lineComponent: LineaChiriquiSvg, lineTop: '51.9%', lineLeft: '7.4%', lineWidth: '4%', buttonTop: '62.6%', buttonLeft: '10.2%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/65' },
    { alt: 'Veraguas', to: '/provincias/veraguas#video', lineComponent: LineaVeraguasSvg, lineTop: '71.4%', lineLeft: '25.4%', lineWidth: '4%', buttonTop: '86%', buttonLeft: '20.7%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/65' },
    { alt: 'Los Santos', to: '/provincias/los-santos#video', lineComponent: LineaLosSantosSvg, lineTop: '85%', lineLeft: '48.4%', lineWidth: '4%', buttonTop: '95%', buttonLeft: '51.2%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/65' },
    { alt: 'Herrera', to: '/provincias/herrera#video', lineComponent: LineaHerreraSvg, lineTop: '64.7%', lineLeft: '43%', lineWidth: '4%', buttonTop: '64.8%', buttonLeft: '46.8%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/65' },
    { alt: 'Coclé', to: '/provincias/cocle#video', lineComponent: LineaCocleSvg, lineTop: '43%', lineLeft: '48.5%', lineWidth: '4%', buttonTop: '56.6%', buttonLeft: '51.3%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/65' },
    { alt: 'Colón', to: '/provincias/colon#video', lineComponent: LineaColonSvg, lineTop: '4.5%', lineLeft: '40.7%', lineWidth: '3%', buttonTop: '4.4%', buttonLeft: '43.4%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/85' },
    { alt: 'Panamá Oeste', to: '/provincias/panama-oeste#video', lineComponent: LineaPanamaOesteSvg, lineTop: '35.5%', lineLeft: '53%', lineWidth: '4%', buttonTop: '49.5%', buttonLeft: '55.9%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/85' },
    { alt: 'Panamá', to: '/provincias/panama#video', lineComponent: LineaPanamaSvg, lineTop: '23%', lineLeft: '61.1%', lineWidth: '4%', buttonTop: '37.3%', buttonLeft: '64%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/85' },
    { alt: 'Guna Yala (San Blas)', to: '/provincias/comarca-guna-yala#video', lineComponent: LineaGunaYalaSvg, lineTop: '3.1%', lineLeft: '81%', lineWidth: '5%', buttonTop: '5.4%', buttonLeft: '84.6%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/85' },
    { alt: 'Darién', to: '/provincias/darien#video', lineComponent: LineaDarienSvg, lineTop: '67.8%', lineLeft: '77.3%', lineWidth: '4%', buttonTop: '82.6%', buttonLeft: '74.3%', buttonFontSize: '0.85rem', color: 'text-brand-charcoal/85' }
];

function Map() {
    const [activeProvince, setActiveProvince] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center text-center md:my-10">
            <div className="w-full rounded-xl md:p-12">
                <div className="mb-10 flex flex-col text-center">
                    <label className="font-secondary-italic text-3xl text-brand-red">¡Conoce Panamá como nunca antes lo viste!</label>
                </div>
                <div className="relative mb-6 aspect-[1025/424] ">
                    {externalProvinceDecorations.map((item) => {
                        const LineComponent = item.lineComponent;
                        return (
                            <div
                                key={`${item.alt}-line`}
                                className="pointer-events-none absolute z-0"
                                style={{
                                    top: item.lineTop,
                                    left: item.lineLeft,
                                    width: item.lineWidth,
                                }}
                            >
                                <LineComponent className="h-auto w-full" />
                            </div>
                        );
                    })}

                    {provinces.map((province) => (
                        <div
                            key={province.alt}
                            className="pointer-events-none absolute transition duration-300 drop-shadow-[0_3px_2px_rgba(77,76,76,0.50)]"
                            style={{
                                top: province.top,
                                left: province.left,
                                width: province.width,
                                zIndex: activeProvince === province.alt ? 50 : (province.zIndex ?? 1),
                                transform: activeProvince === province.alt ? 'scale(1.15)' : 'scale(1)',
                            }}
                        >
                            {province.component ? (
                                <province.component
                                    className={`pointer-events-none h-auto w-full ${province.hoverScale ? 'origin-center transition-transform duration-300 ease-out hover:scale-105' : ''}`}
                                    onMouseEnter={province.useExternalTrigger ? undefined : () => setActiveProvince(province.alt)}
                                    onMouseLeave={province.useExternalTrigger ? undefined : () => setActiveProvince(null)}
                                    onClick={() => navigate(province.to)}
                                />
                            ) : null}
                        </div>
                    ))}
                    
                    {externalProvinceDecorations.map((item) => (
                        <button
                            key={`${item.alt}-button`}
                            type="button"
                            className="font-secondary absolute z-[60] cursor-pointer whitespace-nowrap bg-transparent leading-none tracking-wide transition-transform duration-300 text-[0.50rem] md:text-[0.85rem]"
                            style={{
                                top: item.buttonTop,
                                left: item.buttonLeft,
                                color: item.color,
                                transform: activeProvince === item.alt ? 'scale(1.15)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setActiveProvince(item.alt)}
                            onMouseLeave={() => setActiveProvince(null)}
                            onClick={() => navigate(item.to)}
                        >
                            {item.alt}
                        </button>
                    ))}
                </div>
                <div className="mt-[-10px] flex h-16 items-center justify-center overflow-hidden">
                </div>
            </div>
        </div>
    );
}
export default Map;
