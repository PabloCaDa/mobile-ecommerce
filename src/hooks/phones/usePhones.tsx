import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhones } from "@/lib/api/services/phoneService";

import { removeDuplicatesById } from "@/lib/utils/removeDuplicatesById";
import { IPhone, IUsePhones } from "@/types/phone";
import { useEffect, useState } from "react";

export const usePhones = (search: string, limit: number): IUsePhones => {
  const initialPageParam = 1;
  const [previousPhones, setPreviousPhones] = useState<IPhone[]>([]);

  const {
    error,
    data: phones,
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["phones", search, limit],
    queryFn: ({ pageParam = initialPageParam }) =>
      getPhones(search, pageParam, limit),
    initialPageParam,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === limit ? pages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (phones) {
      setPreviousPhones(removeDuplicatesById(phones.pages.flat()));
    }
  }, [phones]);

  return {
    phones: isFetching
      ? previousPhones
      : removeDuplicatesById(phones?.pages.flat() || []),
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
};
