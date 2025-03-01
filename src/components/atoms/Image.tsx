const Image = ({
  imageUrl,
  name,
  className,
  handleOnLoad,
}: {
  imageUrl: string;
  name: string;
  className?: string;
  handleOnLoad?: () => void;
}) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={`${name} picture`}
        className={className}
        loading="lazy"
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default Image;
