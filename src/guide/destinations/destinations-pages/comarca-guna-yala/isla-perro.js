const islaPerroImageBase = '/images/destinations/guna-yala/isla-perro'

export const islaPerro = {
    id: 'isla-perro',
    provinceId: 'guna-yala',
    nombre: 'Isla Perro',
    banner: {
        src: `${islaPerroImageBase}/bg-isla-perro.webp`,
        alt: 'Banner de Isla Perro',
    },
    gallery: [
        `${islaPerroImageBase}/bg-isla-perro.webp`,
        `${islaPerroImageBase}/g1-isla-perro.webp`,
        `${islaPerroImageBase}/g2-isla-perro.webp`,
        `${islaPerroImageBase}/g3-isla-perro.webp`,
        `${islaPerroImageBase}/g4-isla-perro.webp`,
    ],
    descripcion:
        'Isla Perro es una de las islas más conocidas de Guna Yala, famosa por sus aguas cristalinas, arena blanca y el barco hundido cercano a la costa. Es un destino muy completo para disfrutar de playa, snorkel y vida marina en un entorno caribeño.',
    previewDescripcion:
        'Playa paradisíaca, snorkel y un barco hundido en las aguas cristalinas de Guna Yala.',
    previewUbicacion: 'Guna Yala',
actividades: [
    {
        nombre: 'Snorkel',
        descripcion:
            'Explora uno de los atractivos más emblemáticos de Guna Yala mientras nadas entre peces tropicales y restos del naufragio.',
        icono: '',
    },
    {
        nombre: 'Estrellas de mar',
        descripcion:
            'Observa estrellas de mar en aguas cristalinas, respetando su hábitat y evitando manipularlas.',
        icono: '',
    },
    {
        nombre: 'Paseo en bote',
        descripcion:
            'Explora otras islas y cayos cercanos del archipiélago para ampliar la experiencia en Guna Yala.',
        icono: '',
    },
    {
        nombre: 'Fotografía',
        descripcion:
            'Captura aguas turquesas, playas de arena blanca y el famoso naufragio visible desde la superficie.',
        icono: '',
    },
    {
        nombre: 'Gastronomía',
        descripcion:
            'Disfruta pescado fresco, mariscos y platillos tradicionales preparados por las comunidades guna.',
        icono: '',
    },
],
    ubicacion:
        'https://www.google.com/maps?q=Isla%20Perro%20Guna%20Yala%20Panama&output=embed',
}
