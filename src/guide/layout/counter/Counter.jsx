function CountdownModal({ onClose, onPreregister }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal/85 backdrop-blur-sm">
            <div className="relative w-[90%] max-w-4xl rounded-xl bg-brand-charcoal p-6 text-center">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer rounded-full bg-brand-soft px-3 py-1 text-xl font-bold text-brand-charcoal/70 transition hover:bg-brand-red hover:text-white"
                    aria-label="Cerrar ventana emergente"
                >
                    X
                </button>
                <img
                    src="/VentanaEmergente.svg"
                    alt="Promocion"
                    className="mx-auto mb-6 h-auto w-full rounded-2xl object-cover"
                />

                <button
                    type="button"
                    onClick={onPreregister}
                    className="mb-4 w-full rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
                >
                    Registrate
                </button>

                <p className="font-secondary text-sm text-brand-white/75">Y participa por una noche gratis</p>
            </div>
        </div>
    );
}

export default CountdownModal;
