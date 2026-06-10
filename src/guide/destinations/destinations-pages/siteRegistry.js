import { bocasSiteRegistry } from './bocas-del-toro/sites/siteRegistry.js'
import { chiriquiSiteRegistry } from './chiriqui/siteRegistry.js'
import { cocleSiteRegistry } from './cocle/siteRegistry.js'
import { panamaOesteSiteRegistry } from './panama-oeste/siteRegistry.js'

export const siteRegistry = {
  ...bocasSiteRegistry,
  ...chiriquiSiteRegistry,
  ...cocleSiteRegistry,
  ...panamaOesteSiteRegistry,
}
