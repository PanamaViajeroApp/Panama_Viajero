const puertoBalboaImageBase = '/images/destinations/panama'

export const puertoBalboa = {
    id: 'puerto-balboa',
    provinceId: 'panama',
    nombre: 'Puerto de Balboa',
    banner: {
        src: `${puertoBalboaImageBase}/bg-puerto-balboa.webp`,
        alt: 'Banner de Puerto de Balboa',
    },
    descripcion:
        'Uno de los puertos más importantes del Pacífico y una pieza clave en el comercio marítimo mundial. Ubicado junto a la entrada del Canal de Panamá, ofrece una perspectiva única del constante movimiento de buques y de la operación logística que conecta océanos y continentes.',
    previewDescripcion:
        'Movimiento marítimo, logística y vistas estratégicas en uno de los puertos más importantes de Panamá.',
    previewUbicacion: 'Panamá, Zona del Canal',
    actividades: [
        {
            nombre: 'Observación de buques',
            descripcion:
                'Contempla grandes embarcaciones entrando y saliendo de uno de los puertos más activos del Pacífico.',
            icono: '',
        },
        {
            nombre: 'Fotografía portuaria',
            descripcion:
                'Captura la dinámica visual del puerto, sus grúas, contenedores y tráfico marítimo.',
            icono: '',
        },
        {
            nombre: 'Observación del Canal',
            descripcion:
                'Disfruta de una vista cercana a la entrada del Canal y comprende la conexión estratégica entre el puerto y la vía interoceánica.',
            icono: '',
        },
        {
            nombre: 'Paseos cercanos',
            descripcion:
                'Combina la visita con recorridos por la Calzada de Amador y otros puntos cercanos de la zona canalera.',
            icono: '',
        },
        {
            nombre: 'Experiencia educativa',
            descripcion:
                'Aprende sobre la importancia del puerto en el comercio internacional y su papel dentro de la red logística global.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Puerto%20de%20Balboa%20Panama&output=embed',
}