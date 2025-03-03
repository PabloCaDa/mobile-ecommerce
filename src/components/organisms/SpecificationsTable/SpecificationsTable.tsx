import { TableRow } from "@/components/atoms/TableRow/TableRow";
import { TEXTS } from "@/constants";
import { IPhoneSpecs } from "@/types/phone";

export const SpecificationsTable = ({
  specs,
  name,
  brand,
  description,
}: {
  specs: IPhoneSpecs;
  name: string;
  brand: string;
  description: string;
}) => {
  const tableEntries = [
    ["name", name],
    ["brand", brand],
    ["description", description],
    ...Object.entries(specs),
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl mb-2">
        {TEXTS.specoficationsTable.title.toUpperCase()}
      </h2>
      <div className="border-t border-gray-300">
        {tableEntries.map(([label, value]) => (
          <TableRow key={label} label={label} value={value} />
        ))}
      </div>
    </div>
  );
};
