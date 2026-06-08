import { readdir, stat, writeFile, rename, unlink } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('public/images/destinations')
const minSize = 20 * 1024

const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walk(full))
      continue
    }

    if (imageExts.has(path.extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }

  return files
}

function outputOptions(ext) {
  switch (ext) {
    case '.png':
      return { format: 'png', options: { compressionLevel: 9, adaptiveFiltering: true } }
    case '.webp':
      return { format: 'webp', options: { quality: 80 } }
    case '.avif':
      return { format: 'avif', options: { quality: 50, effort: 5 } }
    case '.jpg':
    case '.jpeg':
    default:
      return { format: 'jpeg', options: { quality: 82, mozjpeg: true, progressive: true } }
  }
}

const files = await walk(root)
let processed = 0
let reduced = 0
let savedBytes = 0

for (const file of files) {
  const info = await stat(file)
  if (info.size < minSize) continue

  const ext = path.extname(file).toLowerCase()
  const { format, options } = outputOptions(ext)
  const original = await sharp(file)
  const metadata = await original.metadata()
  const maxWidth = file.includes(`${path.sep}banner${path.sep}`) ? 1600 : 1400
  const resized = metadata.width && metadata.width > maxWidth
    ? original.resize({ width: maxWidth, withoutEnlargement: true })
    : original

  const buffer = await resized.toFormat(format, options).toBuffer()
  if (buffer.length < info.size) {
    const tempFile = `${file}.tmp`
    await writeFile(tempFile, buffer)
    try {
      await rename(tempFile, file)
    } catch (error) {
      await unlink(tempFile).catch(() => {})
      throw error
    }
    reduced += 1
    savedBytes += info.size - buffer.length
  }
  processed += 1
}

console.log(JSON.stringify({ processed, reduced, savedBytes }, null, 2))
