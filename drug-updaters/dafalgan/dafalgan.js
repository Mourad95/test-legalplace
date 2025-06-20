import { benefit } from "../../enum/benefit";
import { Drug } from "../../pharmacy";

/**
 * @param {Drug} drug
 */

export function updateDafalgan(drug) {
  const d = new Drug(drug.name, drug.expiresIn, drug.benefit);

  //Before expiry: degradation of 2
  if (d.benefit > benefit.min) {
    d.benefit -= 2;
  }

  //Decrement of expiresIn
  d.expiresIn -= 1;
  // after expiration: -2 again
  if (d.expiresIn < 0 && d.benefit > benefit.min) {
    d.benefit -= 2;
  }

  // benefit stay between 0 and 50
  if (d.benefit < 0) {
    d.benefit = 0;
  } else if (d.benefit > benefit.max) {
    d.benefit = benefit.max;
  }

  return d;
}
