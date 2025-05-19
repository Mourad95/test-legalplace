import { Drug } from "./pharmacy";
import { updateDrug } from "./updateDrug";

describe("updateDrug – integration case", () => {
  it("use updateDefaultDrug for a generic drug", () => {
    const inDrug = new Drug("Doliprane", 3, 5);
    const outDrug = updateDrug(inDrug);
    // normal → expiresIn–1, benefit–1
    expect(outDrug).toEqual(new Drug("Doliprane", 2, 4));
  });

  it("use updateHerbalTea for Herbal Tea", () => {
    const inDrug = new Drug("Herbal Tea", 2, 3);
    const outDrug = updateDrug(inDrug);
    // +1 before expiration
    expect(outDrug).toEqual(new Drug("Herbal Tea", 1, 4));
  });

  it("use updateFervex for Fervex", () => {
    const inDrug = new Drug("Fervex", 5, 10);
    const outDrug = updateDrug(inDrug);
    // ≤5 jours → +3
    expect(outDrug).toEqual(new Drug("Fervex", 4, 13));
  });

  it("use updateMagicPill for Magic Pill", () => {
    const inDrug = new Drug("Magic Pill", 5, 40);
    const outDrug = updateDrug(inDrug);
    // stay the same
    expect(outDrug).toEqual(new Drug("Magic Pill", 5, 40));
  });

  it("use updateDafalgan for Dafalgan", () => {
    const inDrug = new Drug("Dafalgan", 0, 10);
    const outDrug = updateDrug(inDrug);
    // after expiration → –4
    expect(outDrug).toEqual(new Drug("Dafalgan", -1, 6));
  });
});
