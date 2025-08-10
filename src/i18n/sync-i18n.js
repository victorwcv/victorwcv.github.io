import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necesario para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const enPath = path.join(__dirname, "en.json");
const esPath = path.join(__dirname, "es.json");

let en = JSON.parse(fs.readFileSync(enPath, "utf8"));
let es = JSON.parse(fs.readFileSync(esPath, "utf8"));

function syncKeys(base, target) {
  let changes = 0;

  for (const key in base) {
    if (!(key in target)) {
      target[key] =
        typeof base[key] === "object" && base[key] !== null && !Array.isArray(base[key])
          ? syncKeys(base[key], {})
          : "TRANSLATION_NEEDED";
      changes++;
    } else if (
      typeof base[key] === "object" &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      changes += syncKeys(base[key], target[key]);
    }
  }

  return changes;
}

const changesEs = syncKeys(en, es);
const changesEn = syncKeys(es, en);

if (changesEs === 0 && changesEn === 0) {
  console.log("✅ en.json y es.json ya están sincronizados.");
} else {
  fs.writeFileSync(enPath, JSON.stringify(en, null, 2), "utf8");
  fs.writeFileSync(esPath, JSON.stringify(es, null, 2), "utf8");

  console.log(`🔄 Sincronización completada.`);
  if (changesEs > 0) console.log(`  ➕ ${changesEs} claves añadidas a es.json`);
  if (changesEn > 0) console.log(`  ➕ ${changesEn} claves añadidas a en.json`);
  console.log("💾 Archivos actualizados correctamente.");
}
