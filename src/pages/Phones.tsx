import { PhoneCard } from "@/components/molecules/PhoneCard/PhoneCard";
import { SearchContext } from "@/contexts";
import { usePhones } from "@/hooks/phones";
import { use } from "react";

export const Phones: React.FC = () => {
  const { searchValue } = use(SearchContext);
  const { phones } = usePhones(searchValue, 20);

  return (
    <div className="w-[250px] h-[250px] mt-3">
      {phones.length > 0 && <PhoneCard phone={phones[0]} />}
    </div>
  );
};
