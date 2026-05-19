/* const  = new URL('../../../assets/srcProvincias/colon', import.meta.url).href;*/
const COLON_BANNER = new URL('../../../assets/srcProvincias/colon/ColonBanner.mp4', import.meta.url).href;
const CERRO_PAVON = new URL('../../../assets/srcProvincias/colon/Cerro_Pavon.mp4', import.meta.url).href;
const TUNEL_AMOR = new URL('../../../assets/srcProvincias/colon/El_tunel_del_amor.mp4', import.meta.url).href;
const LAGO_GATUN = new URL('../../../assets/srcProvincias/colon/Lago_Gatun.mp4', import.meta.url).href;
const PORTOBELLO = new URL('../../../assets/srcProvincias/colon/Portobelo.mp4', import.meta.url).href;
const FUERTE_SAN_FERNANDO = new URL('../../../assets/srcProvincias/colon/Fuerte_de_San_Fernando.mp4', import.meta.url).href;
const ISLA_MAMEY = new URL('../../../assets/srcProvincias/colon/Isla_Mamey.mp4', import.meta.url).href;


export const provincias = [
  {
    id: 'colon',
    nombre: 'Colón',

    banner: {
      tipo: 'video',
      src: COLON_BANNER,
      alt: 'Vista de la provincia de Colón',
    },

    descripcionCorta:
      'Caminar por Colón es encontrarse con la historia de frente en fortalezas que miran al Caribe desde hace siglos. Es una provincia con una identidad propia marcada por el ritmo de los tambores y la vida que se mueve entre islas de aguas claras y el paso constante de barcos por el Canal de Panamá.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797024.4492928673!2d-80.63741947944797!3d9.139537273998036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab25f6fbeed405%3A0xbc032eadbbacf29a!2sCol%C3%B3n%20Province!5e1!3m2!1sen!2spa!4v1778602312976!5m2!1sen!2spa',
    },

    actividades: [
      'Surf',
      'Ciclismo',
      'Playa',
      'Buceo',
      'Avistamiento de aves',
      'Giras históricas',
      'Esnórquel',
    ],

    resena:
      'La historia de Colón es un relato de épica colonial y modernidad logística. Fundada en 1852 como terminal del ferrocarril transístmico, la ciudad se convirtió rápidamente en un crisol de culturas. Sus fuertes en Portobelo y San Lorenzo protegieron durante siglos las riquezas que España transportaba hacia Europa, enfrentando constantes asedios de piratas famosos. Esta herencia bélica convive con la cultura congo, que mantiene viva la resistencia y la alegría de los antepasados africanos. Actualmente, la provincia es un pilar fundamental para el comercio global a través de sus puertos y el Canal, consolidándose como un destino que combina leyendas antiguas con una actividad económica sin precedentes.',

    lugaresDestacados: [
      {
        id: 'Cerro_Pavon',
        nombre: 'Cerro Pavón',
        descripcion: 'Mirador natural con vistas verdes y senderos ideales para caminatas de aventura en la provincia.',
        tipo: 'video',
        imagen: CERRO_PAVON,
        ubicacion: 'Cerro Pavón, Colón',
      },
      {
        id: 'El_tunel_del_amor',
        nombre: 'El Túnel del Amor',
        descripcion: 'Pasaje costero rodeado de vegetación y aguas tranquilas, perfecto para una experiencia visual diferente.',
        tipo: 'video',
        imagen: TUNEL_AMOR,
        ubicacion: 'El Túnel del Amor, Colón',
      },
      {
        id: 'Lago_Gatun',
        nombre: 'Lago Gatún',
        descripcion: 'Gran lago artificial vinculado al Canal de Panamá, famoso por sus paisajes, fauna y recorridos en bote.',
        tipo: 'video',
        imagen: LAGO_GATUN,
        ubicacion: 'Lago Gatún, Colón',
      },
      {
        id: 'Portobelo',
        nombre: 'Portobelo',
        descripcion: 'Pueblo histórico del Caribe panameño con fortalezas coloniales, tradición congo y una bahía llena de memoria.',
        tipo: 'video',
        imagen: PORTOBELLO,
        ubicacion: 'Portobelo, Colón',
      },
      {
        id: 'Fuerte_de_San_Fernando',
        nombre: 'Fuerte de San Fernando',
        descripcion: 'Fortificación colonial que recuerda la defense del Caribe y el paso de las rutas comerciales españolas.',
        tipo: 'video',
        imagen: FUERTE_SAN_FERNANDO,
        ubicacion: 'Fuerte de San Fernando, Colón',
      },
      {
        id: 'Sendero_Tortuguilla',
        nombre: 'Sendero Tortuguilla',
        descripcion: 'Sendero natural para caminar entre vegetación tropical y descubrir la biodiversidad costera de Colón.',
        imagen: 'https://dam.visitpanama.com/files/8938cfaa-c15c-32b5-8024-7f27e64c4712?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779206921946&signature=rT%2FiSyVTyu22ZwBT%2BwhBt5FRHn2REOy7wG4I%2FJKj5Cy%2FKlponlIs74%2BjnvpVqciGth%2BYubBLUT16A4m4PIA4AQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Sendero Tortuguilla, Colón',
      },
      {
        id: 'Fuerte_de_San_Lorenzo',
        nombre: 'Fuerte de San Lorenzo',
        descripcion: 'Imponente fortaleza histórica ubicada frente al Caribe, declarada patrimonio por su valor colonial.',
        imagen: 'https://dam.visitpanama.com/files/870254a4-7c50-3ece-9266-19fcfd18c4e4?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779206962375&signature=qX7aMqHFxpucRwcWwCjAQ0N3YYeXxE%2BAHy%2FybkwyolLDXGO7H2aXrfCBghdEpyrnNuAZKkexZ5heUNZjniFaAA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Fuerte de San Lorenzo, Colón',
      },
      {
        id: 'Isla_Mamey',
        nombre: 'Isla Mamey',
        descripcion: 'Isla caribeña de aguas claras y ambiente relajado, ideal para playa, esnórquel y escapadas de un día.',
        tipo: 'video',
        imagen: ISLA_MAMEY,
        ubicacion: 'Isla Mamey, Colón',
      },
    ],
  },
];