const islaCanasImageBase = '/images/destinations/los-santos/isla-cañas'

export const islaCanas = {
    id: 'isla-canas',
    provinceId: 'los-santos',
    nombre: 'Isla Cañas',
    banner: {
        src: `${islaCanasImageBase}/bg-isla-cañas.webp`,
        alt: 'Banner de Isla Cañas',
    },
    gallery: [
        `${islaCanasImageBase}/bg-isla-cañas.webp`,
        `${islaCanasImageBase}/g1-isla-cañas.webp`,
        `${islaCanasImageBase}/g2-isla-cañas.webp`,
        `${islaCanasImageBase}/g3-isla-cañas.webp`,
        `${islaCanasImageBase}/g4-isla-cañas.webp`,
        `${islaCanasImageBase}/g5-isla-cañas.webp`,

    ],
    descripcion:
        'Isla Cañas es un santuario natural de gran importancia ecológica en la costa del Pacífico panameño. Es conocida por la anidación de tortugas marinas, sus manglares y sus playas vírgenes.',
    previewDescripcion:
        'Playas vírgenes, tortugas marinas y naturaleza protegida en el Pacífico panameño.',
    previewUbicacion: 'Tonosí, Los Santos',
    actividades: [
        {
            nombre: 'Avistamiento de tortugas',
            descripcion:
                'Presencia el proceso de anidación y nacimiento de tortugas durante la temporada adecuada.',
            icono: '',
        },
        {
            nombre: 'Avistamiento de manglares',
            descripcion:
                'Explora canales naturales rodeados de abundante biodiversidad.',
            icono: '',
        },
        {
            nombre: 'Avistamiento de aves',
            descripcion:
                'Observa especies residentes y migratorias en su entorno natural.',
            icono: '',
        },
        {
            nombre: 'Paseo en bote',
            descripcion:
                'Navega por los alrededores de la isla y disfruta de sus paisajes costeros.',
            icono: '',
        },
        {
            nombre: 'Fotografía',
            descripcion:
                'Captura playas vírgenes, fauna silvestre y escenarios naturales únicos.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Ca%C3%B1as%20Island&output=embed',
}
