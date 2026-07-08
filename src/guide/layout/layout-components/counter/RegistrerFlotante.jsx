import Preregister from '../preregister/Preregister.jsx'

function RegistrerFlotante({ onClose = () => {} }) {
    return (
        <div className="fixed inset-0 z-[550] flex items-center justify-center  px-5 py-2 backdrop-blur-md bg-[#081020]/50">
            <Preregister onViewSite={onClose} />
        </div>
    )
}

export default RegistrerFlotante
