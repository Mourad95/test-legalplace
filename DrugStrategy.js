import { updateHerbalTea } from "./drug-updaters/herbalTea/herbalTea";
import { updateFervex } from "./drug-updaters/fervex/fervex";
import { updateMagicPill } from "./drug-updaters/magicPill/magicPill";
import { updateDafalgan } from "./drug-updaters/dafalgan/dafalgan";

export const strategies = {
  "Herbal Tea": updateHerbalTea,
  Fervex: updateFervex,
  "Magic Pill": updateMagicPill,
  Dafalgan: updateDafalgan,
};
