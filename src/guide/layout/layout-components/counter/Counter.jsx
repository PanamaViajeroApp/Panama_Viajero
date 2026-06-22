import { RxCross2 } from 'react-icons/rx';
import VentanaEmergente from '../../../img_test/VEMERGENTE.webp';

const preloadedPopupImage = new Image();
preloadedPopupImage.src = VentanaEmergente;

function CountdownModal({ onClose, onPreregister }) {
    return (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-[#0b1020]/55 px-4 backdrop-blur-md">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-[#5864c7] to-brand-red" />

                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-5 top-5 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/85 text-brand-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-105 hover:bg-white"
                    aria-label="Cerrar ventana emergente"
                >
                    <RxCross2 className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="relative min-h-[280px] bg-[#f5f7ff] p-4 sm:p-6 md:min-h-[520px] md:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,100,199,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(205,46,76,0.10),transparent_30%)]" />

                        <img
                            src={VentanaEmergente}
                            alt="Promocion"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="relative z-10 mx-auto h-full w-full max-w-[900px] object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                        />
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

                            <div className="flex flex-col gap-3 sm:flex-row justify-center mt-30">
                                <button
                                    type="button"
                                    onClick={onPreregister}
                                    className="peer rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition duration-200 hover:translate-y-[-1px] hover:bg-white/95 cursor-pointer"
                                >
                                    Regístrate
                                </button>

                                <p className="font-body text-md transition-all duration-300 text-white/85 peer-hover:text-white ">
                                    Y participa por una noche gratis.
                                </p>
                            </div>

                            {/* 
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/15 cursor-pointer"
                            >
                                Seguir explorando
                            </button> 
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountdownModal;
/* import { RxCross2 } from 'react-icons/rx';
import VentanaEmergente from '../../../img_test/VEMERGENTE.webp';

const preloadedPopupImage = new Image();
preloadedPopupImage.src = VentanaEmergente;

function CountdownModal({ onClose, onPreregister }) {
    return (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-brand-white/20 backdrop-blur-sm">
            <div className="relative w-[90%] max-w-4xl rounded-xl p-6 text-center shadow-lg bg-white">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-6 right-6 cursor-pointer rounded-full p-2 text-brand-white/90 transition duration-200 hover:scale-110 hover:text-white"
                    aria-label="Cerrar ventana emergente"
                >
                    <RxCross2 className="h-7 w-7 text-black" aria-hidden="true" />
                </button>
                <img
                    src={VentanaEmergente}
                    alt="Promocion"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="mx-auto mb-6 h-auto w-full rounded-2xl object-cover"
                />

                <button
                    type="button"
                    onClick={onPreregister}
                    className="mb-4 w-full rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red cursor-pointer"
                >
                    Registrate
                </button>

                <p className="font-body  text-md text-black ">Y participa por una noche gratis</p>
            </div>
        </div>
    );
}

export default CountdownModal;
 */