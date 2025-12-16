export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export interface Order {
  items: CartItem[];
  total: number;
  customerName: string;
  phone: string;
  address: string;
}
