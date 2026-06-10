import { siteRegistry } from './siteRegistry.js'

function buildSitePreview(site, provinceName = '') {
  if (!site) return null

  return {
    id: site.id,
    nombre: site.nombre,
    descripcion: site.descripcion,
    imagen: site.banner?.src || site.thumbnail || site.src || '',
    ubicacion: site.previewUbicacion || `${provinceName}, ${site.nombre}`.replace(/^,\s*/, ''),
  }
}

export function createSitePreviewRegistry(provinceName = '') {
  return Object.fromEntries(
  Object.values(siteRegistry)
      .map((site) => [site.id, buildSitePreview(site, provinceName)])
      .filter(([, preview]) => Boolean(preview))
  )
}

export function getSitePreview(siteId) {
  return buildSitePreview(siteRegistry[siteId] ?? null)
}
