export interface Fillings {
  microgreens: boolean;
  asparagus: boolean;
  avocado: boolean;
  carrots: boolean;
  daikon: boolean;
  scallions: boolean;
  cucumber: boolean;
  greensprouts: boolean;
  springmix: boolean;
  redcabbage: boolean;
  creamcheese: boolean;
  panko: boolean;
  sesame: boolean;
}

export interface Addons {
  seaweedsalad: boolean;
  squidsalad: boolean;
}

export interface Burrito {
  name: string;
  meat: string;
  fillings: Fillings;
  addons: Addons;
  price: number;
}
