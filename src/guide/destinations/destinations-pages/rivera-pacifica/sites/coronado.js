const coronadoImageBase = '/images/destinations/rivera-pacifica/coronado'

export const coronado = {
  id: 'coronado',
  provinceIds: ['panama-oeste'],
  sharedProvinceIds: ['panama-oeste'],
  riveraPacifica: true,
  nombre: 'Coronado',
  banner: {
    src: `${coronadoImageBase}/bg-coronado.webp`,
    alt: 'Banner de Coronado',
  },
  gallery: [
    `${coronadoImageBase}/bg-coronado.webp`,
    `${coronadoImageBase}/g1-coronado.webp`,
    `${coronadoImageBase}/g2-coronado.webp`,
    `${coronadoImageBase}/g3-coronado.webp`,
  ],
  descripcion:
    'Uno de los destinos costeros más emblemáticos y exclusivos de la Rivera Pacífica, donde extensas playas, modernas residencias, comercios y una vibrante vida turística se combinan para ofrecer una experiencia completa de descanso, entretenimiento y comodidad frente al mar.',
  previewDescripcion:
    'Un destino costero icónico que combina playa, exclusividad y una vibrante vida turística en Panamá Oeste.',
  previewUbicacion: 'Chame, Panamá Oeste',
actividades: [
  {
    nombre: 'Gastronomía',
    descripcion:
      'Descubre restaurantes y cafés con mariscos frescos, cocina internacional y sabores locales.',
    icono: '',
  },
  {
    nombre: 'Golf',
    descripcion:
      'Disfruta de campos de golf reconocidos que complementan la experiencia exclusiva de la zona.',
    icono: '',
  },
  {
    nombre: 'Pesca deportiva',
    descripcion:
      'Participa en jornadas de pesca recreativa en las aguas del Pacífico junto a operadores locales.',
    icono: '',
  },
  {
    nombre: 'Paseo en bote',
    descripcion:
      'Navega por la costa y disfruta de los paisajes marinos de la Riviera Pacífica.',
    icono: '',
  },
  {
    nombre: 'Spa y bienestar',
    descripcion:
      'Relájate con tratamientos de spa y experiencias de bienestar disponibles en hoteles y resorts de la zona.',
    icono: '',
  },
  {
    nombre: 'Fotografía',
    descripcion:
      'Captura paisajes de playa y la combinación entre naturaleza, arquitectura y modernidad que caracteriza a Coronado.',
    icono: '',
  },
],
  ubicacion:
    'https://www.google.com/maps?q=Coronado%20Panama%20Oeste&output=embed',
}