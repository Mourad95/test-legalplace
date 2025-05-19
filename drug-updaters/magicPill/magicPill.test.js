import { Drug } from "../../pharmacy";
import { updateMagicPill } from "./magicPill";

describe("updateMagicPill", () => {
  it("does not change expiresIn nor profit before expiration", () => {
    const input = new Drug("Magic Pill", 10, 40);
    const output = updateMagicPill(input);

    expect(input).toEqual(new Drug("Magic Pill", 10, 40));

    // no changes
    expect(output.expiresIn).toBe(10);
    expect(output.benefit).toBe(40);
  });

  it("does not change expiresIn or benefit after expiration", () => {
    const input = new Drug("Magic Pill", 0, 40);
    const output = updateMagicPill(input);

    expect(input).toEqual(new Drug("Magic Pill", 0, 40));
    expect(output.expiresIn).toBe(0);
    expect(output.benefit).toBe(40);
  });
});
