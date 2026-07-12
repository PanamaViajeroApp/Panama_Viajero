const mirafloresImageBase = '/images/destinations/panama/miraflores'

export const miraflores = {
    id: 'miraflores',
    provinceId: 'panama',
    nombre: 'Centro de Visitantes de Miraflores',
    banner: {
        src: `${mirafloresImageBase}/bg-miraflores.webp`,
        alt: 'Banner de Miraflores',
    },
    gallery: [
        `${mirafloresImageBase}/bg-miraflores.webp`,
        `${mirafloresImageBase}/g1-miraflores.webp`,
        `${mirafloresImageBase}/g2-miraflores.webp`,
        `${mirafloresImageBase}/g3-miraflores.webp`,
        `${mirafloresImageBase}/g4-miraflores.webp`,
        `${mirafloresImageBase}/g5-miraflores.webp`,
    ],
    descripcion:
        'Uno de los destinos turísticos más importantes de Panamá, donde puedes observar de cerca el paso de enormes embarcaciones por el Canal de Panamá. Es una experiencia única que combina historia, ingeniería y vistas privilegiadas de una de las obras más importantes del mundo.',
    previewDescripcion:
        'Vive de cerca la experiencia del Canal de Panamá y el paso de grandes buques.',
    previewUbicacion: 'Ancón, Ciudad de Panamá',
    actividades: [
        {
            nombre: 'Observación de buques',
            descripcion:
                'Mira de cerca cómo enormes embarcaciones atraviesan las esclusas del Canal de Panamá en operación.',
            icono: '',
        },
        {
            nombre: 'Visita al museo',
            descripcion:
                'Descubre la historia, construcción y funcionamiento del Canal a través de exposiciones permanentes.',
            icono: '',
        },
        {
            nombre: 'Fotografía panorámica',
            descripcion:
                'Captura impresionantes vistas de las esclusas, los buques y la infraestructura canalera.',
            icono: '',
        },
        {
            nombre: 'Miradores',
            descripcion:
                'Disfruta de terrazas con vistas privilegiadas para observar la operación completa de las esclusas.',
            icono: '',
        },
        {
            nombre: 'Restaurante con vista al canal',
            descripcion:
                'Disfruta de una comida mientras observas el paso de los barcos y la actividad del Canal.',
            icono: '',
        },
        {
            nombre: 'Visitas guiadas',
            descripcion:
                'Profundiza en la historia y funcionamiento del Canal con explicaciones especializadas.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Miraflores%20Visitor%20Center%20Panama&output=embed',
}
