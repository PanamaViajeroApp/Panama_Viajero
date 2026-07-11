const paritaImageBase = '/images/destinations/herrera/parita'

export const parita = {
    id: 'parita',
    provinceId: 'herrera',
    nombre: 'Parita',
    banner: {
        src: `${paritaImageBase}/bg-parita.webp`,
        alt: 'Banner de Parita',
    },
    gallery: [
        `${paritaImageBase}/bg-parita.webp`,
        `${paritaImageBase}/g1-parita.webp`,
        `${paritaImageBase}/g2-parita.webp`,
        `${paritaImageBase}/g3-parita.webp`,
        `${paritaImageBase}/g4-parita.webp`,
    ],
    descripcion:
        'Parita es uno de los pueblos coloniales más antiguos de Panamá, donde la historia, la tradición y la arquitectura conservan la esencia del interior del país. Su valor está en el patrimonio cultural y en la vida tradicional que aún mantiene.',
    previewDescripcion:
        'Historia colonial, tradición y cultura en uno de los pueblos más antiguos de Panamá.',
    previewUbicacion: 'Parita, Herrera',
    actividades: [
        {
            nombre: 'Fotografía',
            descripcion:
                'Captura plazas, fachadas antiguas y detalles arquitectónicos únicos del pueblo.',
            icono: '',
        },
        {
            nombre: 'Artesanías',
            descripcion:
                'Descubre talleres donde se elaboran piezas de alfarería y otras artesanías tradicionales de la región.',
            icono: '',
        },
        {
            nombre: 'Folclore',
            descripcion:
                'Conoce las tradiciones, danzas y manifestaciones culturales que identifican a Parita.',
            icono: '',
        },
        {
            nombre: 'Museos',
            descripcion:
                'Aprende sobre la historia y el patrimonio local a través de espacios culturales del distrito.',
            icono: '',
        },
        {
            nombre: 'Gastronomía',
            descripcion:
                'Prueba platos tradicionales y sabores auténticos del interior panameño.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Parita%20Herrera%20Panama&output=embed',
}
