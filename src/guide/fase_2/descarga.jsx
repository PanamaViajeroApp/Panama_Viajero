import { useState } from 'react'
import CELULAR from '../img_test/Simulador_app_P1.svg'

function Descarga() {
    const [rotation, setRotation] = useState({
        x: 0,
        y: 0,
    })

    // Rotación base 
    const baseRotation = { x: 0, y: 0, z: 0 }

    const handleMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()

        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height

        setRotation({
            x: (0.5 - py) * 20,
            y: (px - 0.5) * 20,
        })
    }

    const resetRotation = () => {
        setRotation({
            x: 0,
            y: 0,
        })
    }

    return (
        <div className="fixed z-[1000] bottom-6 right-5 flex flex-col items-center gap-4">
            <div style={{ perspective: '1000px' }}>
                <div
                    className="
                        cursor-pointer
                        transition-transform
                        duration-150
                        ease-out
                        drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]
                    "
                    onMouseMove={handleMove}
                    onMouseLeave={resetRotation}
                    style={{
                        transform: `
                            rotateX(${baseRotation.x + rotation.x}deg)
                            rotateY(${baseRotation.y + rotation.y}deg)
                            rotateZ(${baseRotation.z}deg)
                            scale(1.05)
                        `,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <img
                        src={CELULAR}
                        alt="Descargar app"
                        className="w-40 h-auto object-contain"
                    />
                </div>
            </div>

            <button
                className="
                    pointer-events-auto
                    rounded-full
                    px-8 py-4
                    text-base font-semibold
                    text-brand-white
                    bg-[linear-gradient(270deg,#4956A2,#000000,#CD2E4C,#4956A2)]
                    bg-[length:400%_400%]
                    backdrop-blur-xl
                    border border-white/50
                    shadow-[0_0_20px_rgba(0,0,0,0.50)]
                    transition-all duration-300
                    cursor-pointer
                "
                style={{
                    animation: 'gradient 8s ease infinite',
                }}
            >
                Descarga la app
            </button>

            <style>
                {`
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
        </div>
    )
}

export default Descarga
