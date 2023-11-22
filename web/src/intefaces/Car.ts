export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  image: string;
  price: number;
}

export type CarFilterKey = Record<
  keyof Omit<Car, 'id' | 'image' | 'price'>,
  string
>;
