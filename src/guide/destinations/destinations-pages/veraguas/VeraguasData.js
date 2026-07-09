const VERAGUAS_BANNER = '/videos/veraguas/VeraguasBanner.av1.mp4'

export const provincias = [
  {
    id: 'veraguas',
    nombre: 'Veraguas',

    banner: {
      tipo: 'video',
      src: VERAGUAS_BANNER,
      alt: 'Vista de la provincia de Veraguas',
    },

    descripcionCorta:
      'Veraguas combina costa, islas, montañas y pueblos interiores en una sola provincia. Es un destino versátil para surf, naturaleza, buceo y escapadas tranquilas en distintas regiones del país.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598685.7655912635!2d-82.7498707822495!3d8.03766501294524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae170daec5093b%3A0xc558fcd4c89d62fd!2sVeraguas%20Province!5e1!3m2!1sen!2spa!4v1778777648582!5m2!1sen!2spa',
    },
    actividades: [
      'Buceo',
      'Surf',
      'Senderismo',
      'Pesca deportiva',
      'Kayak',
      'Playas caribeñas',
      'Ríos',
      'Fauna',
      'Fotografía',
      '4x4',
      'Playas vírgenes',
      'Snorkel',
      'Lancha',
      'Atardecer',
      'Ejercicio',
      'Escapada',
      'Costa',
      'Naturaleza',
      'Pesca',
      'Gastronomía',
      'Coiba',
      'Catedral',
      'Parques',
      'Compras',
    ],

    directSiteIds: [
      'santiago',
      'isla-cebaco',
      'calovebora',
      'santa-catalina',
      'playa-torio',
      'playa-el-estero',
      'playa-morrillo',
    ],
    displayMode: 'sites-only',
  },
]
