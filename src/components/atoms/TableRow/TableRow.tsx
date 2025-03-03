import startcase from "lodash.startcase";

export const TableRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex justify-between border-b border-gray-300 text-xs py-1">
      <span className="text-gray-700 w-1/4">
        {startcase(label).toUpperCase()}
      </span>
      <span className="text-gray-600 w-3/4 text-right lg:text-left">
        {value}
      </span>
    </div>
  );
};
