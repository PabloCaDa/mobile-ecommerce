import { Reorder } from "motion/react";
import { PhoneCard } from "@/components/molecules";
import { IPhone } from "@/types/phone";

export const PhonesGrid = ({
  phones,
  isHorizontalDisplay = false,
}: {
  phones: IPhone[];
  isHorizontalDisplay?: boolean;
}) => {
  const horizontalStyle = `
    grid grid-flow-col 
    w-full 
    gap-[1px] 
    overflow-x-auto overflow-y-hidden
    auto-cols-[275px] 
    snap-x snap-mandatory 
    scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400
    pl-[1px] pr-[1px] pb-[1px] pt-[1px]
  `;

  const verticalStyle = `w-full lg:max-width-[1700px] 
    mb-10 mt-1 pl-[1px] pr-[1px] pb-[1px] pt-[1px] 
    grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[1px]`;

  return (
    <Reorder.Group
      className={isHorizontalDisplay ? horizontalStyle : verticalStyle}
      axis={isHorizontalDisplay ? "x" : "y"}
      values={phones}
      onReorder={() => {}}
      role="list"
      aria-label="List of phones results"
      tabIndex={0}
      as="section"
    >
      {phones.map((phone: IPhone) => (
        <Reorder.Item key={phone.id} value={phone} as="article">
          <PhoneCard phone={phone} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
