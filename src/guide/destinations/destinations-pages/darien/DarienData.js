

export const provincias = [
  {
    id: 'darien',
    nombre: 'Darién',

    banner: {
      tipo: 'video',
      src: '/videos/darien/DarienBanner.av1.mp4',
      alt: 'Vista de la provincia de Darién',
    },

    descripcionCorta:
      'Darién es el último refugio de la vida salvaje donde el asfalto se rinde ante el dominio de la selva tropical más densa del continente. Es el destino ideal para los exploradores de corazón que buscan conocer la sabiduría de pueblos que viven en armonía con la naturaleza.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Dari%C3%A9n%2C%20Panam%C3%A1&output=embed',
    },

    actividades: [
      'Expediciones en selva',
      'Avistamiento de aves',
      'Navegación en piragua',
      'Convivencia indígena',
      'Fotografía de naturaleza',
      'Pesca artesanal',
    ],

    lugaresDestacados: [
      {
        id: 'Parque_Nacional_Darien',
        nombre: 'Parque Nacional Darién',
        descripcion: 'Área protegida de selva tropical, ríos y biodiversidad única, declarada Patrimonio de la Humanidad e ideal para expediciones de naturaleza.',
        tipo: 'imagen',
        imagen: '/videos/darien/Parque_Nacional_Darien.avif',
        ubicacion: 'Parque Nacional Darién, Darién',
      },
      {
        id: 'La_Palma',
        nombre: 'La Palma',
        descripcion: 'Cabecera provincial ubicada frente al golfo de San Miguel, punto de entrada a rutas fluviales y comunidades locales.',
        tipo: 'imagen',
        imagen: '/videos/darien/La_Palma.avif',
        ubicacion: 'La Palma, Darién',
      },
      {
        id: 'Comunidades_Embera_Wounaan',
        nombre: 'Comunidades Emberá y Wounaan',
        descripcion: 'Asentamientos indígenas a orillas del río donde se pueden conocer tradiciones ancestrales, artesanías y formas de vida ligadas al bosque.',
        tipo: 'imagen',
        imagen: '/videos/darien/Comunidades_Embera_Wounaan.avif',
        ubicacion: 'Comunidades Indígenas, Darién',
      },
    ],
  },
];
