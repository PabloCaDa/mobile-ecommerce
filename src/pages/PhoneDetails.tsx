import { usePhone } from "@/hooks/phones/usePhone";
import { useParams } from "react-router-dom";
import { PhoneSelector } from "@/components/organisms/PhoneSelector/PhoneSelector";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonPhoneSelector = () => {
  return (
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
