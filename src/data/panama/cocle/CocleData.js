/* const  = new URL('../../../assets/srcProvincias', import.meta.url).href;*/
const COCLE_BANNER = new URL('../../../assets/srcProvincias/cocle/CocleBanner.mp4', import.meta.url).href;
const LOVERS_FALL = new URL('../../../assets/srcProvincias/cocle/Lovers_Fall.mp4', import.meta.url).href;
const CHORRO_LA_TORTUGA = new URL('../../../assets/srcProvincias/cocle/Chorro_la_Tortuga.mp4', import.meta.url).href;
const CERRO_CARAIGUANA = new URL('../../../assets/srcProvincias/cocle/Cerro_Caraiguana.mp4', import.meta.url).href;
const CASCADA_LAS_PAILAS = new URL('../../../assets/srcProvincias/cocle/Cascada_Las_Pailas.mp4', import.meta.url).href;
const CHORRO_MACHO = new URL('../../../assets/srcProvincias/cocle/Chorro_Macho.mp4', import.meta.url).href;
const CERRO_LA_SILLA = new URL('../../../assets/srcProvincias/cocle/Cerro_la_Silla.mp4', import.meta.url).href;
export const provincias = [
  {
    id: 'cocle',
    nombre: 'Coclé',

    banner: {
      tipo: 'video',
      src: COCLE_BANNER,
      alt: 'Vista de la provincia de Coclé',
    },

    descripcionCorta:
      'El corazón geográfico de la nación donde las tradiciones coloniales y los misterios precolombinos cobran vida. Coclé ofrece una experience completa que abarca desde la frescura del Valle de Antón hasta la exclusividad de sus complejos turísticos frente al mar Pacífico.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798251.7633135251!2d-81.09223188898939!3d8.573762478659607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fac480acbcd1bd7%3A0x49577a57e8feac2d!2sCocl%C3%A9%20Province!5e1!3m2!1sen!2spa!4v1778601157628!5m2!1sen!2spa',
    },

    actividades: [
      'Senderismo',
      'Visitas culturales',
      'Compras de artesanías',
      'Natación',
      'Golf',
      'Tours de sal y azúcar',
      'Observación de aves',
    ],

    resena:
      'Esta provincia es custodia de uno de los legados arqueológicos más importantes de Centroamérica. Antes de la época colonial, los cacicazgos de Coclé dominaban las llanuras con una orfebrería de oro que todavía asombra al mundo moderno. Su capital, Penonomé, fue incluso sede provisional del gobierno nacional en tiempos de conflicto, reflejando la importancia estratégica de la zona. La historia de Coclé está ligada a personajes emblemáticos como Victoriano Lorenzo y a la defensa de las costumbres campesinas. Hoy es un centro de producción artesanal donde el sombrero pintao representa la maestría de un pueblo que valora su pasado mientras impulsa el turismo de playa y montaña más dinámico del país.',

    lugaresDestacados: [
      {
        id: 'La_India_Dormida',
        nombre: 'La India Dormida',
        descripcion: 'Montaña emblemática del Valle de Antón con senderos, vistas panorámicas y una silueta cargada de leyenda.',
        imagen: 'https://dam.visitpanama.com/files/f6ba2fbb-34f8-3d14-aa5f-1f0db2c6517b?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779204894601&signature=JPEc1ZMTbw4jowiocKB8vPe2d1LIWEIb0ullUlrEc2xk%2F8MvwhQDpQrKc%2FX4UTXghsRvw8gL8rb%2Fw%2FyZ%2BqRFBA%3D%3D&version=a0b1ec4b',
        ubicacion: 'La India Dormida, Coclé',
      },
      {
        id: 'Lovers_Fall',
        nombre: 'Lovers Fall',
        descripcion: 'Cascada natural rodeada de vegetación, ideal para una visita fresca y tranquila en Coclé.',
        tipo: 'video',
        imagen: LOVERS_FALL,
        ubicacion: 'Lovers Fall, Coclé',
      },
      {
        id: 'Chorro_la_Tortuga',
        nombre: 'Chorro la Tortuga',
        descripcion: 'Cascada escondida entre vegetación, ideal para quienes buscan un rincón fresco y tranquilo en Coclé.',
        tipo: 'video',
        imagen: CHORRO_LA_TORTUGA,
        ubicacion: 'Chorro la Tortuga, Río Hato',
      },
      {
        id: 'Cerro_Caraiguana',
        nombre: 'Cerro Caraiguana',
        descripcion: 'Caída de agua natural con entorno tropical, perfecta para caminatas cortas y contacto directo con la naturaleza.',
        tipo: 'video',
        imagen: CERRO_CARAIGUANA,
        ubicacion: 'Cerro Caraiguana, Coclé',
      },
      {
        id: 'Cascada_Las_Pailas',
        nombre: 'Cascada Las Pailas',
        descripcion: 'Cerro de origen volcánico con senderos y vistas panorámicas del Valle de Antón.',
        tipo: 'video',
        imagen: CASCADA_LAS_PAILAS,
        ubicacion: 'Cascada Las Pailas, Loma Grande',
      },
      {
        id: 'Chorro_Macho',
        nombre: 'Chorro Macho',
        descripcion: 'Serie de pozas y cascadas naturales rodeadas de paisaje rural y vegetación abundante.',
        tipo: 'video',
        imagen: CHORRO_MACHO,
        ubicacion: 'Chorro Macho, Coclé',
      },
      {
        id: 'Isla_Farallón',
        nombre: 'Isla Farallón',
        descripcion: 'Cascada emblemática del Valle de Antón, popular por su fácil acceso y ambiente de bosque húmedo.',
        imagen: 'https://dam.visitpanama.com/files/b6e28d76-b357-3115-853a-eaefc2df96b9?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779205500874&signature=zwCNNknLI70eAIz5STkG8e5lqeiWF%2FFv1%2FJn9XOdwX%2BxdVN%2Bt6Gnh2KC2bL3j2Mb2Brz2YUGl22LBHNw%2BjiaBA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Farallón, Coclé',
      },
      {
        id: 'Cascada_Pozo_Azul',
        nombre: 'Cascada Pozo Azul',
        descripcion: 'Isla cercana a la costa pacífica, valorada por su paisaje marino y cercanía a zonas de playa.',
        imagen: 'https://dam.visitpanama.com/files/e4d08461-57d3-397b-aab9-d0fda9e3238c?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779205563960&signature=jq9%2B2fTFpAWcjMBz1bg82n%2FMwOb5LQG4d9mcozwcou4upoSqwuwKU6UgWAjgZAPKQ9oPA%2F4nJS78%2FmrpYdajDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Cascada Pozo Azul, Coclé',
      },
      {
        id: 'Cerro_la_Silla',
        nombre: 'Cerro la Silla',
        descripcion: 'Cascada con poza natural de agua clara, ideal para refrescarse y disfrutar un entorno tranquilo.',
        tipo: 'video',
        imagen: CERRO_LA_SILLA,
        ubicacion: 'Cerro la Silla, Coclé',
      },
      {
        id: 'Chorros_de_Ola',
        nombre: 'Chorros de Ola',
        descripcion: 'Elevación natural con rutas de caminata y vistas abiertas hacia el paisaje interiorano de Coclé.',
        imagen: 'https://dam.visitpanama.com/files/3956ce72-22a5-3204-9677-02de23beaaec?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779205688998&signature=aJ9%2BVTQ7t3KvqpCWmTZKMBNoiTmBsHtRLS7JX9Hgbu7O6gbKjCvbEcLmev3yG1%2F9tHwsR4SYWaWcB34AEcBMDQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Chorros de Ola, Coclé',
      },
      {
        id: 'Cerro_Picacho',
        nombre: 'Cerro Picacho',
        descripcion: 'Conjunto de chorros naturales rodeados de vegetación, perfecto para una visita de aventura ligera.',
        imagen: 'https://dam.visitpanama.com/files/664ec05e-f755-30d4-beef-24db565f644e?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779205850412&signature=w4%2FU7DxDe3DagYuxX0SsvtEawfCd%2Fq4LzKj1Ap4ci8%2BcjC7LoExq1WC7g2HzLpMUYjAm8ieEErTsmKUsFX2zDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Cerro Picacho, Coclé',
      },
    ],
  },
];