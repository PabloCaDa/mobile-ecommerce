import { ICartContext, ICartItem } from "@/types";
import { createContext, useEffect, useState } from "react";

const getInitialCart = (): ICartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>(getInitialCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemToAdd: Omit<ICartItem, "quantity" | "ref">) => {
    const ref = `${itemToAdd.id}${itemToAdd.color}${itemToAdd.storage}`.trim();
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.ref === ref);

      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...itemToAdd,
          ref,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (itemRef: string) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.ref !== itemRef);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
