const veracruzImageBase = '/images/destinations/panama-oeste'

export const veracruz = {
    id: 'veracruz',
    provinceId: 'panama-oeste',
    nombre: 'Veracruz',
    banner: {
        src: `${veracruzImageBase}/bg-veracruz.webp`,
        alt: 'Banner de Veracruz',
    },
    descripcion:
        'Un destino costero cercano a la ciudad de Panamá que combina playa, gastronomía y vida nocturna frente al Pacífico. Veracruz es ideal para quienes buscan una escapada rápida con ambiente relajado y hermosos atardeceres.',
    previewDescripcion:
        'Playa, gastronomía y atardeceres a pocos minutos de la ciudad.',
    previewUbicacion: 'Veracruz, Panamá Oeste',
    actividades: [
        {
            nombre: 'Disfrutar de la playa',
            descripcion:
                'Relájate en una playa accesible y perfecta para una escapada rápida desde la ciudad.',
            icono: '',
        },
        {
            nombre: 'Gastronomía frente al mar',
            descripcion:
                'Disfruta mariscos, ceviches y platos típicos en restaurantes con vista al Pacífico.',
            icono: '',
        },
        {
            nombre: 'Vida nocturna',
            descripcion:
                'Descubre bares, música en vivo y un ambiente costero animado durante la noche.',
            icono: '',
        },
        {
            nombre: 'Paseos costeros',
            descripcion:
                'Recorre la zona y disfruta del ambiente relajado junto al mar.',
            icono: '',
        },
        {
            nombre: 'Pesca recreativa',
            descripcion:
                'Participa o observa actividades de pesca en las áreas cercanas.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Veracruz%20Panama%20Oeste&output=embed',
}
