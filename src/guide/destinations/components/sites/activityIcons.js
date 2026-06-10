import {
  LuBird,
  LuBike,
  LuCompass,
  LuFish,
  LuGalleryHorizontal,
  LuMapPinned,
  LuMountain,
  LuPartyPopper,
  LuShipWheel,
  LuTrees,
  LuUtensilsCrossed,
  LuWaves,
} from 'react-icons/lu'

const activityIconRules = [
  { test: /(surf|snorkel|buce|kayak|mar|arrecife|playa)/, Icon: LuWaves },
  { test: /(pesca)/, Icon: LuFish },
  { test: /(ciclismo|patinaje|ruta|bicicleta)/, Icon: LuBike },
  { test: /(gastron|comida|restaur|sabores|culin)/, Icon: LuUtensilsCrossed },
  { test: /(vida nocturna|nocturna|fiesta|noche)/, Icon: LuPartyPopper },
  { test: /(senderismo|monta|trek)/, Icon: LuMountain },
  { test: /(bosque|naturaleza|parque)/, Icon: LuTrees },
  { test: /(avistamiento|observaci|aves|pajar)/, Icon: LuBird },
  { test: /(tour|recorrido|museo|hist|casco|ciudad|urbano|paseo|visitas)/, Icon: LuMapPinned },
  { test: /(isla|islote|costa|costera|marino)/, Icon: LuShipWheel },
  { test: /(fotograf|paisaje|foto|mirador)/, Icon: LuGalleryHorizontal },
  { test: /.*/, Icon: LuCompass },
]

export function getActivityIcon(activityName) {
  const normalized = activityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return activityIconRules.find(({ test }) => test.test(normalized)) ?? activityIconRules[activityIconRules.length - 1]
}
