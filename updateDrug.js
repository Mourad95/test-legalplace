import { strategies } from "./DrugStrategy";
import { updateDefaultDrug } from "./drug-updaters/default/default";
import { Drug } from "./pharmacy";

export function updateDrug(drug = new Drug()) {
  const strategy = strategies[drug.name] || updateDefaultDrug;
  return strategy(drug);
}
