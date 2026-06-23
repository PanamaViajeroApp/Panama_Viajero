import { useEffect, useRef, useState } from 'react';
import LogoVertical from '../../img_test/LogoVertical.svg';
import LogoCuadrado from '../../img_test/LogoCuadrado.svg';

function IconBase({ children }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-[15px] w-[15px]"
        >
            {children}
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <span {...props}>
            <IconBase>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </IconBase>
        </span>
    );
}

function MapPinIcon(props) {
    return (
        <span {...props}>
            <IconBase>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </IconBase>
        </span>
    );
}

function MegaphoneIcon(props) {
    return (
        <span {...props}>
            <IconBase>
                <path d="m3 11 14-5v12L3 13z" />
                <path d="M11 18v4" />
                <path d="M7 14.5V18a2 2 0 0 0 2 2h2" />
                <path d="M21 9v6" />
            </IconBase>
        </span>
    );
}

function ClipboardPenIcon(props) {
    return (
        <span {...props}>
            <IconBase>
                <path d="M9 5h6" />
                <path d="M9 3h6a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Z" />
                <path d="M7 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5" />
                <path d="M18 8h.01" />
                <path d="M14 20h7" />
                <path d="m17.5 12.5 2 2L14 20l-2.5.5L12 18z" />
            </IconBase>
        </span>
    );
}


function Menu({
    onLogoClick,
    onPreregisterClick,
    onMapClick,
    onUsClick,
    onSuggestionsClick,
    autoHideOnScroll = false,
    hideMobileMenu = false,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 80 || currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoHideOnScroll]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const goToRegister = () => {
        closeMenu();
        onPreregisterClick?.();
    };

    const goToHome = () => {
        closeMenu();
        onLogoClick?.();
    };
    const goToMap = () => {
        closeMenu();
        onMapClick?.();
    };
    const goToUs = () =>{
        closeMenu();
        onUsClick?.();
    }
    const goToSuggestions = () => {
        closeMenu();
        onSuggestionsClick?.();
    }

    return(
        /* Fondo del menu */
        <div
            className={`relative z-[100] bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/45 to-transparent pb-7 backdrop-blur-[1px] transition-transform duration-300 ease-in-out ${
                autoHideOnScroll && !isVisible ? '-translate-y-full' : 'translate-y-0'
            }`}
            style={autoHideOnScroll && !isVisible ? { pointerEvents: 'none' } : undefined}
        >
            {/* Justificacion del menu */}
            <div className="flex justify-between items-center pt-5 md:pt-5 px-3 md:pl-10 md:pr-30 text-brand-white text-md">
                <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                    <img src={LogoCuadrado} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                </button>

                <div className="hidden md:flex gap-8 font-secondary">
                    {/* Nosotros */}
                    <button className=" hover:scale-105 group flex items-center gap-2 cursor-pointer rounded-full px-3 py-2 transition-all 
                    ease-out hover:bg-brand-white/15 hover:text-brand-white
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]" onClick={goToUs}>
                        <UsersIcon className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Nosotros</span>
                        
                    </button>
                    {/* Provincias */}
                    <button
                        className="hover:scale-105 group flex items-center gap-2 cursor-pointer rounded-full 
                        px-3 py-2 transition-all  ease-out hover:bg-brand-white/15 
                        hover:text-brand-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                        onClick={goToMap}
                        >
                            <MapPinIcon className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Provincias</span>
                        
                    </button>

                    {/* Promociones */}
                    <button className=" hover:scale-105 group flex items-center gap-2 cursor-pointer 
                    rounded-full px-3 py-2 transition-all  ease-out hover:bg-brand-white/15 
                    hover:text-brand-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]" onClick={goToSuggestions}>
                        <MegaphoneIcon className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100"/>
                        <span>Recomendaciones</span>
                    </button>
                    {/* Registro */}
                    <button className="hover:scale-105 group flex items-center gap-2 cursor-pointer 
                    rounded-full px-3 py-2 transition-all  ease-out hover:bg-brand-white/15 hover:text-brand-white 
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]" onClick={goToRegister}>
                        <ClipboardPenIcon className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Registro</span>
                    </button>
                </div>
                {/* Menu Responsive */}
                {!hideMobileMenu && (
                    <button className="md:hidden rounded-full bg-brand-white/15 px-3 py-1 transition-all duration-300 ease-out hover:bg-brand-red hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]" onClick={() => setIsOpen(true)}>
                        ☰
                    </button>
                )}
                
                <div className="hidden md:block "></div>
                {!hideMobileMenu && (
                    <>
                        <div
                            className={`fixed inset-0 z-40 bg-black/50 transition-opacity h-screen duration-300 ${
                                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                            onClick={closeMenu}
                        ></div>

                        <div
                            className={`fixed inset-y-0 right-0 z-50 h-screen w-2/3 bg-brand-charcoal text-brand-white shadow-2xl shadow-black/60 transition-transform duration-300 ease-in-out sm:w-1/2 ${
                                isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >{/* Menu Responsive */}
                            <div className="flex flex-col gap-8 py-6">
                                <div className="flex flex-col items-center gap-3">
                                    <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                                        <img src={LogoVertical} alt="Logo IEPA" className="h-25 w-auto max-w-full" />
                                    </button>
                                </div>

                                <div className="font-secondary flex flex-col items-start ml-3 gap-2.5">
                                    <button className="font-secondary rounded-full px-4 py-2 transition-all duration-300 ease-out hover:bg-brand-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]" onClick={goToUs}>Nosotros</button>
                                    <button className="font-secondary rounded-full px-4 py-2 transition-all duration-300 ease-out hover:bg-brand-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]" onClick={goToMap}>Provincias</button>
                                    <button className="font-secondary rounded-full px-4 py-2 transition-all duration-300 ease-out hover:bg-brand-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]" onClick={goToSuggestions}>Sugerencia</button>
                                    <button className="font-secondary rounded-full px-4 py-2 transition-all duration-300 ease-out hover:bg-brand-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]" onClick={goToRegister}>Registro</button>
                                </div>

                                <div className="flex justify-center mt-15">
                                    <button className="font-secondary rounded-lg bg-brand-red text-brand-white px-5 py-2 transition-all duration-300 ease-out hover:bg-brand-blue hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]" onClick={goToRegister}>
                                        Registrarme
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Menu
