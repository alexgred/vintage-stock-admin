export interface Clothing {
  id: number;
  name: string;
  brand: string;
  description: string;
  conditions: {
    id: number;
    name: string;
  };
  sizes : {
    id: number;
    name: string;
  };
  cost: number;
  price: number;
  sold: boolean;
  reserved: boolean;
}

export interface Size {
  id: number;
  name: string;
}

export type Sizes = Size[];

export interface Condition {
  id: number;
  name: string;
}

export type Conditions = Condition[];
