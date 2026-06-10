import { boqueteZone } from './chiriqui/zones/zBoquete/boquete.js'
import { davidZone } from './chiriqui/zones/zDavid/david.js'
import { cerroPuntaZone } from './chiriqui/zones/zCerroPunta/cerro-punta.js'
import { cocleZoneRegistry } from './cocle/zoneRegistry.js'
import { panamaOesteZoneRegistry } from './panama-oeste/zoneRegistry.js'

export const zoneRegistry = {
  [boqueteZone.id]: boqueteZone,
  [davidZone.id]: davidZone,
  [cerroPuntaZone.id]: cerroPuntaZone,
  ...cocleZoneRegistry,
  ...panamaOesteZoneRegistry,
}
