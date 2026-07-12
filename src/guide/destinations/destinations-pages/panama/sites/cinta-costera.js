const cintaCosteraImageBase = '/images/destinations/panama/cinta-costera'

export const cintaCostera = {
    id: 'cinta-costera',
    provinceId: 'panama',
    nombre: 'Cinta Costera',
    banner: {
        src: `${cintaCosteraImageBase}/bg-cinta-costera.webp`,
        alt: 'Banner de Cinta Costera',
    },
    gallery: [
        `${cintaCosteraImageBase}/bg-cinta-costera.webp`,
        `${cintaCosteraImageBase}/g2-cinta-costera.webp`,
        `${cintaCosteraImageBase}/g3-cinta-costera.webp`,
        `${cintaCosteraImageBase}/g4-cinta-costera.webp`,
        `${cintaCosteraImageBase}/g5-cinta-costera.webp`,

    ],
    descripcion:
        'Uno de los espacios urbanos más emblemáticos de la capital, ideal para disfrutar del mar, hacer ejercicio y contemplar algunas de las mejores vistas del skyline de Panamá y la Bahía de Panamá. Su ambiente abierto y moderno lo convierte en un punto clave para la recreación y la vida urbana.',
    previewDescripcion:
        'Vistas al mar, recreación y uno de los skylines más impresionantes de la ciudad.',
    previewUbicacion: 'Bella Vista, Ciudad de Panamá',
actividades: [
    {
        nombre: 'Alquiler de bicicletas',
        descripcion:
            'Aprovecha sus amplias rutas para recorrer la bahía con una vista privilegiada del skyline de la ciudad.',
        icono: '',
    },
    {
        nombre: 'Patinaje',
        descripcion:
            'Disfruta de sus amplios espacios pavimentados, ideales para patinar con comodidad junto al mar.',
        icono: '',
    },
    {
        nombre: 'Ejercicio al aire libre',
        descripcion:
            'Utiliza sus áreas deportivas y espacios abiertos para correr, entrenar o mantenerte activo.',
        icono: '',
    },
    {
        nombre: 'Miradores',
        descripcion:
            'Disfruta vistas panorámicas de la bahía de Panamá, el Casco Antiguo y el moderno skyline de la ciudad.',
        icono: '',
    },
],
    ubicacion:
        'https://www.google.com/maps?q=Cinta%20Costera%20Panama&output=embed',
}