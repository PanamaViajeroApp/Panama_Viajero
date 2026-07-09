const cascoAntiguoImageBase = '/images/destinations/panama'

export const cascoAntiguo = {
    id: 'casco-antiguo',
    provinceId: 'panama',
    nombre: 'Casco Antiguo',
    banner: {
        src: `${cascoAntiguoImageBase}/bg-casco-antiguo.webp`,
        alt: 'Banner de Casco Antiguo',
    },
    descripcion:
        'El corazón histórico de la ciudad de Panamá y uno de los destinos más emblemáticos del país. Sus calles empedradas, arquitectura colonial, plazas, iglesias y vibrante vida cultural convierten este Patrimonio de la Humanidad en una parada imprescindible para descubrir la esencia histórica y moderna de la capital.',
    previewDescripcion:
        'Historia, arquitectura colonial y vida cultural en el corazón de Panamá.',
    previewUbicacion: 'San Felipe, Ciudad de Panamá',
    actividades: [
        {
            nombre: 'Visita a museos',
            descripcion:
                'Descubre espacios culturales e históricos que narran la evolución de Panamá y su legado.',
            icono: '',
        },
        {
            nombre: 'Gastronomía',
            descripcion:
                'Disfruta de restaurantes, cafés y rooftops con propuestas gastronómicas locales e internacionales.',
            icono: '',
        },
        {
            nombre: 'Artesanías',
            descripcion:
                'Encuentra souvenirs, arte local y productos tradicionales en tiendas y mercados del casco histórico.',
            icono: '',
        },
        {
            nombre: 'Visita a iglesias históricas',
            descripcion:
                'Admira templos coloniales que forman parte del patrimonio religioso y arquitectónico de Panamá.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Casco%20Antiguo%20Panama&output=embed',
}