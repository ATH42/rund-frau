import * as migration_20250415_110139 from './20250415_110139'

export const migrations = [
  {
    up: migration_20250415_110139.up,
    down: migration_20250415_110139.down,
    name: '20250415_110139',
  },
]
