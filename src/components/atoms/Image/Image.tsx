interface ImageProps {
  imageUrl: string;
  name: string;
  className?: string;
  handleOnLoad?: () => void;
  handleOnError?: () => void;
}

const Image = ({
  imageUrl,
  name,
  className,
  handleOnLoad,
  handleOnError,
}: ImageProps) => {
  return (
    <img
      src={imageUrl}
      alt={`${name} picture`}
      className={className}
      loading="lazy"
      onLoad={handleOnLoad}
      onError={handleOnError}
      role="img"
      aria-label={`${name} picture`}
    />
  );
};

export default Image;
