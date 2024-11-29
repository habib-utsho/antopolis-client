import { TCategory } from "./category";

export interface TCreateAnimal {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  category: string;
}
export interface TAnimal {
  _id: string;
  name: string;
  img: string;
  category: TCategory;
  createdAt: string;
  updatedAt: string;
}
