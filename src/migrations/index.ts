import * as migration_20250415_110139 from './20250415_110139';
import * as migration_20250501_201746 from './20250501_201746';
import * as migration_20250501_201854 from './20250501_201854';

export const migrations = [
  {
    up: migration_20250415_110139.up,
    down: migration_20250415_110139.down,
    name: '20250415_110139',
  },
  {
    up: migration_20250501_201746.up,
    down: migration_20250501_201746.down,
    name: '20250501_201746',
  },
  {
    up: migration_20250501_201854.up,
    down: migration_20250501_201854.down,
    name: '20250501_201854'
  },
];
