import { useState } from 'react';
import LogoCircular from '../../img_test/logoCircular.svg';

function AboutUs() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setRotation({
      x: (0.5 - py) * 25,
      y: (px - 0.5) * 25,
    });
  };

  const onMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-14 md:flex-row md:gap-16">
      <div className="flex flex-col items-start gap-5 text-left">
        <div>
          <h2 className="font-secondary-italic text-2xl text-brand-red md:text-3xl">Guia turística</h2>
          <h1 className="font-main text-4xl font-bold text-brand-blue md:text-6xl">Explora Panamá</h1>
          <h1 className="font-main text-4xl font-bold text-brand-charcoal md:text-6xl">y sus costumbres.</h1>
        </div>

        <p className="font-body max-w-xs leading-7 text-brand-charcoal/85 md:max-w-md md:text-lg">
          Somos un directorio digital turístico que conecta a viajeros nacionales e 
          internacionales con alojamientos, experiencias, gastronomía y comercios turísticos en todo el país.
        </p>
      </div>

      <div
        className="flex items-center justify-center "
        style={{ perspective: '1000px' }}
      >
        <div
          className="rounded-full  transition-transform duration-150 ease-out"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <img src={LogoCircular} alt="Provincias" className="h-50 md:h-100  " />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
