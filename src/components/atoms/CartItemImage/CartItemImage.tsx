import { IPhone } from "@/types";
import React, { lazy } from "react";

const Image = lazy(() => import("@/components/atoms/Image/Image"));

export const CartItemImage = React.memo(
  ({ imageUrl, name }: Pick<IPhone, "imageUrl" | "name">) => {
    return (
      <div className="w-[160px] h-[196px] lg:h-full lg:w-[246px] flex mr-1 lg:mr-0">
        <Image imageUrl={imageUrl} name={`${name} picture`} />
      </div>
    );
  },
);
