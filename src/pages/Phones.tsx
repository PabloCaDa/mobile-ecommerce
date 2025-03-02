import { Suspense, useEffect, use } from "react";
import { PhonesGrid } from "@/components/organisms";
import { usePhones } from "@/hooks/phones/usePhones";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchContext } from "@/contexts/SearchContext";
import Skeleton from "react-loading-skeleton";

const SkeletonGrid = ({
  className = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px]",
  height = "250px",
  duration = 0.75,
  length = 20,
}) => (
  <div className={className} aria-label="Grid skeleton loader">
    {Array.from({ length }).map((_, index) => (
      <Skeleton key={index} height={height} duration={duration} />
    ))}
  </div>
);

export const Phones: React.FC = () => {
  const { searchValue, setResultsAmount } = use(SearchContext);
  const { phones, error, fetchNextPage, hasNextPage } = usePhones(
    searchValue,
    20,
  );

  useEffect(() => {
    setResultsAmount(phones.length);
  }, [phones, setResultsAmount]);

  if (error) {
    return "Something went wrong";
  }

  return (
    <InfiniteScroll
      className="mt-3"
      dataLength={phones.length}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<SkeletonGrid className="mt-0" length={1} />}
    >
      <Suspense fallback={<SkeletonGrid />}>
        <PhonesGrid phones={phones} />
      </Suspense>
    </InfiniteScroll>
  );
};
