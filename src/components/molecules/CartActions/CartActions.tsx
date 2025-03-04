import { ContinueShoppingButton } from "@/components/atoms/ContinueShoppingButton/ContinueShoppingButton";
import { PayButton } from "@/components/atoms/PayButton/PayButton";
import { useWindowSize } from "@/hooks/useScreenSize";

export const CartActions = ({
  cartLength,
  totalPrice,
}: {
  cartLength: number;
  totalPrice: number;
}) => {
  const windowSize = useWindowSize();

  const isSmallScreen = windowSize.width < 768;

  return (
    <div
      className={`w-full flex flex-col-reverse md:flex-row justify-between items-center py-2 ${
        cartLength <= 1 && "sticky bottom-0"
      }`}
    >
      <div
        className={`mb-2 md:mb-0 md:block ${
          cartLength < 1
            ? "block w-full md:w-full"
            : "hidden w-full md:w-[260px]"
        } `}
      >
        <ContinueShoppingButton isSmallScreen={isSmallScreen} />
      </div>

      {cartLength >= 1 && (
        <div className="w-full md:w-[500px] flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-between w-full md:w-[150px] text-lg mb-2 md:mb-0">
            <span>TOTAL</span>
            <span aria-label="Total cart price">{totalPrice} EUR</span>
          </div>

          <div className="flex w-full md:w-auto gap-1">
            <div className="w-1/2 md:hidden">
              <ContinueShoppingButton isSmallScreen={isSmallScreen} />
            </div>

            <div className="w-1/2 md:w-[260px]">
              <PayButton isSmallScreen={isSmallScreen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
