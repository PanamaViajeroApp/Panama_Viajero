/* const  = new URL('../../../assets/srcProvincias/los_santos/', import.meta.url).href;*/
const LOS_SANTOS_BANNER = new URL('../../../assets/srcProvincias/los_santos/Los_santos_Banner.mp4', import.meta.url).href;
const PLAYA_VENAO = new URL('../../../assets/srcProvincias/los_santos/Playa_Venao.mp4', import.meta.url).href;
const ISLA_IGUANA = new URL('../../../assets/srcProvincias/los_santos/Isla_Iguana.mp4', import.meta.url).href;
const PLAYA_CAMBUTAL = new URL('../../../assets/srcProvincias/los_santos/Playa_Cambutal.mp4', import.meta.url).href;
const ISLA_CANAS = new URL('../../../assets/srcProvincias/los_santos/Isla_Canas.mp4', import.meta.url).href;
const CAJONES_LA_ANGOSTURA = new URL('../../../assets/srcProvincias/los_santos/Cajones_la_Angostura.mp4', import.meta.url).href;

export const provincias = [
  {
    id: 'los-santos',
    nombre: 'Los Santos',

    banner: {
      tipo: 'video',
      src: LOS_SANTOS_BANNER,
      alt: 'Vista de la provincia de Los Santos',
    },

    descripcionCorta:
      'En Los Santos el sonido de las olas en Playa Venao se mezcla con el brillo de las polleras que desfilan en Las Tablas. Es una tierra que celebra su herencia con un orgullo contagioso y ofrece un verano que parece no terminar nunca entre festivales típicos y rincones costeros.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800149.8559370011!2d-81.02376376870646!3d7.617113133350591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fad8f544ae54379%3A0x2a58179fa0ed53fd!2sLos%20Santos%20Province!5e1!3m2!1sen!2spa!4v1778690206614!5m2!1sen!2spa',
    },

    actividades: [
      'Surf de clase mundial',
      'Pesca deportiva',
      'Buceo y esnórquel',
      'Observación de ballenas',
      'Festivales folclóricos',
      'Camping',
      'Ciclismo de ruta',
    ],

    resena:
      'Los Santos es el corazón de la península de Azuero y el lugar donde nació el espíritu libertador del país con el famoso Grito de La Villa en 1821. Su historia es un relato de familias que han perfeccionado el arte de la pollera y la orfebrería durante generaciones, convirtiendo cada traje en una pieza de historia viva. Mientras caminas por las plazas de sus pueblos coloniales, sientes el peso de una tradición que no se rinde ante el paso del tiempo. Desde las hazañas de los próceres hasta la vida tranquila de los pescadores en Pedasí, esta provincia representa el equilibrio perfecto entre el respeto por lo que fuimos y la alegría de un pueblo que celebra su identidad.',

    lugaresDestacados: [
      {
        id: 'Playa_Venao',
        nombre: 'Playa Venao',
        descripcion: 'Playa de fama internacional reconocida por sus olas consistentes, ambiente bohemio y vibrante vida costera, ideal para surfistas y viajeros.',
        tipo: 'video',
        imagen: PLAYA_VENAO,
        ubicacion: 'Playa Venao, Los Santos',
      },
      {
        id: 'Isla_Iguana',
        nombre: 'Isla Iguana',
        descripcion: 'Refugio de vida silvestre con un arrecife de coral espectacular, aguas cristalinas, arena blanca y espacios ideales para el buceo libre.',
        tipo: 'video',
        imagen: ISLA_IGUANA,
        ubicacion: 'Refugio de Vida Silvestre Isla Iguana, Los Santos',
      },
      {
        id: 'Playa_Cambutal',
        nombre: 'Playa Cambutal',
        descripcion: 'Costa imponente y tranquila donde las montañas se encuentran con el océano Pacífico, un rincón perfecto para el surf y la pesca profunda.',
        tipo: 'video',
        imagen: PLAYA_CAMBUTAL,
        ubicacion: 'Playa Cambutal, Los Santos',
      },
      {
        id: 'Isla_Canas',
        nombre: 'Isla Cañas',
        descripcion: 'Santuario ecológico y hogar de extensos manglares, famoso a nivel global por ser un sitio clave de anidación de miles de tortugas marinas.',
        tipo: 'video',
        imagen: ISLA_CANAS,
        ubicacion: 'Isla Cañas, Los Santos',
      },
      {
        id: 'Cajones_la_Angostura',
        nombre: 'Cajones de La Angostura',
        descripcion: 'Cañón y formación rocosa donde el río Oria se estrecha creando pozas naturales profundas, perfectas para nadar y explorar.',
        tipo: 'video',
        imagen: CAJONES_LA_ANGOSTURA,
        ubicacion: 'Cajones de La Angostura, Los Santos',
      },
      {
        id: 'Cerro_Hoya',
        nombre: 'Cerro Hoya',
        descripcion: 'Parque nacional montañoso que protege el bosque lluvioso más antiguo de Azuero, refugio de especies endémicas y cascadas ocultas.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/4bf29a02-49b6-3a60-8f89-bd28976ad56b?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779297667759&signature=R37gCO5CDDNEabyjLe%2BkQHi4e%2Bey85mNMrdnXX1%2BxrlhBTQ3aw91mRFHhw9MxV2LYOISdOQ1Z6lketHPnHwCCQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Cerro Hoya, Los Santos',
      },
    ],
  },
];