
import { Drug } from "../../pharmacy";

export function updateDafalgan(drug) {
  const d = new Drug(drug.name, drug.expiresIn, drug.benefit);

  //Before expiry: degradation of 2
  if (d.benefit > 0) {
    d.benefit -= 2;
  }

  //Decrement of expiresIn
  d.expiresIn -= 1;

  // after expiration: -2 again
  if (d.expiresIn < 0 && d.benefit > 0) {
    d.benefit -= 2;
  }

  // benefit stay between 0 and 50
  if (d.benefit < 0) {
    d.benefit = 0;
  } else if (d.benefit > 50) {
    d.benefit = 50;
  }

  return d;
}
