const data = { data: "test" };

const mockedAxiosInstance = {
  get: jest.fn().mockResolvedValue(data),
  post: jest.fn().mockResolvedValue(data),
  put: jest.fn().mockResolvedValue(data),
  delete: jest.fn().mockResolvedValue(data),
};

jest.mock("axios", () => ({
  create: jest.fn(() => mockedAxiosInstance),
}));

import apiClient from "./client";

describe("ApiClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  describe("getInstance", () => {
    it("should create an instance of ApiClient", () => {
      expect(apiClient).toBeInstanceOf(Object);
    });
  });

  describe("get", () => {
    it("should make a GET request", async () => {
      const response = await apiClient.get("/test", config);

      expect(mockedAxiosInstance.get).toHaveBeenCalledWith("/test", config);
      expect(response).toEqual("test");
    });
  });

  describe("post", () => {
    it("should make a POST request", async () => {
      const response = await apiClient.post("/test", { key: "value" }, config);

      expect(mockedAxiosInstance.post).toHaveBeenCalledWith(
        "/test",
        { key: "value" },
        config,
      );
      expect(response).toEqual("test");
    });
  });

  describe("put", () => {
    it("should make a PUT request", async () => {
      const response = await apiClient.put("/test", { key: "value" }, config);

      expect(mockedAxiosInstance.put).toHaveBeenCalledWith(
        "/test",
        { key: "value" },
        config,
      );
      expect(response).toEqual("test");
    });
  });

  describe("delete", () => {
    it("should make a DELETE request", async () => {
      const response = await apiClient.delete("/test", config);

      expect(mockedAxiosInstance.delete).toHaveBeenCalledWith("/test", config);
      expect(response).toEqual("test");
    });
  });
});
