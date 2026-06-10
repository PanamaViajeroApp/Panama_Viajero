export const provincias = [
  {
    id: 'chiriqui',
    nombre: 'Chiriquí',

    banner: {
      tipo: 'video',
      src: '/videos/chiriqui/VideoBannerChiriqui.av1.mp4',
      alt: 'Vista de la provincia de Chiriquí',
    },

    descripcionCorta:
      'La tierra de las flores y el café de altura presenta un escenario imponente de montañas y costas vírgenes. Desde la cumbre del Volcán Barú hasta el azul profundo del Pacífico, esta provincia es el destino perfecto si lo que buscas es aventura y serenidad en un entorno de lujo natural.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597092.60755608!2d-83.60221811003264!3d8.432382055975108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa5098873daff19%3A0x89cdd65056b29fe9!2sChiriqu%C3%AD%20Province!5e1!3m2!1sen!2spa!4v1778607596126!5m2!1sen!2spa',
    },

    actividades: [
      'Senderismo',
      'Avistamiento de aves',
      'Cata de café',
      'Rafting',
      'Canopy',
      'Escalada',
      'Pesca deportiva',
      'Surf',
    ],

    displayMode: 'mixed',
    targets: [
      {
        id: 'boquete',
        type: 'zone',
        zoneId: 'boquete',
        nombre: 'Boquete',
        descripcion: 'Zona',
        imagen: '/images/destinations/chiriqui/z-boquete/bg-z-boquete.jpg',
      },
      {
        id: 'cerro-punta',
        type: 'zone',
        zoneId: 'cerro-punta',
        nombre: 'Cerro Punta',
        descripcion: 'Zona',
        imagen: '/images/destinations/chiriqui/z-cerro-punta/bg-z-cerro-punta.jpg',
      },
      {
        id: 'david',
        type: 'zone',
        zoneId: 'david',
        nombre: 'David',
        descripcion: 'Zona',
        imagen: '/images/destinations/chiriqui/z-david/bg-z-david.jpg',
      },
    ],
  },
]
