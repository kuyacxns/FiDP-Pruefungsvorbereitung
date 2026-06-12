import { AP1_TOPICS } from './ap1.js';
import { AP2_PROZESS } from './ap2Prozess.js';
import { AP2_DATEN } from './ap2Daten.js';
import { AP2_WISO } from './ap2Wiso.js';
import { AP2_PROJEKT } from './ap2Projekt.js';

export { AP1_TOPICS, AP2_PROZESS, AP2_DATEN, AP2_WISO, AP2_PROJEKT };

export const ALL_TOPICS = [
  ...AP1_TOPICS,
  ...AP2_PROZESS,
  ...AP2_DATEN,
  ...AP2_WISO,
  ...AP2_PROJEKT,
];
