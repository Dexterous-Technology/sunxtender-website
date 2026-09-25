import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://sunxtender-precision-power.lovable.app';

async function findAssetJsonFiles(dir, files = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await findAssetJsonFiles(fullPath, files);
    } else if (entry.name.endsWith('.asset.json')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const assetPointers = await findAssetJsonFiles('src/assets');
  console.log(`Found ${assetPointers.length} assets to download...`);

  for (let i = 0; i < assetPointers.length; i++) {
    const pointerPath = assetPointers[i];
    const data = JSON.parse(await fs.promises.readFile(pointerPath, 'utf8'));
    const remoteUrl = `${BASE_URL}${data.url}`;
    const localDest = path.join('public', data.url);

    await fs.promises.mkdir(path.dirname(localDest), { recursive: true });

    if (fs.existsSync(localDest)) {
      console.log(`[${i + 1}/${assetPointers.length}] Exists: ${data.original_filename}`);
      continue;
    }

    try {
      const res = await fetch(remoteUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      await fs.promises.writeFile(localDest, Buffer.from(arrayBuffer));
      console.log(`[${i + 1}/${assetPointers.length}] Downloaded: ${data.original_filename}`);
    } catch (err) {
      console.error(`Failed to download ${remoteUrl}:`, err.message);
    }
  }
  console.log('Done! All assets are now in public/__l5e/assets-v1/');
}

main();
