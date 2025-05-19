import { Drug } from "../../pharmacy";
import { updateDefaultDrug } from "./default";

describe("updateDefaultDrug", () => {
  it("decrease benefit -1 before expiration (expiresIn > 0)", () => {
    const input = new Drug("default", 5, 10);
    const output = updateDefaultDrug(input);

    expect(input).toEqual(new Drug("default", 5, 10));

    expect(output.expiresIn).toBe(4);
    // benefit -1
    expect(output.benefit).toBe(9);
  });

  it("decrease benefit -2 after expiration (expiresIn ≤ 0)", () => {
    const input = new Drug("default", 0, 10);
    const output = updateDefaultDrug(input);

    expect(input).toEqual(new Drug("default", 0, 10));
    expect(output.expiresIn).toBe(-1);
    // benefit +2
    expect(output.benefit).toBe(8);
  });

  it("never under 0", () => {
    const input = new Drug("default", 0, 0);
    const output = updateDefaultDrug(input);
    expect(output.benefit).toBe(0);
  });
});
