/* const  = new URL('../../../assets/srcProvincias', import.meta.url).href; */
const VERAGUAS_BANNER = new URL('../../../assets/srcProvincias/veraguas/VeraguasBanner.mp4', import.meta.url).href;
const ISLA_CEBACO = new URL('../../../assets/srcProvincias/veraguas/Isla_Cebaco.mp4', import.meta.url).href;
const MARIATO = new URL('../../../assets/srcProvincias/veraguas/Mariato.mp4', import.meta.url).href;
const ISLA_COCOS = new URL('../../../assets/srcProvincias/veraguas/Isla_Cocos.mp4', import.meta.url).href;
const ISLA_RANCHERIA = new URL('../../../assets/srcProvincias/veraguas/Isla_Rancheria.mp4', import.meta.url).href;
const PLAYA_EL_ESTERO = new URL('../../../assets/srcProvincias/veraguas/Playa_el_estero.mp4', import.meta.url).href;

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
        imagen: 'https://dam.visitpanama.com/files/a2c8b300-80e1-3f99-a669-6c208b2350df?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779380998809&signature=l17W71xP3dxrrw9m3oMPBgQA1FzZR0m59iu4gJXK1ZOO3r5AHg%2BV1qWbbebrMVr2L3lkVzzkfm93FkvqD6z2Dg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Santa_Catalina',
        nombre: 'Santa Catalina',
        descripcion: 'Pueblo costero de fama internacional por su rompiente de olas consistentes, ambiente bohemio de surf y puerto de acceso hacia Coiba.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/39642742-ef17-3654-9914-005ffac90ed4?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381024977&signature=L%2BmQJK71vPaS3nS06E5ggGs9cRUDwIbEXohyrbnZvHPFGCHTbywdEXARDi4mXHDgThSAxV0mrMOHcNupPIXFDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Santa Catalina, Veraguas',
      },
      {
        id: 'Isla_Cebaco',
        nombre: 'Isla Cébaco',
        descripcion: 'Isla extensa y un paraíso virgen poco masificado, con playas de arena dorada ideales para la desconexión total y la pesca.',
        tipo: 'video',
        imagen: ISLA_CEBACO,
        ubicacion: 'Isla Cébaco, Veraguas',
      },
      {
        id: 'Mariato',
        nombre: 'Mariato',
        descripcion: 'Distrito costero que alberga el punto más al sur del continente centroamericano, con playas abiertas y reservas naturales imponentes.',
        tipo: 'video',
        imagen: MARIATO,
        ubicacion: 'Mariato, Veraguas',
      },
      {
        id: 'Isla_Cocos',
        nombre: 'Isla Cocos',
        descripcion: 'Pequeño rincón paradisíaco de arenas blancas y palmeras dentro del entorno veragüense, perfecto para la fotografía de paisaje.',
        tipo: 'video',
        imagen: ISLA_COCOS,
        ubicacion: 'Isla Cocos, Veraguas',
      },
      {
        id: 'Isla_Rancheria',
        nombre: 'Isla Ranchería',
        descripcion: 'También conocida como Coibita, una isla de aguas cristalinas y cocoteros frecuentada como zona de descanso al explorar el parque marino.',
        tipo: 'video',
        imagen: ISLA_RANCHERIA,
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Playa_El_Estero',
        nombre: 'Playa El Estero',
        descripcion: 'Extensa playa de arena oscura en Santa Catalina, con condiciones perfectas para escuelas de surf y caminatas al atardecer.',
        tipo: 'video',
        imagen: PLAYA_EL_ESTERO,
        ubicacion: 'Santa Catalina, Veraguas',
      },
      {
        id: 'Parque_Nacional_Santa_Fe',
        nombre: 'Parque Nacional Santa Fe',
        descripcion: 'Santuario de montaña con un bosque nuboso que protege innumerables ríos, cascadas cristalinas y senderos de alta biodiversidad.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/4af0d846-2a18-362e-887a-28f093e1aa24?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381459621&signature=i95uIRqcripwHrGda1XY6D6WhDgHEq93tpPEVgBnnzZM6I4vXKh0lYiGCDYd6WzNPhKbZqrRY8RL0TiDWFhoDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Santa Fe, Veraguas',
      },
      {
        id: 'Isla_Granito_de_Oro',
        nombre: 'Isla Granito de Oro',
        descripcion: 'Famoso islote que funciona como un acuario natural flotante, considerado uno de los mejores lugares del mundo para el esnórquel.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/397e2ef5-ea7e-371a-99a8-f1fc1578a3ba?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381488096&signature=P09SYkeSv%2FxHnaQ%2BeMA3rtO8ufWP1J28cAYM4saBCSB%2Fa6zHa5T5IgmSlltWvY7j4BPteBRc4f16ljS91CLdAw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'El_Faro_Dive_Site',
        nombre: 'El Faro Dive Site',
        descripcion: 'Soberbio sitio de buceo profundo en los límites de Coiba, célebre por el avistamiento de grandes pelágicos y tiburones ballena.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/a7fd5821-5d6d-3599-9667-dbe767c9c92a?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381514139&signature=imMM1DCpV3kwzeUGfQDLvS1arLTkBTxpII6gEC5rzPkTpMhkgcAKSOV%2FpfeGhcLFhCFcrVCNSd7VYMg6srQkAg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Isla_Tortuga',
        nombre: 'Isla Tortuga',
        descripcion: 'Isla pintoresca de entorno marino protegido, ideal para excursiones de un día, buceo libre y relajación costera.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/1ad3aaf4-6fca-35b3-a7e3-bbfe3737505c?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381542039&signature=Xwc7H2fWxjfohBmDKVl6k5yKeylEic89Zf4DBczjQebxebAthloKojkUPMkTyXmDAQWWelNVF64cFP2TpZX2Dg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Tortuga, Veraguas',
      },
    ],
  },
];