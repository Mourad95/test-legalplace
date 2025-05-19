import { Drug } from "../../pharmacy";
import { updateDafalgan } from "./dafalgan";

describe("updateDafalgan", () => {
  it("degrades by 2 before the expiration date (expiresIn > 0)", () => {
    const input = new Drug("Dafalgan", 5, 10);
    const output = updateDafalgan(input);

    expect(input).toEqual(new Drug("Dafalgan", 5, 10));

    expect(output.expiresIn).toBe(4);
    // benefit -2
    expect(output.benefit).toBe(8);
  });

  it("degrades by 4 after the expiration date (expiresIn ≤ 0)", () => {
    const input = new Drug("Dafalgan", 0, 10);
    const output = updateDafalgan(input);

    expect(input).toEqual(new Drug("Dafalgan", 0, 10));

    expect(output.expiresIn).toBe(-1);
    // benefit -4
    expect(output.benefit).toBe(6);
  });

  it("never goes below 0", () => {
    const input = new Drug("Dafalgan", 1, 1);
    const output = updateDafalgan(input);

    expect(output.benefit).toBe(0);
  });
});
