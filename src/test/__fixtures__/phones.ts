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
  brand: "Phone brand",
  basePrice: 100,
  colorOptions: [
    { name: "Phone color", hexCode: "Phone hex code", imageUrl: "Phone image" },
    {
      name: "Phone color 2",
      hexCode: "Phone hex code 2",
      imageUrl: "Phone image 2",
    },
  ],
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
  storageOptions: [
    {
      capacity: "Phone storage",
      price: 100,
    },
    {
      capacity: "Phone storage 2",
      price: 200,
    },
  ],
  similarProducts: [
    {
      id: "2",
      name: "Similar product name",
      brand: "Similar product brand",
      imageUrl: "Similar product url",
      basePrice: 100,
    },
    {
      id: "3",
      name: "Similar product 2 name",
      brand: "Similar product 2 brand",
      imageUrl: "Similar product 2 url",
      basePrice: 200,
    },
  ],
};
