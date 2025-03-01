import { IPhone } from "@/types";
import React, { lazy } from "react";

const Image = lazy(() => import("@/components/atoms/Image/Image"));

export const CardPhoneImage = React.memo(
  ({ imageUrl, name }: Pick<IPhone, "imageUrl" | "name">) => {
    return (
      <div className="relative flex items-center justify-center aspect-square h-3/4">
        <Image
          imageUrl={imageUrl}
          name={name}
          className="h-full max-w-full max-h-full object-contain"
        />
      </div>
    );
  },
);
