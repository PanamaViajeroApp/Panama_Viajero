
export const provincias = [
  {
    id: 'panama-oeste',
    nombre: 'Panamá Oeste',

    banner: {
      tipo: 'video',
      src: '/videos/panamaOeste/VideoBannerPanamaOeste.av1.mp4',
      alt: 'Vista de la provincia de Panamá Oeste',
    },

    descripcionCorta:
      'Panamá Oeste es el respiro necesario que te saca de la ciudad para llevarte a la brisa fresca del Cerro Campana en menos de una hora. Disfruta de un destino que combina la tranquilidad de la vida de campo con playas que ofrecen el escape perfecto para cada fin de semana. ',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913425.1409493805!2d-80.52579866505599!3d8.800879120442339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5363df156c409f%3A0x1ba52dd719570414!2sPanam%C3%A1%20Oeste%20Province!5e1!3m2!1sen!2spa!4v1779308611155!5m2!1sen!2spa',
      
    },

    actividades: [
      'Surf',
      'Senderismo',
      'Ciclismo',
      'Picnics',
      'Playas',
      'Fotografía',
      'Camping',
      'Canopy',
      'Kitesurf',
      'Windsurf',

    ],

    targets: [
      {
        id: 'rivera-pacifica',
        type: 'zone',
        zoneId: 'rivera-pacifica',
        nombre: 'Rivera Pacífica',
        descripcion: 'Zona',
        imagen: '/maps/provinces/cocle.avif',
      },
    ],

    directSiteIds: [],

    lugaresDestacados: [
      {
        id: 'Cascada_Las_Filipinas',
        nombre: 'Cascada Las Filipinas',
        descripcion: 'Un impresionante circuito de varias cascadas escondidas en la montaña, ideal para los amantes del senderismo, la aventura y los chapuzones en pozas cristalinas.',
        tipo: 'video',
        imagen: '/videos/panamaOeste/Cascada_Las_Filipinas.av1.mp4',
        ubicacion: 'Las Filipinas, Sorá, Panamá Oeste',
      },
      {
        id: 'Cerro_Chame',
        nombre: 'Cerro Chame',
        descripcion: 'Una imponente elevación natural que ofrece una caminata exigente pero gratificante, con una vista panorámica espectacular de 360 grados hacia la península de Punta Chame y el Pacífico.',
        tipo: 'imagen',
        imagen: '/videos/panamaOeste/Cerro_Chame.avif',
        ubicacion: 'Chame, Panamá Oeste',
      },
      {
        id: 'Cascada_El_Manglarito',
        nombre: 'Cascada El Manglarito',
        descripcion: 'Un hermoso tesoro natural oculto entre densa vegetación, famoso por su espectacular caída de agua y una gran poza profunda perfecta para nadar y relajarse.',
        tipo: 'imagen',
        imagen: '/videos/panamaOeste/Cascada_El_Manglarito.avif',
        ubicacion: 'Chame, Panamá Oeste',
      },
      {
        id: 'Playa_El_Palmar',
        nombre: 'Playa El Palmar',
        descripcion: 'Una de las playas más populares y vibrantes para aprender y practicar surf, conocida por sus buenas olas, escuelas de surf locales y un gran ambiente costero.',
        tipo: 'imagen',
        imagen: '/videos/panamaOeste/Playa_El_Palmar.avif',
        ubicacion: 'San Carlos, Panamá Oeste',
      },
      {
        id: 'Playa_Santa_Clara',
        nombre: 'Playa Santa Clara',
        descripcion: 'Famosa playa de arena blanca y aguas tranquilas, considerada un destino ideal para pasar el día en familia, relajarse bajo el sol y disfrutar del mar Pacífico.',
        tipo: 'video',
        imagen: '/videos/panamaOeste/Playa_Santa_Clara.av1.mp4',
        ubicacion: 'Santa Clara, Coclé', // Nota: Tradicionalmente pertenece a Coclé, pero queda excelente en el circuito de playas del oeste.
      },
    ],
  },
];
