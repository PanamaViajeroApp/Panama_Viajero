const ISLA_TABOGA = new URL('../../../assets/srcProvincias/panama/Isla_Taboga.mp4', import.meta.url).href;
const CERRO_ANCON = new URL('../../../assets/srcProvincias/panama/Cerro_Ancon.mp4', import.meta.url).href;
const PANAMA_BANNER = new URL('../../../assets/srcProvincias/panama/PanamaBanner.mp4', import.meta.url).href;

export const provincias = [
  {
    id: 'panama',
    nombre: 'Panamá',

    banner: {
      tipo: 'video',
      src: PANAMA_BANNER,
      alt: 'Vista urbana y costera de la provincia de Panamá',
    },

    descripcionCorta:
      'La capital es el punto donde los rascacielos de cristal vigilan las ruinas de una ciudad que se negó a desaparecer. Entre el movimiento del Canal y la vibrante vida nocturna en el Casco Antiguo, descubrirás un Panamá cosmopolita que ofrece mil mundos distintos en una sola avenida llena de vida.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1595279.2668934553!2d-80.1916458868211!3d8.860426845993237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e535944ba70296f%3A0x22cb5fba7603eb68!2sPanam%C3%A1%20Province!5e1!3m2!1sen!2spa!4v1778780378442!5m2!1sen!2spa',
    },

    actividades: [
      'Surf urbano',
      'Ciclismo de ruta',
      'Patinaje',
      'Tours gastronómicos',
      'Visitas al Canal',
      'Compras en centros comerciales',
      'Vida nocturna',
      'Senderismo tropical',
      'Esnórquel',
    ],

    resena:
      'La historia de la Ciudad de Panamá es la de una superviviente que ha sabido reinventarse tras cada ataque de piratas y cada cambio de era. Desde su fundación original en 1519, ha sido el puente que une al mundo entero, primero con el oro colonial y ahora con el comercio global del Canal. Su identidad se construyó piedra sobre piedra en el Casco Antiguo tras el saqueo de Henry Morgan, creando un barrio lleno de balcones y leyendas francesas y españolas. Hoy es una ciudad que no duerme, donde la modernidad más extrema convive con selvas tropicales a pocos minutos de distancia, demostrando que el progreso no tiene por qué borrar las huellas del pasado.',

    lugaresDestacados: [
      {
        id: 'Canal_de_Panama',
        nombre: 'Canal de Panamá',
        descripcion: 'Asombrosa obra de ingeniería mundial donde se puede observar el tránsito de barcos neopanamax y entender la conexión comercial entre dos océanos.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/23975fc3-154d-3207-8f8c-801afabb841a?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298543134&signature=keRGDUYo%2FVOMjjJbNNnqtDHTBPGcFzpwEBl7E7a8nBseOwbrXbyyI%2ByrSQbdtge%2F0zdOvOzUbmBIV6GfBHpVAw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Centro de Visitantes de Miraflores, Panamá',
      },
      {
        id: 'Casco_Antiguo',
        nombre: 'Casco Antiguo',
        descripcion: 'Barrio histórico colonial con plazas vibrantes, iglesias centenarias, restaurantes de autor y una rica vida cultural frente a la bahía.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/35ef6537-2c2c-3c08-9a44-1c821bf19d83?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298563579&signature=q8ZkotkuIdqqzQJmLbvQ6nsnk%2F7jmK%2F1pdVQu2u4EWcn2rfFrllDPE%2BKFAHGbSSO9%2FcOrU67zxoQHhGNwOKGBQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Casco Antiguo, Ciudad de Panamá',
      },
      {
        id: 'Panama_Viejo',
        nombre: 'Panamá Viejo',
        descripcion: 'Conjunto monumental y sitio arqueológico de la primera ciudad española fundada en el Pacífico en 1519, cuyas ruinas narran el origen de la capital.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/2608407f-84d0-35f3-bce6-c7b39a4cf7d5?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298606109&signature=vqz%2BqGEHlXSS4Yuxe7qkKkmlKU34TViV7ctIxB0p9%2FBW071w41V5vXYAE0H9JIgf%2B9g39QSRBqZXrDrcnCv2DA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Panamá Viejo, Ciudad de Panamá',
      },
      {
        id: 'Cerro_Ancon',
        nombre: 'Cerro Ancón',
        descripcion: 'El punto más alto de la ciudad, un mirador natural protegido famoso por su imponente bandera nacional, senderos ecológicos y vistas del skyline capitalino.',
        tipo: 'video',
        imagen: CERRO_ANCON,
        ubicacion: 'Cerro Ancón, Ciudad de Panamá',
      },
      {
        id: 'Biomuseo',
        nombre: 'Biomuseo',
        descripcion: 'Icónico museo diseñado por Frank Gehry, dedicado a narrar cómo el surgimiento del istmo de Panamá cambió la biodiversidad del planeta entero.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/aef8c285-9520-30c9-a8fa-c45878c5cd4a?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298670478&signature=o4kNNbDyTh3PKezhY80whqw%2FiKmqvPiN9jOYLMSONp3mNJTUm9wwxffh3VeGzSszkBH0Al2X1n1bZMJqO9TyBw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Calzada de Amador, Ciudad de Panamá',
      },
      {
        id: 'Cinta_Costera',
        nombre: 'Cinta Costera',
        descripcion: 'Extenso paseo urbano frente a la bahía, ideal para actividades al aire libre mientras se contempla la silueta moderna y el Casco Antiguo.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/6d2a2241-0897-3e09-99a1-bd481a0d11bc?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298712132&signature=gHiaOBMKSdK3X7KKBb1kU%2FMZd5ujQ7XvFjdnkDsV5cTQb9A%2B3aoUHZdy15cQQVY%2BlH5FlFU0Rg8KJaGccTOoDQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Cinta Costera, Ciudad de Panamá',
      },
      {
        id: 'Parque_Natural_Metropolitano',
        nombre: 'Parque Natural Metropolitano',
        descripcion: 'Santuario natural y único parque natural de Centroamérica ubicado dentro de los límites metropolitanos, con fauna tropical y senderos.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/3e4625bc-b70d-3d7f-9a34-20f01a07a8d3?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298869415&signature=xDgELEuALyWklCA6TOLe8XZBQlZ6ZxSapM%2Ff3LYj%2FHVpm83o1DaNxsENC5f6QlkAmplo7nJhD%2Bx%2F0YM25mzKCQ%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Natural Metropolitano, Ciudad de Panamá',
      },
      {
        id: 'Isla_Contadora',
        nombre: 'Isla Contadora',
        descripcion: 'Exclusiva isla del archipiélago de Las Perlas, famosa por sus playas de arena blanca, aguas turquesas y avistamiento estacional de ballenas.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/28078b52-677e-3658-b78a-877ffe5151bc?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298899136&signature=IF6esPGp%2B2aBs1YZqRxeB5Ub%2FuxDaWezEPiVbr8tkqtKHA6VFU7u5n%2FWAkWSv8RT%2BuKrOG8FrUDPIhWzCGsaBA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Contadora, Archipiélago de Las Perlas',
      },
      {
        id: 'Isla_Taboga',
        nombre: 'Isla Taboga',
        descripcion: 'Conocida como la isla de las flores, es una joya histórica cercana a la capital con senderos pintorescos y playas tranquilas.',
        tipo: 'video',
        imagen: ISLA_TABOGA,
        ubicacion: 'Isla Taboga, Panamá',
      },
      {
        id: 'Isla_Flamenco',
        nombre: 'Isla Flamenco',
        descripcion: 'Punto terminal de la Calzada de Amador que alberga una marina internacional, restaurantes gastronómicos y vistas del istmo.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/a0f8eef0-ca65-3471-8975-beb586d6e732?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779298987500&signature=Cnv4aLvy%2BAvvytMsrUFcrB4Pj104vwXOPB8T0ziY4svzxqLl5TwkK7lOhHLipzQ4v4VpbR5xU3WxHSkHdcBLDw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Calzada de Amador, Ciudad de Panamá',
      },
      {
        id: 'Parque_Natural_Soberania',
        nombre: 'Parque Nacional Soberanía',
        descripcion: 'Parque nacional colindante con el Canal de Panamá, un paraíso mundial para la observación de aves en su célebre Camino de Oleoducto.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/b4add769-80f8-3b69-a090-0ee8d5f0a851?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779398732009&signature=oafHdEAw67e82n2UDhUrLV9B%2FJ4vLOljWpsjxZ5gqjeAQGsD%2BTgtstgLtN2aajFK70dC5h4ZGU8CPIQyfgJXCw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Soberanía, Panamá',
      },
    ],
  },
];