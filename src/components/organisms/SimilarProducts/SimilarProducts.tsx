import { IPhone } from "@/types/phone";
import { PhonesGrid } from "@/components/organisms";
import { TEXTS } from "@/constants";

export const SimilarProducts = ({
  similarProducts,
}: {
  similarProducts: IPhone[];
}) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-light mb-2">
        {TEXTS.similarProducts.title.toUpperCase()}
      </h2>
      {similarProducts.length > 0 ? (
        <PhonesGrid phones={similarProducts} isHorizontalDisplay />
      ) : (
        <p className="text-gray-500 italic">No similar products available.</p>
      )}
    </div>
  );
};
