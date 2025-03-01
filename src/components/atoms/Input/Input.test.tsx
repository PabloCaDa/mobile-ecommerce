import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  const handleChange = jest.fn();
  const handleClear = jest.fn();

  beforeEach(() => {
    render(
      <Input
        ariaLabel="test-input"
        initialValue="test"
        name="test"
        onChange={handleChange}
        onClear={handleClear}
        type="text"
        placeholder="test placeholder"
      />,
    );
  });

  it("should render input with initial value", () => {
    const input = screen.getByRole("textbox", {
      name: /test-input/i,
    }) as HTMLInputElement;

    expect(input.value).toBe("test");
    expect(input.name).toBe("test");
    expect(input.type).toBe("text");
    expect(input.placeholder).toBe("test placeholder");
  });

  it("should call onChange when input value changes", () => {
    const input = screen.getByLabelText("test-input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalled();
    expect(input.value).toBe("new value");
  });

  it("should call onClear when clear button is clicked", () => {
    const clearButton = screen.getByRole("button", { name: /clear search/i });

    fireEvent.click(clearButton);

    expect(handleClear).toHaveBeenCalled();

    const input = screen.getByLabelText("test-input") as HTMLInputElement;
    expect(input.value).toBe("");
  });
});
