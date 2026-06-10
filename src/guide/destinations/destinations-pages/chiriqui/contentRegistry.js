import { boqueteZone } from './zBoquete/boquete.js'
import { davidZone } from './zDavid/david.js'
import { cerroPuntaZone } from './zCerroPunta/cerro-punta.js'
import { boqueteCentro } from './zBoquete/boquete-centro.js'
import { volcanBaru } from './zBoquete/volcan-baru.js'
import { gualaca } from './zBoquete/gualaca.js'
import { bambito } from './zCerroPunta/bambito.js'
import { pasoAncho } from './zCerroPunta/paso-ancho.js'
import { cerroPuntaCentro } from './zCerroPunta/cerro-punta-centro.js'
import { bocaChica } from './zDavid/boca-chica.js'
import { davidCentro } from './zDavid/david-centro.js'
import { playaBarqueta } from './zDavid/playa-barqueta.js'
import { playaLasLajas } from './zDavid/playa-las-lajas.js'
import { puertoArmuelles } from './zDavid/puerto-armuelles.js'
import { sanFelix } from './zDavid/san-felix.js'

export const chiriquiZoneRegistry = {
  [boqueteZone.id]: boqueteZone,
  [davidZone.id]: davidZone,
  [cerroPuntaZone.id]: cerroPuntaZone,
}

export const chiriquiSiteRegistry = {
  [boqueteCentro.id]: boqueteCentro,
  [volcanBaru.id]: volcanBaru,
  [gualaca.id]: gualaca,
  [bambito.id]: bambito,
  [pasoAncho.id]: pasoAncho,
  [cerroPuntaCentro.id]: cerroPuntaCentro,
  [bocaChica.id]: bocaChica,
  [davidCentro.id]: davidCentro,
  [playaBarqueta.id]: playaBarqueta,
  [playaLasLajas.id]: playaLasLajas,
  [puertoArmuelles.id]: puertoArmuelles,
  [sanFelix.id]: sanFelix,
}
