import { PaginatedQuery } from "./query";

export interface IPhone {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  basePrice: number;
}

export interface IPhoneColorOptions {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface IPhoneSpecs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface IPhoneStorageOptions {
  capacity: string;
  price: number;
}

export interface IPhoneDetails extends Omit<IPhone, "imageUrl"> {
  colorOptions: IPhoneColorOptions[];
  description: string;
  rating: number;
  specs: IPhoneSpecs;
  storageOptions: IPhoneStorageOptions[];
  similarProducts: IPhone[];
}

export interface IUsePhones extends PaginatedQuery {
  phones: IPhone[];
}
