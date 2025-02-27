import { useQuery } from "@tanstack/react-query";
import { getPhoneById } from "@/lib/api/services/phoneService";
import { IPhoneDetails, IUsePhone } from "@/types/phone";

export const usePhone = (id: string): IUsePhone => {
  const {
    data: phone,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["phone", id],
    queryFn: () => getPhoneById(id),
    enabled: !!id,
  });

  return {
    phone: phone || ({} as IPhoneDetails),
    isLoading,
    error,
  };
};
