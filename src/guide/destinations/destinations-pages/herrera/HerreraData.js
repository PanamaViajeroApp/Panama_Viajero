export const provincias = [
  {
    id: 'herrera',
    nombre: 'Herrera',

    banner: {
      tipo: 'video',
      src: '/videos/herrera/HerreraBanner.av1.mp4',
      alt: 'Vista de la provincia de Herrera',
    },

    descripcionCorta:
      'Herrera te recibe con la calidez de un pueblo que nunca olvida sus raíces y celebra la vida en cada festival folclórico. Desde el paisaje surrealista de Sarigua hasta la maestría de sus artesanos, esta provincia es el sitio donde la hospitalidad panameña se siente más real y auténtica.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Herrera%2C%20Panam%C3%A1&output=embed',
    },

    actividades: [
      'Tours de alfarería',
      'Cata de licores',
      'Ciclismo',
      'Senderismo en manglares',
      'Visitas a iglesias',
      'Tours gastronómicos',
    ],

    lugaresDestacados: [
      {
        id: 'Chitre',
        nombre: 'Chitré',
        descripcion: 'Capital provincial reconocida por su vibrante vida comercial, sus emblemáticas fiestas populares y su ambiente hospitalario.',
        tipo: 'imagen',
        imagen: '/videos/herrera/Chitre.avif',
        ubicacion: 'Chitré, Herrera',
      },
      {
        id: 'Pese',
        nombre: 'Pesé',
        descripcion: 'Pueblo histórico, cuna del desarrollo de la caña y estrechamente ligado a la tradición de la destilería y al auténtico sabor interiorano.',
        tipo: 'video',
        imagen: '/videos/herrera/Pese.av1.mp4',
        ubicacion: 'Pesé, Herrera',
      },
      {
        id: 'Sarigua',
        nombre: 'Sarigua',
        descripcion: 'Ecosistema de albina y área árida de gran valor científico e histórico, que cuenta con senderos arqueológicos únicos en Azuero.',
        tipo: 'imagen',
        imagen: '/videos/herrera/Sarigua.avif',
        ubicacion: 'Parque Nacional Sarigua, Herrera',
      },
    ],
  },
];
