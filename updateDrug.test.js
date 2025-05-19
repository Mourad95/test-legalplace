//tester chaque cas 

import { Drug } from "./pharmacy";
import { updateDrug } from "./updateDrug";


describe("updateDrug – default case", () => {
  it("decremente -1 before expiration date", () => {
    const input = new Drug("Default",5,10);
    const output = updateDrug(input);

    // do not mutate
    expect(input).toEqual(new Drug("Default", 5, 10));

    // one day
    expect(output.expiresIn).toBe(4);

    // benefit must down to -1
    expect(output.benefit).toBe(9);
  });
});
