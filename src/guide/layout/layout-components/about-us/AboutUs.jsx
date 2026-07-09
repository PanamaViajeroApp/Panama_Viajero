import { useState } from 'react';

import SimuladorApp from '../../../img_test/Simulador_app_P1.svg'

function AboutUs() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  /* const baseRotation = { x: 30, y: -20, z: 30 }; */
  const baseRotation = { x: 5, y: -15, z: 4 };

  const onMouseMove = (event) => {
    if (!isHovered) setIsHovered(true);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setRotation({
      x: (0.5 - py)* 25,
      y: (px - 0.5) * 25,
    });
  };

  const onMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="mx-auto pt-40 pb-40 flex max-w-full flex-col items-center justify-center gap-12 px-4 
    py-14 md:flex-row md:gap-30 bg-gradient-to-r from-[#4956A2] to-[#000000]">
      <div className="flex flex-col items-start gap-5 text-left max-w-6xl">
        <div>
          <h2 className="font-secondary-italic text-2xl text-[#FFFFFF] md:text-3xl ">Guía turístico</h2>
          
          <div className='flex gap-3'>
            <h1 className="font-secondary text-4xl  text-brand-white md:text-6xl">Explora </h1>
            <h1 className="font-secondary font-bold text-4xl   md:text-6xl text-[#CD2E4C]">Panamá</h1>
          </div>
          <h1 className="font-secondary text-4xl text-brand-white md:text-6xl">y sus costumbres.</h1>
        </div>

        <p className="font-body max-w-xs leading-7 text-brand-white md:max-w-md md:text-lg">
          Somos una guía digital turístico que conecta a viajeros nacionales e internacionales con experiencias 
          turísticas en todo el país. Nos convertimos en el puente digital que 
          transforma un simple viaje en una aventura inolvidable. Nuestro objetivo es dar visibilidad al talento y la calidez 
          local, ofreciendo a los viajeros del mundo una guía auténtica para descubrir 
          los secretos mejor guardados de nuestra tierra.
        </p>
      </div>

      <div
        className="flex items-center justify-center "
        style={{ perspective: '1000px' }}
      >
        <div
          className="rounded-full  transition-transform duration-150 ease-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
            : `rotateX(${baseRotation.x}deg) rotateY(${baseRotation.y}deg) rotateZ(${baseRotation.z}deg) scale(1.05)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <img src={SimuladorApp} alt="Provincias" loading="lazy" decoding="async" className="h-100 md:h-130" />
          {/* LogoRectangular */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
