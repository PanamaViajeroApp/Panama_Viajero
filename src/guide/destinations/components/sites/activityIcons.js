import {
  LuBird,
  LuBinoculars,
  LuBike,
  LuCamera,
  LuCompass,
  LuFish,
  LuMapPinned,
  LuMountain,
  LuShipWheel,
  LuStore,
  LuSparkles,
  LuTreePalm,
  LuTrees,
  LuUtensilsCrossed,
  LuWaves,
} from 'react-icons/lu'
import { FaUmbrellaBeach } from 'react-icons/fa6'
import { IoBoat } from 'react-icons/io5'

const activityIconRules = [
  { test: /(playa|playas)/, Icon: FaUmbrellaBeach },
  { test: /(aguas?\s*termales?|termales?|termal)/, Icon: LuWaves },
  { test: /(nataci|nado|nadar|swim|surf|snorkel|buce|kayak|mar|arrecife)/, Icon: LuWaves },
  { test: /(paseo(?:s)? en lancha|lancha|bote|boat)/, Icon: IoBoat },
  { test: /(pesca)/, Icon: LuFish },
  { test: /(ciclismo|patinaje|ruta|bicicleta)/, Icon: LuBike },
  { test: /(gastron|comida|restaur|sabores|culin)/, Icon: LuUtensilsCrossed },
  { test: /(senderismo|monta|trek)/, Icon: LuMountain },
  { test: /(bosque|naturaleza|parque)/, Icon: LuTrees },
  { test: /(estrella|estrellas)/, Icon: LuSparkles },
  { test: /(avistamiento|observaci).*(rana|ranas).*(roja|rojas)/, Icon: LuCamera },
  { test: /(avistamiento|observaci).*(delfin|delfines)/, Icon: LuBinoculars },
  { test: /(avistamiento|observaci).*(ballena|ballenas|tortuga|tortugas|fauna marina|marino|marina|medusa|medusas|pez|peces|coral|arrecife|manta|rayas?|manglar|manglares)/, Icon: LuWaves },
  { test: /(avistamiento|observaci|aves|pajar)/, Icon: LuBird },
  { test: /(tour|recorrido|museo|hist|casco|ciudad|urbano|paseo|visitas)/, Icon: LuMapPinned },
  { test: /(isla|islote)/, Icon: LuTreePalm },
  { test: /(isla|islote|costa|costera|marino)/, Icon: LuShipWheel },
  { test: /(fotograf|paisaje|foto|mirador)/, Icon: LuCamera },
  { test: /.*/, Icon: LuCompass },
]

export function getActivityIcon(activityName) {
  const normalized = activityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return activityIconRules.find(({ test }) => test.test(normalized)) ?? activityIconRules[activityIconRules.length - 1]
}
