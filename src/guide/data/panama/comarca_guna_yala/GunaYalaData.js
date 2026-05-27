

export const provincias = [
  {
    id: 'comarca-guna-yala',
    nombre: 'Comarca Guna Yala (San Blas)',

    banner: {
      tipo: 'video',
      src: '/videos/guna_yala/GunaYalaBanner.av1.mp4',
      alt: 'Vista de la Comarca Guna Yala',
    },

    descripcionCorta:
      'Un archipiélago paradisíaco de aguas turquesas donde el tiempo parece detenerse. Guna Yala combina playas vírgenes de arena blanca con el misticismo de una de las culturas indígenas mejor preservadas de América.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825591.6817842708!2d-79.64365842487119!3d9.052276123298334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e513dd4281b06cf%3A0x13d9b0240ba4f630!2sGuna%20Yala%20Comarca!5e1!3m2!1sen!2spa!4v1779311689200!5m2!1sen!2spa',
    },

    actividades: [
      'Playa',
      'Inmersión cultural',
      'Ecoturismo',
      'Esnórquel',
      'Compra de molas',
      'Senderismo',
    ],

    resena:
      'La historia de Guna Yala es un testimonio de resistencia, autonomía y profunda conexión con la naturaleza. Antiguamente conocida como San Blas, esta comarca indígena consolidó su soberanía tras la histórica Revolución Guna de 1925, dando origen a un modelo de autogobierno regulado por el Congreso General Guna. Su sociedad destaca por su estructura comunitaria y por la preservación de tradiciones milenarias, donde las mujeres desempeñan un rol fundamental como creadoras de las molas, complejos tejidos que reflejan su cosmovisión. El archipiélago, compuesto por más de 360 islas, representa un santuario ecológico donde el turismo sostenible es gestionado de manera exclusiva por su propio pueblo.',

    lugaresDestacados: [
      {
        id: 'isla-carti',
        nombre: 'Isla Cartí',
        descripcion: 'Comunidad portuaria e isla cultural de acceso frecuente, ideal para conocer de cerca el estilo de vida guna y abordar los botes hacia el archipiélago.',
        imagen: '/maps/provinces/comarca-guna-yala.avif',
        ubicacion: 'Isla Cartí, Guna Yala',
      },
      {
        id: 'isla-perro',
        nombre: 'Isla Perro (Chichime)',
        descripcion: 'Una de las islas turísticas más famosas, conocida mundialmente por el barco hundido cerca de su orilla, el cual está cubierto de coral y es perfecto para hacer esnórquel.',
        tipo: 'imagen',
        imagen: '/videos/guna_yala/isla-perro.avif',
        ubicacion: 'Archipiélago de San Blas, Guna Yala',
      },
    ],

  },
];
