import { Drug } from "./pharmacy";
import { updateDrug } from "./updateDrug";

describe("updateDrug – default case", () => {
  it("decremente -1 before expiration date", () => {
    const input = new Drug("Default", 5, 10);
    const output = updateDrug(input);

    // do not mutate
    expect(input).toEqual(new Drug("Default", 5, 10));

    // one day
    expect(output.expiresIn).toBe(4);

    // benefit must down to -1
    expect(output.benefit).toBe(9);
  });

  it("decremente -2 before expiration date", () => {
    const input = new Drug("Default", 0, 10);
    const output = updateDrug(input);

    // do not mutate
    expect(input).toEqual(new Drug("Default", 0, 10));

    // one day
    expect(output.expiresIn).toBe(-1);

    // benefit must down to -2
    expect(output.benefit).toBe(8);
  });
});

describe("updateDrug – Herbal Tea", () => {
  it("increase benefit to 1 before expiration", () => {
    const input = new Drug("Herbal Tea", 5, 10);
    const output = updateDrug(input);

    expect(input).toEqual(new Drug("Herbal Tea", 5, 10));

    expect(output.expiresIn).toBe(4);
    // benefit increase to +1
    expect(output.benefit).toBe(11);
  });

  it("increase benefit to +2 after expiration", () => {
    const input = new Drug("Herbal Tea", 0, 10);
    const output = updateDrug(input);

    expect(input).toEqual(new Drug("Herbal Tea", 0, 10));
    expect(output.expiresIn).toBe(-1);

    // benefit increase to +2
    expect(output.benefit).toBe(12);
  });

  it("we never exceed 50", () => {
    const input = new Drug("Herbal Tea", 5, 50);
    const output = updateDrug(input);

    // même après update, on clamp à 50
    expect(output.benefit).toBe(50);
  });
});
