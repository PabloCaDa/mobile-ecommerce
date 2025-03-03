export interface ICartItem {
  id: string;
  name: string;
  color: string;
  imageUrl: string;
  price: number;
  quantity: number;
  storage: string;
  ref: string;
}

export interface ICartContext {
  cart: ICartItem[];
  addToCart: (itemToAdd: Omit<ICartItem, "quantity" | "ref">) => void;
  removeFromCart: (phoneId: string) => void;
}
