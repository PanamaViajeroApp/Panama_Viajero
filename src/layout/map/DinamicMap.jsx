import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LosSantos from '../../assets/components/prov_pages/LosSantos.jsx';
import ChiriquiSvg from '../../assets/components/prov_pages/ChiriquiSvg.jsx';
import BocasDelToroSvg from '../../assets/components/prov_pages/BocasDelToroSvg.jsx';
import Cocle from '../../assets/components/prov_pages/CocleSvg.jsx';
import Colon from '../../assets/components/prov_pages/Colon.jsx';
import GunaYala from '../../assets/components/prov_pages/GunaYalaSvg.jsx';
import Darien from '../../assets/components/prov_pages/Darien.jsx';
import Veraguas from "../../assets/components/prov_pages/VeraguasSvg.jsx";
import Herrera from '../../assets/components/prov_pages/HerreraSvg.jsx';
import Panama from '../../assets/components/prov_pages/PanamaSvg.jsx';
import PanamaOeste from '../../assets/components/prov_pages/PanamaOesteSvg.jsx';

const provinces = [
    { component: LosSantos, alt: 'Los Santos', to: '/provincias/los-santos', top: '68.87%', left: '39.90%', width: '11.71%', zIndex: 24 },
    { component: ChiriquiSvg, alt: 'Chiriquí', to: '/provincias/chiriqui', top: '28.5%', left: '-0.20%', width: '25.66%' },
    { component: BocasDelToroSvg, alt: 'Bocas del Toro', to: '/provincias/bocas-del-toro#video', top: '-3%', left: '0.50%', width: '32%' },
    { component: Cocle, alt: 'Coclé', to: '/provincias/cocle', top: '12%', left: '34.75%', width: '21%' },
    { component: Colon, alt: 'Colón', to: '/provincias/colon', top: '0%', left: '37.56%', width: '30.05%', zIndex: 31 },
    { component: GunaYala, alt: 'Guna Yala', to: '/provincias/comarca-guna-yala', top: '7.08%', left: '64.68%', width: '31.22%', zIndex: 23 },
    { component: Darien, alt: 'Darién', to: '/provincias/darien', top: '18.5%', left: '77.2%', width: '23.5%' },
    { component: Veraguas, alt: 'Veraguas', top: '26%', left: '20.85%', width: '23.60%', zIndex: 22 },
    { component: Herrera, alt: 'Herrera', to: '/provincias/herrera', top: '58.50%', left: '28.85%', width: '20.85%', zIndex: 23 },
    { component: PanamaOeste, alt: 'Panamá Oeste', top: '12.2%', left: '46.35%', width: '15.5%', zIndex: 32 },
    { component: Panama, alt: 'Panamá', to: '/provincias/panama', top: '0%', left: '56.5%', width: '30.80%', zIndex: 29 },
];

function Map() {
    const [activeProvince, setActiveProvince] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center text-center md:my-10">
            <div className="w-full rounded-xl md:p-12">

                <div className='flex flex-col mb-10  text-center '>
                    <label className='font-main text-4xl text-brand-red'>¡Conoce Panamá como nunca antes lo viste!</label>
                </div>

                {/* Map Container */}
                <div className='relative aspect-[1025/424] drop-shadow-[0_18px_45px_rgba(77,76,76,0.50)] mb-6'>
                    {provinces.map((province) => (
                        province.to ? (
                            <div
                                key={province.alt}
                                className="pointer-events-none absolute transition duration-300 drop-shadow-[0_3px_2px_rgba(77,76,76,0.50)]"
                                style={{
                                    top: province.top,
                                    left: province.left,
                                    width: province.width,
                                    zIndex: activeProvince === province.alt ? 50 : (province.zIndex ?? 1),
                                    transform: activeProvince === province.alt ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                {province.component ? (
                                    <province.component
                                        className="pointer-events-auto h-auto w-full cursor-pointer"
                                        onMouseEnter={() => setActiveProvince(province.alt)}
                                        onMouseLeave={() => setActiveProvince(null)}
                                        onClick={() => navigate(province.to)}
                                    />
                                ) : (
                                    <img src={province.src} alt={province.alt} className="" />
                                )}
                            </div>
                        ) : (
                            <div
                                key={province.alt}
                                className="pointer-events-none absolute transition duration-300"
                                style={{
                                    top: province.top,
                                    left: province.left,
                                    width: province.width,
                                    zIndex: activeProvince === province.alt ? 50 : (province.zIndex ?? 1),
                                    transform: activeProvince === province.alt ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                {province.component ? (
                                    <province.component 
                                        className="pointer-events-auto h-auto w-full cursor-pointer" 
                                        onMouseEnter={() => setActiveProvince(province.alt)}
                                        onMouseLeave={() => setActiveProvince(null)}
                                    />
                                ) : (
                                    <img src={province.src} alt={province.alt} className="pointer-events-auto h-auto w-full" />
                                )}
                            </div>
                        )
                    ))}
                </div>
                {/* Province Name Display Section Below Map */}
                <div className="h-16 flex items-center justify-center mt-[-10px] overflow-hidden">
                    <span 
                        className={`font-main text-4xl text-brand-blue tracking-wide transition-all duration-300 ease-out ${
                            activeProvince 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                        }`}
                    >
                        {activeProvince || ""}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Map;