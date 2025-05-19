import { updateDefaultDrug } from "./drug-updaters/default/default";
import { updateHerbalTea } from "./drug-updaters/herbalTea/herbalTea";
import { updateFervex } from "./drug-updaters/fervex/fervex";
import { updateMagicPill } from "./drug-updaters/magicPill/magicPill";
import { updateDafalgan } from "./drug-updaters/dafalgan/dafalgan";

export function updateDrug(drug) {
  switch (drug.name) {
    case "Herbal Tea":
      return updateHerbalTea(drug);

    case "Fervex":
      return updateFervex(drug);

    case "Magic Pill":
      return updateMagicPill(drug);

    case "Dafalgan":
      return updateDafalgan(drug);

    default:
      return updateDefaultDrug(drug);
  }
}
