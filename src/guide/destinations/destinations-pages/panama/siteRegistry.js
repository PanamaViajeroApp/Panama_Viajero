import { cascoAntiguo } from './sites/casco-antiguo.js'
import { cintaCostera } from './sites/cinta-costera.js'
import { panamaViejo } from './sites/panama-viejo.js'
import { miraflores } from './sites/miraflores.js'
import { calzadaAmador } from './sites/calzada-amador.js'
import { gamboa } from './sites/gamboa.js'
import { islaContadora } from './sites/isla-contadora.js'
import { islaTaboga } from './sites/isla-taboga.js'
import { cuevasBayano } from './sites/cuevas-bayano.js'

export const panamaSiteRegistry = {
  [cascoAntiguo.id]: cascoAntiguo,
  [cintaCostera.id]: cintaCostera,
  [panamaViejo.id]: panamaViejo,
  [miraflores.id]: miraflores,
  [calzadaAmador.id]: calzadaAmador,
  [gamboa.id]: gamboa,
  [islaContadora.id]: islaContadora,
  [islaTaboga.id]: islaTaboga,
  [cuevasBayano.id]: cuevasBayano,
}
