import Preregister from '../preregister/Preregister.jsx'

function RegistrerFlotante({ onClose = () => {} }) {
    return (
        <div className="fixed inset-0 z-[550] flex items-center justify-center  px-5 py-2 backdrop-blur-md bg-[#081020]/50">
            <button
            type="button"
            onClick={onClose}
            className="
                absolute top-6 right-6 z-50 flex items-center gap-2 rounded-full  px-6 py-3 text-sm font-semibold text-white 
                shadow-xl backdrop-blur-md  transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 
                hover:shadow-2xl active:scale-100 cursor-pointer hover:bg-brand-red/80
                bg-gradient-to-r from-[#5864c7] to-[#cd2e4c] hover:shadow-[0_2px_10px_rgba(0,0,0,1)]"
                aria-label="Ver sitio"
            >
                Ver sitio
            </button>
            <Preregister />
        </div>
    )
}

export default RegistrerFlotante
