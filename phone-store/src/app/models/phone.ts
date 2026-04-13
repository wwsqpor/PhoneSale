// models/phone.ts
export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  description: string;
  image: string;
  memory: string;
  camera: string;
  battery: string;
  liked?: boolean;
}