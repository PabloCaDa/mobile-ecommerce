import { AddPhoneButton, PhoneImage, PhoneTitle } from "@/components/atoms";
import { ColorPicker, StoragePicker } from "@/components/molecules";
import { CartContext } from "@/contexts";
import {
  IPhoneColorOptions,
  IPhoneDetails,
  IPhoneStorageOptions,
} from "@/types";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PhoneSelectorProps {
  phone: IPhoneDetails;
}

export const PhoneSelector = ({ phone }: PhoneSelectorProps) => {
  const { addToCart } = use(CartContext);
  const navigate = useNavigate();

  const [storage, setStorage] = useState<IPhoneStorageOptions>({
    capacity: "",
    price: 0,
  });

  const [color, setColor] = useState<IPhoneColorOptions>({
    name: "",
    hexCode: "",
    imageUrl: "",
  });

  const [isBasePrice, setIsBasePrice] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (phone && phone.storageOptions?.length > 0) {
      setPrice(phone.storageOptions[0].price);
    }
  }, [phone]);

  const handleColorChange = (colorOption: IPhoneColorOptions) => {
    setColor(colorOption);
  };

  const handleStorageChange = (storage: IPhoneStorageOptions) => {
    setIsBasePrice(false);
    setStorage(storage);
    setPrice(storage.price);
    setColor(color);
  };

  const handleAddToCart = () => {
    addToCart({
      id: phone.id,
      name: phone.name,
      color: color.name,
      imageUrl: color.imageUrl,
      price,
      storage: storage.capacity,
    });

    navigate("/cart");
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full mb-4 lg:mb-10 lg:mt-8">
      <PhoneImage
        imageUrl={color.imageUrl || phone.colorOptions[0]?.imageUrl}
        name={phone.name}
      />

      <div className="flex flex-col w-full lg:w-[380px] lg:h-[459px] mt-1 lg:mt-0">
        <PhoneTitle
          title={phone.name}
          price={price}
          isBasePrice={isBasePrice}
        />
        <StoragePicker
          storageOptions={phone.storageOptions}
          activeStorage={storage}
          onStorageChange={handleStorageChange}
        />
        <ColorPicker
          colorOptions={phone.colorOptions}
          onColorChange={handleColorChange}
          activeColor={color}
        />
        <AddPhoneButton
          handleOnClick={handleAddToCart}
          disabled={!(!!storage.capacity && !!color.name)}
        />
      </div>
    </section>
  );
};
