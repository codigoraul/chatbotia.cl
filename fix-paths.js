// Corrige rutas absolutas del build de Astro para que funcionen dentro de la
// subcarpeta /chatbot-ia/ del hosting (en vez de la raíz del dominio).
// Convierte href="/_astro/..." en href="./_astro/..." (y lo mismo para src=)
// en todos los .html generados en dist/. Corre solo, automático, después de
// cada "npm run build" (ver "postbuild" en package.json) — no hay que tocarlo
// a mano en el navegador nunca más.
import fs from 'fs';
import path from 'path';

const DIST = './dist';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;

  // Profundidad del HTML dentro de dist/: index.html -> './', abogados/index.html -> '../'
  const depth = path.relative(DIST, path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  // href="/_astro/xxx.css"  ->  href="./_astro/xxx.css"
  // src="/_astro/xxx.js"    ->  src="./_astro/xxx.js"
  content = content.replace(/((?:href|src)=["'])\/_astro\//g, `$1${prefix}_astro/`);

  if (content !== before) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('fix-paths: corregido', filePath);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      fixFile(full);
    }
  }
}

if (fs.existsSync(DIST)) {
  walk(DIST);
  console.log('fix-paths: listo');
} else {
  console.warn('fix-paths: no existe la carpeta dist, ¿corriste el build?');
}
