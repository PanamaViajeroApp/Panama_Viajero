const PESE = new URL('../../../assets/srcProvincias/herrera/Pese.mp4', import.meta.url).href;
const HERRERA_BANNER = new URL('../../../assets/srcProvincias/herrera/HerreraBanner.mp4', import.meta.url).href;

export const provincias = [
  {
    id: 'herrera',
    nombre: 'Herrera',

    banner: {
      tipo: 'video',
      src: HERRERA_BANNER,
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

    resena:
      'A Herrera se viene a conocer el alma de la península de Azuero y a entender por qué a Chitré se le llama "la ciudad donde nadie es forastero". Su historia está forjada por el trabajo de hombres y mujeres que convirtieron la alfarería y la destilería en un arte reconocido a nivel internacional. Cada calle y cada plaza de esta provincia guardan ecos de un pasado colonial que todavía se celebra con danzas tradicionales de diablicos y un profundo respeto por lo religioso. Es una tierra que ha sabido mantener su sencillez interiorana mientras se desarrolla como un centro comercial clave, demostrando que se puede mirar al futuro sin soltar nunca la mano de las costumbres de los abuelos.',

    lugaresDestacados: [
      {
        id: 'Chitre',
        nombre: 'Chitré',
        descripcion: 'Capital provincial reconocida por su vibrante vida comercial, sus emblemáticas fiestas populares y su ambiente hospitalario.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/8a378958-c79b-3dae-ae56-c22afaac316c?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779378216450&signature=nDtnlQ5PkTwMM%2BAdeOuUOzgySOk9HHUdSQNv1gph%2BwW8%2FBL%2BPS4ATaIFG83W%2FtB%2Fd3Zo3QFRT6bkldRN0%2FMkAw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Chitré, Herrera',
      },
      {
        id: 'Pese',
        nombre: 'Pesé',
        descripcion: 'Pueblo histórico, cuna del desarrollo de la caña y estrechamente ligado a la tradición de la destilería y al auténtico sabor interiorano.',
        tipo: 'video',
        imagen: PESE,
        ubicacion: 'Pesé, Herrera',
      },
      {
        id: 'Sarigua',
        nombre: 'Sarigua',
        descripcion: 'Ecosistema de albina y área árida de gran valor científico e histórico, que cuenta con senderos arqueológicos únicos en Azuero.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/04357342-5f12-3970-ae21-2584210ac474?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779378311486&signature=KAve1y6ptYiMF9HHAy4ovW2wdBYH9Dw2SpttEiESZRv3DkPnnkF%2BQ7gda4V9WjkY3CAMsAbo5ScweJSm%2BpVEBw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Sarigua, Herrera',
      },
    ],
  },
];