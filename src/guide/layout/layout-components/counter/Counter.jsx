import { RxCross2 } from 'react-icons/rx'
import VentanaEmergente from '../../../img_test/VEMERGENTE.svg'
import Logo from '../../../img_test/LogoRectangularNegro.svg'
import Playstore from '../../../img_test/Playstore.svg'
import Applestore from '../../../img_test/Applestore.svg'

const preloadedPopupImage = new Image()
preloadedPopupImage.src = VentanaEmergente

function CountdownModal({ onClose, onPreregister }) {
    return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-[#0b1020]/55 px-4 backdrop-blur-md">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-red via-[#5864c7] to-brand-red" />
            <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/85 text-brand-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-105 hover:bg-white"
                aria-label="Cerrar ventana emergente"
            >
                <RxCross2 className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[280px] bg-[#f5f7ff] p-4 sm:p-6 md:min-h-[520px] ">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,100,199,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(205,46,76,0.10),transparent_30%)]" />

                    <div className="relative h-full">
                        <img
                            className="absolute left-0 top-0 z-20 h-13 w-auto"
                            src={Logo}
                            alt=""
                        />
                        <div className="absolute top-95 z-20">
                            <h1 className="text-xl text-bold text-brand-blue font-bold ">
                                ¡Espéralo pronto!
                            </h1>
                            <h2 className="text-lg ml-1 font-secondary-italic text-brand-red/80">
                                Ago-2026
                            </h2>
                            
                            <div className="ml-[-10px] mt-[-10px] flex">
                                <img
                                    className="h-19 w-auto"
                                    src={Playstore}
                                    alt="Google Play"
                                />
                                <img
                                    className="ml-[-10px] h-19 w-auto"
                                    src={Applestore}
                                    alt="App Store"
                                />
                            </div>
                        </div>

                        <img
                            src={VentanaEmergente}
                            alt="Promocion"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="relative z-10 mx-auto h-full w-full max-w-[900px] object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 bg-gradient-to-br from-[#1c2140] via-[#2c3568] to-[#4f5fbf] p-6 text-white sm:p-8 md:p-10">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                        Muy pronto
                    </div>

                    <div>
                        <div className="space-y-3">
                            <h2 className="font-secondary text-3xl leading-none sm:text-4xl md:text-5xl">
                                ¡Descubre Panamá
                                <span className="block text-[#ff8fa2]">
                                    como nunca
                                </span>
                                <span className="block text-[#ff8fa2]">
                                    antes lo viste!
                                </span>
                            </h2>
                        </div>

                        <div className="mt-35 flex flex-col gap-3 justify-center sm:flex-row">
                            <button
                                type="button"
                                onClick={onPreregister}
                                className="peer cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition duration-200 hover:translate-y-[-1px] hover:bg-white/95"
                            >
                                Regístrate
                            </button>

                            <p className="font-body text-md transition-all duration-300 text-white/85 peer-hover:text-white">
                                Y participa por una noche gratis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CountdownModal