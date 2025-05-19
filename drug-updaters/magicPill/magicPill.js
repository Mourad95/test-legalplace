import { Drug } from "../../pharmacy";

export function updateMagicPill(drug) {
  return new Drug(drug.name, drug.expiresIn, drug.benefit);
}
