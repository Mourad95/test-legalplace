import { updateDefaultDrug } from "./drug-updaters/default/default";
import { updateHerbalTea } from "./drug-updaters/herbalTea/herbalTea";
import { updateFervex } from "./drug-updaters/fervex/fervex";
import { updateMagicPill } from "./drug-updaters/magicPill/magicPill";
import { updateDafalgan } from "./drug-updaters/dafalgan/dafalgan";

const durgsList = {
  "Herbal Tea": updateHerbalTea,
  Fervex: updateFervex,
  "Magic Pill": updateMagicPill,
  Dafalgan: updateDafalgan,
};

// Si le nom n’est pas dans registry on tombe sur updateDefaultDrug
export function updateDrug(drug) {
  const updater = durgsList[drug.name] || updateDefaultDrug;
  return updater(drug);
}
