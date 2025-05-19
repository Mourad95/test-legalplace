
import { Drug } from "../../pharmacy";

export function updateDefaultDrug(drug) {
  const d = new Drug(drug.name, drug.expiresIn, drug.benefit);

  // before expiration
  if (d.benefit > 0) {
    d.benefit -= 1;
  }

  d.expiresIn -= 1;

  // after expiration -1 again
  if (d.expiresIn < 0 && d.benefit > 0) {
    d.benefit -= 1;
  }

  // to be sure 0 ≤ benefit ≤ 50
  if (d.benefit < 0) {
    d.benefit = 0;
  } else if (d.benefit > 50) {
    d.benefit = 50;
  }

  return d;
}
