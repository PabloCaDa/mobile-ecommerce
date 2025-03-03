import { renderHook, waitFor } from "@testing-library/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { usePhone } from "./usePhone";
import { IPhoneDetails } from "@/types/phone";
import { mockPhoneFixture } from "@/test/__fixtures__/phones";

jest.mock("@tanstack/react-query", () => ({
  useSuspenseQuery: jest.fn(),
}));

jest.mock("../../../src/lib/api/services/phoneService", () => ({
  getPhoneById: jest.fn(),
}));

describe("usePhone", () => {
  it("should return phone data when query is successful", async () => {
    const phoneData: IPhoneDetails = mockPhoneFixture;
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: phoneData,
      isLoading: false,
      error: null,
    });

    const { result } = renderHook(() => usePhone("1"));

    await waitFor(() => {
      expect(result.current.phone).toEqual(phoneData);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("should return loading state initially", () => {
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const { result } = renderHook(() => usePhone("1"));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.phone).toEqual({});
    expect(result.current.error).toBeNull();
  });

  it("should return error state when query fails", async () => {
    const error = new Error("Failed to fetch");
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error,
    });

    const { result } = renderHook(() => usePhone("1"));

    await waitFor(() => {
      expect(result.current.error).toEqual(error);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.phone).toEqual({});
    });
  });
});
