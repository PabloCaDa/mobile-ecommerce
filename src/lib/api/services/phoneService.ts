import apiClient from "@/lib/api/client";
import { IPhone, IPhoneDetails } from "@/types/phone";

export const getPhones = async (
  search: string = "",
  page = 1,
  limit = 20
): Promise<IPhone[]> => {
  const params = new URLSearchParams();
  const offset = (page - 1) * limit;
  params.append("limit", limit.toString());
  params.append("offset", offset.toString());

  if (search) {
    params.append("search", search);
  }

  const phones = await apiClient.get<IPhone[]>(`products?${params.toString()}`);

  return phones;
};

export const getPhoneById = async (id: string = ""): Promise<IPhoneDetails> => {
  const phone = await apiClient.get<any>(`products/${id}`);

  return phone;
};
