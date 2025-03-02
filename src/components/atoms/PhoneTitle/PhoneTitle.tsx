interface PhoneDetailsTitleProps {
  title: string;
  price: number;
  isBasePrice: boolean;
}

export const PhoneTitle = ({
  title,
  price,
  isBasePrice,
}: PhoneDetailsTitleProps) => {
  return (
    <div className="flex flex-col items-start w-full mb-4">
      <h2 role="heading" className="text-2xl">
        {title.toUpperCase()}
      </h2>
      <p aria-label="Phone price" className="text-xl">
        {isBasePrice ? `From ${price} EUR` : `${price} EUR`}
      </p>
    </div>
  );
};
