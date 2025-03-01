import { IPhone } from "@/types";
import React from "react";

export const CardPhoneDetails = React.memo(
  ({ brand, name, basePrice }: Omit<IPhone, "imageUrl" | "id">) => (
    <div className="flex flex-col justify-between w-full items-start px-1 py-1">
      <span className="text-[10px] text-grey-400 ease-in-out group-hover:text-white transition-all duration-300">
        {brand.toUpperCase()}
      </span>
      <div className="flex flex-row justify-between items-center w-full text-xs">
        <span>{name.toUpperCase()}</span>
        <span>{basePrice} EUR</span>
      </div>
    </div>
  ),
);
