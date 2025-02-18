import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'

const __dirname = join(fileURLToPath(import.meta.url), '..')

test('should generate correct type def file', (t) => {
  t.snapshot(readFileSync(join(__dirname, '..', 'index.d.ts'), 'utf8'))
})
