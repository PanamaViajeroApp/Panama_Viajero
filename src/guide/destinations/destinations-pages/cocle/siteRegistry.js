import { elValleDeAnton } from './sites/el-valle-de-anton.js'
import { penonome } from './sites/penonome.js'
import { playaBlanca } from './zones/zRiveraPacifica/playa-blanca.js'
import { playaFarallon } from './zones/zRiveraPacifica/playa-farallon.js'
import { playaJuanHombron } from './zones/zRiveraPacifica/playa-juan-hombron.js'
import { playaSeaCliff } from './zones/zRiveraPacifica/playa-sea-cliff.js'
import { santaClara } from './zones/zRiveraPacifica/santa-clara.js'

export const cocleSiteRegistry = {
  [elValleDeAnton.id]: elValleDeAnton,
  [penonome.id]: penonome,
  [playaBlanca.id]: playaBlanca,
  [playaFarallon.id]: playaFarallon,
  [playaJuanHombron.id]: playaJuanHombron,
  [playaSeaCliff.id]: playaSeaCliff,
  [santaClara.id]: santaClara,
}
