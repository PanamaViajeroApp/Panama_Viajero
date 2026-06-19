import { RxCross2 } from 'react-icons/rx';
import VentanaEmergente from '../../../img_test/VEMERGENTE.webp';

const preloadedPopupImage = new Image();
preloadedPopupImage.src = VentanaEmergente;

function CountdownModal({ onClose, onPreregister }) {
    return (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-brand-charcoal/85 backdrop-blur-sm">
            <div className="relative w-[90%] max-w-4xl rounded-xl p-6 text-center shadow-lg">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-6 right-6 cursor-pointer rounded-full p-2 text-brand-white/90 transition duration-200 hover:scale-110 hover:text-white"
                    aria-label="Cerrar ventana emergente"
                >
                    <RxCross2 className="h-7 w-7" aria-hidden="true" />
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

                <p className="font-body text-sm text-white">Y participa por una noche gratis</p>
            </div>
        </div>
    );
}

export default CountdownModal;
