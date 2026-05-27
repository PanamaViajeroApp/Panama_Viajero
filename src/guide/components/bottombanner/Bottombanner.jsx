import {FaInstagram, FaTiktok, FaFacebook} from "react-icons/fa6"

import LogoCircular from "../../img_test/LogoRectangular.svg";
function BottomBanner({ onLogoClick }) {
    return (
        <div className="mt-40 bg-brand-blue py-10 shadow-[0_-12px_30px_rgba(77,76,76,0.18)]">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-brand-white">
                <h1 className="font-main text-center text-2xl md:text-4xl font-bold">Sé parte de esta gran aventura.</h1>
            <button className="cursor-pointer transition hover:scale-110" onClick={onLogoClick}>
                <img src={LogoCircular} alt="Logo IEPA" className="h-15 md:h-20 w-auto max-w-full" />
            </button>
            <div className="flex flex-col items-center gap-4">
                <h2 className="font-body font-bold text-lg md:text-xl">¡Síguenos en nuestras redes!</h2>
            <div className="flex gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/panamaviajero.app/" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-brand-white/30 text-brand-white hover:scale-110
                transition hover:border-brand-white hover:bg-brand-white hover:text-brand-blue cursor-pointer" target="_blank">
                    <FaInstagram size={25}/>
                </a>
                {/* Tiktok */}
                <a href="https://www.tiktok.com/@panamaviajero.app" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-brand-white/30 text-brand-white hover:scale-110
                transition hover:border-brand-white hover:bg-brand-white hover:text-brand-blue cursor-pointer" target="_blank">
                    <FaTiktok size={25}/>
                </a>
            
                <a href="https://www.facebook.com/profile.php?id=61581250713824" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-brand-white/30 text-brand-white hover:scale-110
                transition hover:border-brand-white hover:bg-brand-white hover:text-brand-blue cursor-pointer" target="_blank" >
                    
                    <FaFacebook size={25} />
                </a>
                
            </div>
            </div>

            <hr className="w-full border-brand-white opacity-40" />
            <div className="font-body text-center text-xs md:text-md">
                © 2026 Panamá Viajero. Todos los derechos reservados. | Desarrollado por DHM-Asesores | Contacto: <a href="panamaviajero@.com.pa">panamaviajero@.com.pa</a>
            </div>
            </div>
        </div>
    )
}

export default BottomBanner;
