export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  discount?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  image: string;
}
