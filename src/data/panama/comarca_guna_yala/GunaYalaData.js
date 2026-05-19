const GUNA_YALA_IMAGE = new URL('../../../assets/srcProvincias/comarca_guna_yala/guna ya.jpg', import.meta.url).href;

export const provincias = [
  {
    id: 'comarca-guna-yala',
    nombre: 'Comarca Guna Yala',

    banner: {
      tipo: 'imagen',
      src: GUNA_YALA_IMAGE,
      alt: 'Vista de la Comarca Guna Yala',
    },

    descripcionCorta:
      'Un archipiélago paradisíaco de aguas turquesas donde el tiempo parece detenerse. Guna Yala combina playas vírgenes de arena blanca con el misticismo de una de las culturas indígenas mejor preservadas de América.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202302.23954103104!2d-82.46734803926626!3d8.366126177385008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa578bccbaa2e9f%3A0x23db549450c8f698!2sGuna%20Yala%2C%20Panama!5e1!3m2!1sen!2spa!4v1778531685061!5m2!1sen!2spa',
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
        imagen: GUNA_YALA_IMAGE,
        ubicacion: 'Isla Cartí, Guna Yala',
      },
    ],

    ubicacion: {
      region: 'Caribe',
      pais: 'Panamá',
      coordenadas: {
        lat: 9.3,
        lng: -78.2,
      },
    },

    restoDeLugares: [
      {
        id: 'playa-uru',
        nombre: 'Playa Uru',
        descripcion: 'Playa tranquila de aguas claras y arena suave, perfecta para descansar y disfrutar del paisaje virgen de la comarca.',
        imagen: GUNA_YALA_IMAGE,
        ubicacion: 'Playa Uru, Guna Yala',
      },
    ],
  },
];