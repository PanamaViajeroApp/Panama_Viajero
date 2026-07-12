const playaMalibuImageBase = '/images/destinations/rivera-pacifica/playa-malibu'

export const playaMalibu = {
  id: 'playa-malibu',
  provinceIds: ['panama-oeste'],
  sharedProvinceIds: ['panama-oeste'],
  riveraPacifica: true,
  nombre: 'Playa Malibú',
  banner: {
    src: `${playaMalibuImageBase}/bg-playa-malibu.webp`,
    alt: 'Banner de Playa Malibú',
  },
  gallery: [
    `${playaMalibuImageBase}/bg-playa-malibu.webp`,
    `${playaMalibuImageBase}/g1-playa-malibu.webp`,
    `${playaMalibuImageBase}/g2-playa-malibu.webp`,
    `${playaMalibuImageBase}/g3-playa-malibu.webp`,
    `${playaMalibuImageBase}/g4-playa-malibu.webp`,
    `${playaMalibuImageBase}/g5-playa-malibu.webp`,
    `${playaMalibuImageBase}/g6-playa-malibu.webp`,
  ],
  descripcion:
    'Uno de los puntos de surf más reconocidos de la Rivera Pacífica, famoso por sus olas consistentes, su ambiente relajado y su conexión con la cultura surfista panameña. Playa Malibú combina adrenalina, paisajes abiertos y una energía costera ideal para aventureros y amantes del mar.',
  previewDescripcion:
    'Una playa icónica para surfistas, con olas reconocidas y un ambiente vibrante frente al Pacífico.',
  previewUbicacion: 'Gorgona, Panamá Oeste',
  actividades: [
    {
      nombre: 'Surf',
      descripcion:
        'Aprovecha sus olas de nivel reconocido, ideales tanto para surfistas experimentados como para quienes buscan mejorar su técnica.',
      icono: '',
    },
    {
      nombre: 'Bodyboard',
      descripcion:
        'Disfruta de la fuerza de las olas con una alternativa dinámica y divertida para diferentes niveles.',
      icono: '',
    },
    {
      nombre: 'Fotografía',
      descripcion:
        'Captura la energía de los surfistas, los paisajes del Pacífico y las impresionantes vistas costeras.',
      icono: '',
    },
    {
      nombre: 'Gastronomía',
      descripcion:
        'Prueba mariscos frescos y comida típica en pequeños restaurantes cercanos a la playa.',
      icono: ''
    }
  ],
  ubicacion:
    'https://www.google.com/maps?q=Playa%20Malibu%20Panama%20Oeste&output=embed',
}