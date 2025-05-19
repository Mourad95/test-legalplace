import { Drug } from "../../pharmacy";

export function updateFervex(drug) {
  const d = new Drug(drug.name, drug.expiresIn, drug.benefit);

  // base +1
  if (d.benefit < 50) d.benefit += 1;
  // bonus
  if (d.expiresIn <= 10 && d.benefit < 50) d.benefit += 1;
  if (d.expiresIn <= 5 && d.benefit < 50) d.benefit += 1;

  d.expiresIn -= 1;
  // reset after expiration
  if (d.expiresIn < 0) d.benefit = 0;

  return d;
}
