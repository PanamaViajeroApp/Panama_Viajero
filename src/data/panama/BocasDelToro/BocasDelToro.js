const BOCAS_IMAGE =
  'https://tripealotuyo.com/wp-content/uploads/2025/06/Bocas-del-Toro-%E2%80%93-Foto-Home-Provincia%E2%80%93-Autoridad-de-Turismo-de-Panama%CC%81-%E2%80%93-Tripea-Lo-Tuyo-Custom-600x338.jpg';

const BOCAS_VIDEO = new URL('../../../assets/srcProvincias/bocas_del_toto/Playa-banner-1080p.mp4', import.meta.url).href;

export const provincias = [
  {
    id: 'bocas-del-toro',
    nombre: 'Bocas del Toro',

    banner: {
      tipo: 'video',
      src: BOCAS_VIDEO,
      alt: 'Costa caribeña de la provincia de Bocas del Toro',
    },

    descripcionCorta:
      'Un rincón caribeño donde la naturaleza se siente en cada ola. Descubre islas de aguas cristalinas, playas de arena blanca y una cultura alegre que combina tradición indígena y esencia afrocaribeña en un ambiente único.',

    imagenProvincia: {
      src: '',
      alt: 'Paisaje representativo de Bocas del Toro',
    },

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Bocas%20del%20Toro%20Province%2C%20Panama&output=embed',
    },

    actividades: [
      'Surf',
      'Buceo',
      'Esnórquel',
      'Paseos en bote',
      'Delfines',
      'Senderismo',
      'Kayak',
      'Pesca',
      'Ciclismo',
      'Playa',
      'Tours ecológicos',
    ],

    resena:
      'Bocas del Toro fue habitada originalmente por pueblos indígenas como los Ngäbe. Durante la época colonial tuvo poco desarrollo, pero a finales del siglo XIX se convirtió en un important centro bananero con la llegada de empresas extranjeras. Su mezcla cultural se fortaleció con la migración afroantillana. Hoy es uno de los destinos turísticos más importantes de Panamá por su biodiversidad y su ambiente relajado.',

    lugaresDestacados: [
      {
        id: 'isla-colon',
        nombre: 'Isla Colón',
        descripcion:
          'Centro principal del archipiélago, con hospedajes, restaurantes, vida caribeña y acceso en bote a playas e islas cercanas.',
        imagen:
          'https://dam.visitpanama.com/files/7f16067a-b57f-53e3-9f91-a07efe7abf03?version=a0b1ec4b&account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&signature=mNeOZifcC%2F%2BYF8AMDRMwWC%2B6XsReHocrKmMF%2FLxim%2FdDEGv2ZtpMJEvQHgQaEfQ0M%2B5Z%2FOy4p%2F3TDIy0aNycCA%3D%3D&expiry=1778778310556',
        ubicacion: 'Isla Colón, Bocas del Toro',
      },
      {
        id: 'playa-estrella',
        nombre: 'Playa Estrella',
        descripcion:
          'Playa tranquila de aguas claras, famosa por sus estrellas de mar y su ambiente relajado en Isla Colón.',
        imagen:
          'https://dam.visitpanama.com/files/2cd21caf-21a3-5eed-81bb-cf1b913fb8d5?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778778614266&signature=iA8w9XS5XuVMQ9WcmqLahFSTPaeoS0kyhhtHxPkYhLTdECwMADV%2BDOcJ3uwW%2B%2FihD9mo2ILgpQ2LgZnuORFWAg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Playa Estrella, Isla Colón',
      },
      {
        id: 'cayo-zapatilla',
        nombre: 'Cayo Zapatilla',
        descripcion:
          'Conjunto de cayos dentro del Parque Nacional Marino Isla Bastimentos, conocido por playas de arena blanca y naturaleza protegida.',
        imagen:
          'https://dam.visitpanama.com/files/67416759-a522-53e6-97d5-c457e2e16d9d?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778779689150&signature=E4xTXBE2aIBmNBqm4M1O%2BgoAHR1BZDAkD%2FnDtqNlnM%2Bz086JbCPh8fl1xtbY8iSTgRCKXdCTrbU5xpusMU%2BmDg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Cayo Zapatilla, Isla Bastimentos',
      },
      {
        id: 'cueva-de-los-murcielagos',
        nombre: 'Cueva de los Murciélagos',
        descripcion:
          'Experiencia natural en Isla Bastimentos, ideal para visitantes que buscan recorridos ecológicos fuera de las playas más conocidas.',
        imagen:
          'https://dam.visitpanama.com/files/94187be0-dd8e-3e6f-88ed-9523327acf6e?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778779806986&signature=OT%2Bc8BBobrD52SL1iPSMf6SH3XA73Dru67O2cSDYgxUUm4kRjIOygETz5Y2y30%2FTxXcjuXzTFUmEl8%2B44Pn%2FDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Bastimentos, Bocas del Toro',
      },
      {
        id: 'isla-pajaros',
        nombre: 'Isla Pájaros',
        descripcion:
          'Pequeña isla rocosa reconocida por la observación de aves marinas y paisajes del Caribe bocatoreño.',
        imagen:
          'https://dam.visitpanama.com/files/cd825cd5-56d7-5ead-9d9a-6b0225c65ebb?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778780038410&signature=fjZZlcD3rD8CgTdmC%2BjpjETAGuZLepHhVJGhAD7IwCfQW3EszSzCdvCExLuczC8YspzNQBBxbAz9huLeXRoBBA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Pájaros, Bocas del Toro',
      },
      {
        id: 'punta-hospital',
        nombre: 'Punta Hospital',
        descripcion:
          'Zona costera cercana a Isla Bastimentos, apreciada por sus aguas claras, arrecifes y paseos en bote.',
        imagen:
          'https://dam.visitpanama.com/files/44ff6ae9-0ad9-3402-84ea-efb827aafb27?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778780134248&signature=Wv5%2FpYVnkxCyGj26N0e77swrnPSrpsk%2BLPR7c4bzdJe4UxrhIvgRz6oSqlzdBLJROMT%2FRNrTVgqZE%2FTPoq8XAg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Punta Hospital, Bocas del Toro',
      },
      {
        id: 'la-loma-cacao-farm',
        nombre: 'La Loma Cacao Farm',
        descripcion:
          'Finca de cacao en Isla Bastimentos donde se puede conocer el proceso del cacao y la vida rural del archipiélago.',
        imagen:
          'https://dam.visitpanama.com/files/d3cc7b26-ba18-5605-bb43-0b48af086b37?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778780205617&signature=81Jq2%2F7T88qmdeSomSzBl0FUtvuYCnmBmxO472%2FrMbYc8eHfvz8JhfWLFDqZuas3oW3%2FFryV8dpnk%2BuG1JVfAA%3D%3D&version=a0b1ec4b',
        ubicacion: 'La Loma Cacao Farm, Isla Bastimentos',
      },
      {
        id: 'la-piscina-bluff-beach',
        nombre: 'La Piscina Bluff Beach',
        descripcion:
          'Sector natural de Bluff Beach con formaciones costeras y piscinas naturales cuando las condiciones del mar lo permiten.',
        imagen:
          'https://dam.visitpanama.com/files/c0588b4e-c234-5489-b3f9-525f823fe5f3?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778780868429&signature=I8JA8XEW2T1Cuj2K9rm8B2k7JrenxLL%2F79XJBNPmGKH2y4exMQNswWFRR4Vsgu4qp9qQh8DrHmnGOROqpNkzDg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Bluff Beach, Bocas del Toro',
      },
      {
        id: 'coral-cay',
        nombre: 'Coral Cay',
        descripcion:
          'Zona de arrecifes cerca de Bastimentos, popular para esnórquel, paseos en bote y almuerzos frente al mar.',
        imagen:
          'https://dam.visitpanama.com/files/6b3d0722-03db-5937-aef9-dc38c4e52d07?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1778780979970&signature=AxwAX9V%2BlHqNxGcYDvOcDavAjwxy4l5EFo3F7LjuYKt58kQk4IDPBZd4q69GWreo3x%2BcQtEix8MBlDTNiFe6BQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Coral Cay, Isla Bastimentos',
      },
    ],

    ubicacion: {
      region: 'Caribe panameño',
      pais: 'Panamá',
      coordenadas: {
        lat: 9.3547,
        lng: -82.2426,
      },
    },

    restoDeLugares: [
      {
        id: 'red-frog-beach',
        nombre: 'Red Frog Beach',
        descripcion:
          'Playa de Isla Bastimentos conocida por su oleaje, senderos naturales y ambiente tropical.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Bastimentos, Bocas del Toro',
      },
      {
        id: 'bluff-beach',
        nombre: 'Bluff Beach',
        descripcion:
          'Extensa playa de Isla Colón, ideal para caminatas, naturaleza y surf según la temporada.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Colón, Bocas del Toro',
      },
      {
        id: 'dolphin-bay',
        nombre: 'Bahía de los Delfines',
        descripcion:
          'Ruta en bote donde suelen observarse delfines en un entorno de manglares y aguas tranquilas.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Archipiélago de Bocas del Toro',
      },
      {
        id: 'cayo-coral',
        nombre: 'Cayo Coral',
        descripcion:
          'Punto clásico para esnórquel y paseos acuáticos cerca de Isla Bastimentos.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Bocas del Toro',
      },
      {
        id: 'isla-bastimentos',
        nombre: 'Isla Bastimentos',
        descripcion:
          'Isla con comunidades caribeñas, playas, senderos, manglares y acceso al parque nacional marino.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Bocas del Toro',
      },
      {
        id: 'isla-carenero',
        nombre: 'Isla Carenero',
        descripcion:
          'Isla cercana a Bocas Town, visitada por sus restaurantes, hospedajes, playas pequeñas y ambiente relajado.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Carenero, Bocas del Toro',
      },
      {
        id: 'bocas-town',
        nombre: 'Bocas Town',
        descripcion:
          'Centro urbano y turístico de Isla Colón, con muelles, restaurantes, tours, vida nocturna y servicios para visitantes.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Colón, Bocas del Toro',
      },
      {
        id: 'playa-wizard',
        nombre: 'Playa Wizard',
        descripcion:
          'Playa natural de Isla Bastimentos, conocida por su paisaje más rústico y acceso por sendero.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Bastimentos, Bocas del Toro',
      },
      {
        id: 'boca-del-drago',
        nombre: 'Boca del Drago',
        descripcion:
          'Zona costera al norte de Isla Colón, punto de acceso frecuente hacia Playa Estrella.',
        imagen: BOCAS_IMAGE,
        ubicacion: 'Isla Colón, Bocas del Toro',
      },
    ],
  },
];