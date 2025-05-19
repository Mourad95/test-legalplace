import { Drug } from "../../pharmacy";
import { updateFervex } from "./fervex";

describe("updateFervex", () => {
  it("increase +1 when expiresIn > 10", () => {
    const input = new Drug("Fervex", 11, 20);
    const output = updateFervex(input);

    expect(input).toEqual(new Drug("Fervex", 11, 20));

    expect(output.expiresIn).toBe(10);
    // benefit +1
    expect(output.benefit).toBe(21);
  });

  it("increase +2 when expiresIn ≤ 10 et > 5", () => {
    const input = new Drug("Fervex", 10, 20);
    const output = updateFervex(input);
    expect(input).toEqual(new Drug("Fervex", 10, 20));
    expect(output.expiresIn).toBe(9);
    // +2 ≤10
    expect(output.benefit).toBe(22);
  });

  it("increase +3 when expiresIn ≤ 5 et ≥ 1", () => {
    const input = new Drug("Fervex", 5, 20);
    const output = updateFervex(input);
    expect(input).toEqual(new Drug("Fervex", 5, 20));
    expect(output.expiresIn).toBe(4);
    // +1 de base, +1 palier ≤10, +1 palier ≤5
    expect(output.benefit).toBe(23);
  });

  it("benefit return 0 after expiration", () => {
    const input = new Drug("Fervex", 0, 20);
    const output = updateFervex(input);
    expect(input).toEqual(new Drug("Fervex", 0, 20));
    // expiresIn décrémente à -1
    expect(output.expiresIn).toBe(-1);
    // reset à 0
    expect(output.benefit).toBe(0);
  });

  it("never exceed 50", () => {
    const input = new Drug("Fervex", 5, 50);
    const output = updateFervex(input);
    expect(output.benefit).toBe(50);
  });
});
