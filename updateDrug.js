import { updateNormal }    from "./updaters/normal";
import { updateHerbalTea } from "./updaters/herbalTea";
import { updateFervex }    from "./updaters/fervex";
import { updateMagicPill}  from "./updaters/magicPill";
import { updateDafalgan }  from "./updaters/dafalgan";

const drugsList = {
  "Herbal Tea": updateHerbalTea,
  "Fervex":     updateFervex,
  "Magic Pill": updateMagicPill,
  "Dafalgan":   updateDafalgan,
};

export function updateDrug(drug) {
  const updater = drugsList[drug.name] || updateNormal;
  return updater(drug);
}