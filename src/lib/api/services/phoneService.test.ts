import { getPhones, getPhoneById } from "./phoneService";
import {
  mockPhoneFixture,
  mockPhonesFixture,
} from "@/test/__fixtures__/phones";
import { IPhone, IPhoneDetails } from "@/types/phone";
import apiClient from "@/lib/api/client";

jest.mock("@/lib/api/client", () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

jest.mock("@/config", () => {
  return jest.fn((key: "VITE_API_BASE_URL" | "VITE_API_KEY") => {
    const env = {
      VITE_API_BASE_URL: "https://api.example.com",
      VITE_API_KEY: "test-api-key",
    };
    return env[key];
  });
});

describe("phoneService", () => {
  describe("getPhones", () => {
    let result: IPhone[];

    describe("when no search parameter is provided", () => {
      beforeEach(async () => {
        (apiClient.get as jest.Mock).mockResolvedValue(mockPhonesFixture);

        result = await getPhones();
      });

      it("should fetch phones with default parameters", async () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          "products?limit=20&offset=0"
        );
        expect(result).toEqual(mockPhonesFixture);
      });
    });

    describe("when search parameter is provided", () => {
      beforeEach(async () => {
        (apiClient.get as jest.Mock).mockResolvedValue(mockPhonesFixture);

        result = await getPhones("test");
      });

      it("should fetch phones with search parameter", async () => {
        expect(apiClient.get).toHaveBeenCalledWith(
          "products?limit=20&offset=0&search=test"
        );
        expect(result).toEqual(mockPhonesFixture);
      });
    });
  });

  describe("getPhoneById", () => {
    let result: IPhoneDetails;

    beforeEach(async () => {
      (apiClient.get as jest.Mock).mockResolvedValue(mockPhoneFixture);

      result = await getPhoneById("1");
    });

    it("should fetch phone by id", async () => {
      expect(apiClient.get).toHaveBeenCalledWith("products/1");
      expect(result).toEqual(mockPhoneFixture);
    });
  });
});
