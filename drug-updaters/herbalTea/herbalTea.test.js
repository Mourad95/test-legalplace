import { Drug } from "../../pharmacy";
import { updateHerbalTea } from "./herbalTea";

describe("updateHerbalTea", () => {
  it("increase benefit +1 before expiration (expiresIn > 0)", () => {
    const input = new Drug("Herbal Tea", 5, 10);
    const output = updateHerbalTea(input);

    expect(input).toEqual(new Drug("Herbal Tea", 5, 10));

    expect(output.expiresIn).toBe(4);
    // benefit +1
    expect(output.benefit).toBe(11);
  });

  it("increase benefit +2 after expiration (expiresIn ≤ 0)", () => {
    const input = new Drug("Herbal Tea", 0, 10);
    const output = updateHerbalTea(input);

    expect(input).toEqual(new Drug("Herbal Tea", 0, 10));
    expect(output.expiresIn).toBe(-1);
    // benefit +2
    expect(output.benefit).toBe(12);
  });

  it("never exceed 50", () => {
    const input = new Drug("Herbal Tea", 5, 50);
    const output = updateHerbalTea(input);
    expect(output.benefit).toBe(50);
  });
});
