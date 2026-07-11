const sariguaImageBase = '/images/destinations/herrera/desierto-sarigua'

export const desiertoSarigua = {
    id: 'desierto-sarigua',
    provinceId: 'herrera',
    nombre: 'Desierto de Sarigua',
    banner: {
        src: `${sariguaImageBase}/bg-desierto-sarigua.webp`,
        alt: 'Banner del Desierto de Sarigua',
    },
    gallery: [
        `${sariguaImageBase}/bg-desierto-sarigua.webp`,
        `${sariguaImageBase}/g1-desierto-sarigua.webp`,
        `${sariguaImageBase}/g2-desierto-sarigua.webp`,
        `${sariguaImageBase}/g3-desierto-sarigua.webp`,
    ],
    descripcion:
        'El Desierto de Sarigua es uno de los paisajes más singulares de Panamá, con planicies salinizadas, historia arqueológica y ecosistemas costeros. Su entorno árido y abierto lo convierte en un lugar muy atractivo para la exploración y la fotografía.',
    previewDescripcion:
        'Paisajes áridos, historia milenaria y uno de los escenarios naturales más únicos de Panamá.',
    previewUbicacion: 'Parita, Herrera',
    actividades: [
        {
            nombre: 'Fotografía',
            descripcion:
                'Captura escenarios áridos, formaciones naturales y horizontes abiertos ideales para fotografía.',
            icono: '',
        },
        {
            nombre: 'Arqueología',
            descripcion:
                'Conoce una de las zonas de ocupación humana más antiguas del país con importantes vestigios históricos.',
            icono: '',
        },
        {
            nombre: 'Avistamiento de aves',
            descripcion:
                'Descubre especies migratorias y aves costeras que habitan en los alrededores del parque.',
            icono: '',
        },
        {
            nombre: 'Manglares',
            descripcion:
                'Visita ecosistemas costeros que contrastan con la aridez del parque.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Parque%20Nacional%20Sarigua%20Parita%20Panama&output=embed',
}
