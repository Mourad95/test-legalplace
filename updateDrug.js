import { Drug } from "./pharmacy";

export function updateDrug(drug) {
  // create new instance
  const updated = new Drug(drug.name, drug.expiresIn, drug.benefit);

  // before expiration decrement benefit -1
  if (updated.benefit > 0) {
    updated.benefit -= 1;
  }

  // decrement expiresIn
  updated.expiresIn -= 1;

  // after expiration -1 again
  if (updated.expiresIn < 0 && updated.benefit > 0) {
    updated.benefit -= 1;
  }
  return updated;
}
