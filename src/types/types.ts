export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  similarity?: number;
}

export interface ModelState {
  model: any;
  loading: boolean;
  error: string | null;
}