import { TEXTS } from "@/constants";

export const CartHeader = ({ ammountOfItems }: { ammountOfItems: number }) => {
  return (
    <h2 className="text-2xl" aria-label="Cart title">
      {TEXTS.cart.title.toUpperCase()}({ammountOfItems})
    </h2>
  );
};
