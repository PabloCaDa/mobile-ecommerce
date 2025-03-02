import Image from "@/components/atoms/Image/Image";

export const PhoneDetailsImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="w-[290px] h-[290px] lg:w-[510px] lg:h-[459px] flex items-center justify-center">
      <Image
        imageUrl={imageUrl}
        name={name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};
