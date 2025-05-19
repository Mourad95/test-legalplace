import { Drug } from "../../pharmacy";

export function updateHerbalTea(drug) {
  const d = new Drug(drug.name, drug.expiresIn, drug.benefit);

  // before expiration +1 but < 50
  if (d.benefit < 50) {
    d.benefit += 1;
  }

  //decrease de expiresIn
  d.expiresIn -= 1;

  // +1 additional <50
  if (d.expiresIn < 0 && d.benefit < 50) {
    d.benefit += 1;
  }

  return d;
}
