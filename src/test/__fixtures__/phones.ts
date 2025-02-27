import { IPhone, IPhoneDetails } from "@/types/phone";

export const mockPhonesFixture: IPhone[] = [
  {
    id: "1",
    name: "Phone name",
    brand: "Phone Brand",
    imageUrl: "Phone Image URL",
    basePrice: 100,
  },
  {
    id: "2",
    name: "Phone 2 name",
    brand: "Phone 2 Brand",
    imageUrl: "Phone 2 Image URL",
    basePrice: 200,
  },
];

export const mockPhoneFixture: IPhoneDetails = {
  id: "1",
  name: "Phone name",
  brand: "Phone Brand",
  basePrice: 100,
  colorOptions: [],
  description: "Phone description",
  rating: 5,
  specs: {
    screen: "Phone screen",
    resolution: "Phone resolution",
    processor: "Phone processor",
    mainCamera: "Phone main camera",
    selfieCamera: "Phone selfie camera",
    battery: "Phone battery",
    os: "Phone OS",
    screenRefreshRate: "Phone screen refresh rate",
  },
  storageOptions: [],
  similarProducts: [],
};
