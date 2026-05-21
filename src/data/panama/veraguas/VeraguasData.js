const VERAGUAS_BANNER = '/videos/veraguas/VeraguasBanner.mp4';
const ISLA_CEBACO = '/videos/veraguas/Isla_Cebaco.mp4';
const MARIATO = '/videos/veraguas/Mariato.mp4';
const ISLA_COCOS = '/videos/veraguas/Isla_Cocos.mp4';
const ISLA_RANCHERIA = '/videos/veraguas/Isla_Rancheria.mp4';
const PLAYA_EL_ESTERO = '/videos/veraguas/Playa_El_Estero.mp4';

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
      'Veraguas es la única provincia que te permite ver el amanecer en un océano y el atardecer en otro bajo el mismo cielo. Es el paraíso de los que buscan la soledad de islas protegidas como Coiba y la frescura de montañas que guardan tesoros artísticos del tiempo de la colonia.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598685.7655912635!2d-82.7498707822495!3d8.03766501294524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae170daec5093b%3A0xc558fcd4c89d62fd!2sVeraguas%20Province!5e1!3m2!1sen!2spa!4v1778777648582!5m2!1sen!2spa',
    },

    actividades: [
      'Buceo en arrecifes',
      'Surf de clase mundial',
      'Senderismo de montaña',
      'Pesca deportiva',
      'Avistamiento de ballenas',
      'Kayak de mar',
      'Observación de tortugas',
      'Ciclismo de ruta',
    ],

    resena:
      'La historia de Veraguas está marcada por su posición privilegiada como el nexo entre los dos grandes mares que bañan a Panamá. Fue una tierra otorgada a la familia de Cristóbal Colón y, desde siempre, ha sido un pilar de la vida rural y ganadera del interior del país. Su verdadera joya es la Isla de Coiba, que pasó de ser una prisión de acceso prohibido a convertirse en uno de los parques naturales más increíbles del mundo. Es una provincia de contrastes que ha sabido proteger la mística de sus pueblos de montaña, como San Francisco, mientras se convierte en un referente mundial para los amantes del surf que buscan olas perfectas en la costa de Santa Catalina.',

    lugaresDestacados: [
      {
        id: 'Isla_Coiba',
        nombre: 'Isla Coiba',
        descripcion: 'Parque nacional marino y Patrimonio de la Humanidad con arrecifes coralinos intactos y una biodiversidad excepcional para el buceo científico y de aventura.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/Isla_Coiba.avif',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Santa_Catalina',
        nombre: 'Santa Catalina',
        descripcion: 'Pueblo costero de fama internacional por su rompiente de olas consistentes, ambiente bohemio de surf y puerto de acceso hacia Coiba.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/Santa_Catalina.avif',
        ubicacion: 'Santa Catalina, Veraguas',
      },
      {
        id: 'Isla_Cebaco',
        nombre: 'Isla Cébaco',
        descripcion: 'Isla extensa y un paraíso virgen poco masificado, con playas de arena dorada ideales para la desconexión total y la pesca.',
        tipo: 'video',
        imagen: '/videos/veraguas/Isla_Cebaco.mp4',
        ubicacion: 'Isla Cébaco, Veraguas',
      },
      {
        id: 'Mariato',
        nombre: 'Mariato',
        descripcion: 'Distrito costero que alberga el punto más al sur del continente centroamericano, con playas abiertas y reservas naturales imponentes.',
        tipo: 'video',
        imagen: '/videos/veraguas/Mariato.mp4',
        ubicacion: 'Mariato, Veraguas',
      },
      {
        id: 'Isla_Cocos',
        nombre: 'Isla Cocos',
        descripcion: 'Pequeño rincón paradisíaco de arenas blancas y palmeras dentro del entorno veragüense, perfecto para la fotografía de paisaje.',
        tipo: 'video',
        imagen: '/videos/veraguas/Isla_Cocos.mp4',
        ubicacion: 'Isla Cocos, Veraguas',
      },
      {
        id: 'Isla_Rancheria',
        nombre: 'Isla Ranchería',
        descripcion: 'También conocida como Coibita, una isla de aguas cristalinas y cocoteros frecuentada como zona de descanso al explorar el parque marino.',
        tipo: 'video',
        imagen: '/videos/veraguas/Isla_Rancheria.mp4',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Playa_El_Estero',
        nombre: 'Playa El Estero',
        descripcion: 'Extensa playa de arena oscura en Santa Catalina, con condiciones perfectas para escuelas de surf y caminatas al atardecer.',
        tipo: 'video',
        imagen: '/videos/veraguas/Playa_El_Estero.mp4',
        ubicacion: 'Santa Catalina, Veraguas',
      },
      /*
imagen:'/videos/veraguas',
*/

      
      {
        id: 'Isla_Granito_de_Oro',
        nombre: 'Isla Granito de Oro',
        descripcion: 'Famoso islote que funciona como un acuario natural flotante, considerado uno de los mejores lugares del mundo para el esnórquel.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/Isla_Granito_de_Oro.avif',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Isla_Tortuga',
        nombre: 'Isla Tortuga',
        descripcion: 'Isla pintoresca de entorno marino protegido, ideal para excursiones de un día, buceo libre y relajación costera.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/Isla_Tortuga.avif',
        ubicacion: 'Isla Tortuga, Veraguas',
      },
      {
        id: 'El_Faro_Dive_Site',
        nombre: 'El Faro Dive Site',
        descripcion: 'Soberbio sitio de buceo profundo en los límites de Coiba, célebre por el avistamiento de grandes pelágicos y tiburones ballena.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/El_Faro_Dive_Site.avif',     
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Parque_Nacional_Santa_Fe',
        nombre: 'Parque Nacional Santa Fe',
        descripcion: 'Santuario de montaña con un bosque nuboso que protege innumerables ríos, cascadas cristalinas y senderos de alta biodiversidad.',
        tipo: 'imagen',
        imagen:'/videos/veraguas/Parque_Nacional_Santa_Fe.avif',
        ubicacion: 'Parque Nacional Santa Fe, Veraguas',
      },
    ],
  },
];
