import { updateDrug } from "./updateDrug";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      return updateDrug(drug);
    });

    return this.drugs;
  }
}
