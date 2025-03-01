import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IPhone } from "@/types/phone";
import { CardPhoneDetails, CardPhoneImage } from "@/components/atoms";

const PhoneOverlay = memo(() => (
  <div
    aria-hidden="true"
    className="absolute bg-black h-full w-full z-1 transition-all duration-300 ease-in-out translate-y-100 group-hover:translate-y-0"
  />
));

export const PhoneCard = memo(({ phone }: { phone: IPhone }) => {
  const { id, imageUrl, name, brand, basePrice } = phone;
  const navigate = useNavigate();

  const handleClick = React.useCallback(() => {
    navigate(`/phones/${id}`);
  }, [navigate, id]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div
      className="relative w-full bg-transparent overflow-hidden pt-[100%] aspect-square outline-1 group font-thin border-collapse"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`${brand} ${name} item card`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <PhoneOverlay />
        <div className="absolute flex flex-col justify-center items-center z-2 h-full w-full ease-in-out group-hover:text-white transition-all duration-300">
          <CardPhoneImage imageUrl={imageUrl} name={name} />
          <CardPhoneDetails brand={brand} name={name} basePrice={basePrice} />
        </div>
      </div>
    </div>
  );
});
