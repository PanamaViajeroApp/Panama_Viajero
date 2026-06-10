import { boqueteCentro } from './zones/zBoquete/boquete-centro.js'
import { volcanBaru } from './zones/zBoquete/volcan-baru.js'
import { gualaca } from './zones/zBoquete/gualaca.js'
import { bambito } from './zones/zCerroPunta/bambito.js'
import { pasoAncho } from './zones/zCerroPunta/paso-ancho.js'
import { cerroPuntaCentro } from './zones/zCerroPunta/cerro-punta-centro.js'
import { davidCentro } from './zones/zDavid/david-centro.js'
import { bocaChica } from './zones/zDavid/boca-chica.js'
import { playaBarqueta } from './zones/zDavid/playa-barqueta.js'
import { puertoArmuelles } from './zones/zDavid/puerto-armuelles.js'
import { playaLasLajas } from './zones/zDavid/playa-las-lajas.js'
import { sanFelix } from './zones/zDavid/san-felix.js'

export const chiriquiSiteRegistry = {
  [boqueteCentro.id]: boqueteCentro,
  [volcanBaru.id]: volcanBaru,
  [gualaca.id]: gualaca,
  [bambito.id]: bambito,
  [pasoAncho.id]: pasoAncho,
  [cerroPuntaCentro.id]: cerroPuntaCentro,
  [davidCentro.id]: davidCentro, 
  [bocaChica.id]: bocaChica,
  [playaBarqueta.id]: playaBarqueta,
  [puertoArmuelles.id]: puertoArmuelles,
  [playaLasLajas.id]: playaLasLajas,
  [sanFelix.id]: sanFelix,
}
