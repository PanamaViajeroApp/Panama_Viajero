import { useState } from 'react'
import BocasDelToroSvg from '../../srcProvincias/bocas_del_toto/BocasGeneralMap.jpeg'
import ChiriquiSvg from '../../srcProvincias/chiriqui/ChiriquiMap.jpg'
import CocleSvg from '../../srcProvincias/cocle/CocleMap.png'
import Colon from '../../srcProvincias/colon/colon.jpeg'
import GunaYalaSvg from '../../srcProvincias/comarca_guna_yala/guna ya.jpg'
import Darien from '../../srcProvincias/darien/DarienMap.jpg'
import VeraguasSvg from '../../srcProvincias/veraguas/VeraguasMap.png'
import HerreraSvg from '../../srcProvincias/herrera/HerreraMap.png'
import PanamaSvg from '../../srcProvincias/panama/panama.jpg'
import PanamaOesteSvg from '../../srcProvincias/panama_oeste/PanamaOesteMap.png'
import LosSantos from '../../srcProvincias/los_santos/LosSantosMap.jpeg'
import PV from '../../img_test/logoCircular.svg'


const imageMaps = {
    'bocas-del-toro': BocasDelToroSvg,
    'chiriqui': ChiriquiSvg,
    'cocle': CocleSvg,
    'colon': Colon,
    'guna-yala': GunaYalaSvg,
    'darien': Darien,
    'veraguas': VeraguasSvg,
    'herrera': HerreraSvg,
    'panama': PanamaSvg,
    'panama-oeste': PanamaOesteSvg,
    'los-santos': LosSantos,
    'comarca-guna-yala': GunaYalaSvg, // assuming same as guna-yala
    'Panama-viajero': PV,
}

function AnimateProvince({ provinceData }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const onMouseMove = (event) => {
        const svgElement = event.currentTarget.ownerSVGElement || event.currentTarget
        const rect = svgElement.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const px = x / rect.width
        const py = y / rect.height

        setRotation({
            x: (0.5 - py) * 25,
            y: (px - 0.5) * 25,
        })
    }

    const onMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    const currentImage = imageMaps[provinceData.id]

    
return (
        <div
            className="flex justify-center items-center overflow-visible py-10"
            style={{ perspective: '1000px' }}
        >
            {currentImage ? (
                <img 
                    src={currentImage}
                    alt={`Mapa de ${provinceData.nombre}`}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    className="aspect-[4/3] rounded-xl h-full w-full object-cover transition-transform duration-150 ease-out 
                    drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)]"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
                        transformStyle: 'preserve-3d'
                    }}
                />
            ) : (
                <p className="text-brand-white">Imagen no encontrada</p>
            )}
        </div>
    )
}

export default AnimateProvince
