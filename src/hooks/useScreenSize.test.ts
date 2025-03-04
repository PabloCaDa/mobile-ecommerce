import { renderHook, act } from "@testing-library/react";
import { useWindowSize } from "./useScreenSize";

describe("useWindowSize", () => {
  it("should return the initial window size", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toEqual({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  it("should update window size on resize", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 500,
      height: 500,
    });
  });
});
