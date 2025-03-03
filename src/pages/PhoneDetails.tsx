import { usePhone } from "@/hooks/phones/usePhone";
import { useParams } from "react-router-dom";
import { PhoneSelector } from "@/components/organisms/PhoneSelector/PhoneSelector";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { SimilarProducts, SpecificationsTable } from "@/components/organisms";

const SkeletonPhoneSelector = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full mb-4 lg:mb-10 lg:mt-8">
        <Skeleton
          width={300}
          height={400}
          className="lg:mr-8 width-[200px] lg:width-[300px]"
        />
        <div className="flex flex-col w-full lg:w-[380px] lg:h-[459px] mt-1 lg:mt-0">
          <Skeleton height={30} width="80%" />
          <Skeleton height={25} width="40%" />
          <Skeleton height={50} width="100%" className="mt-4" />
          <Skeleton height={50} width="100%" className="mt-4" />
          <Skeleton height={45} width="100%" className="mt-6" />
        </div>
      </section>
      <section className="w-full mb-8">
        <Skeleton height={30} width="60%" className="mb-2" />
        <Skeleton height={20} width="100%" className="mb-1" />
        <Skeleton height={20} width="100%" className="mb-1" />
        <Skeleton height={20} width="100%" className="mb-1" />
        <Skeleton height={20} width="100%" className="mb-1" />
        <Skeleton height={20} width="100%" className="mb-1" />
        <Skeleton height={20} width="100%" className="mb-1" />
      </section>
      <section className="w-full mb-1 lg:mb-8 flex">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} width={150} height={200} />
        ))}
      </section>
    </>
  );
};

const PhoneContent = ({ id }: { id: string }) => {
  const { phone, error } = usePhone(id);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <PhoneSelector phone={phone} />
      <section className="flex items-center justify-between w-full mb-8">
        <SpecificationsTable
          specs={phone.specs}
          name={phone.name}
          brand={phone.brand}
          description={phone.description}
        />
      </section>
      <section className="w-full overflow-scroll overflow-y-hidden overflow-x-scroll mb-1 lg:mb-8">
        <SimilarProducts similarProducts={phone.similarProducts} />
      </section>
    </>
  );
};

export const PhoneDetails = () => {
  const { id = "" } = useParams<{ id: string }>();

  return (
    <div>
      <Suspense fallback={<SkeletonPhoneSelector />}>
        <PhoneContent id={id} />
      </Suspense>
    </div>
  );
};
