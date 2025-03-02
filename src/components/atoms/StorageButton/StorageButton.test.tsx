import { render, screen, fireEvent } from "@testing-library/react";
import { StorageButton } from "./StorageButton";
import { IPhoneStorageOptions } from "@/types";

const mockStorageOptions: IPhoneStorageOptions[] = [
  { capacity: "64 GB", price: 100 },
  { capacity: "128 GB", price: 100 },
  { capacity: "256 GB", price: 100 },
];

const mockOnStorageChange = jest.fn();

describe("StorageButton", () => {
  it("renders storage options", () => {
    render(
      <StorageButton
        activeStorage={mockStorageOptions[0]}
        option={mockStorageOptions[0]}
        onStorageChange={mockOnStorageChange}
      />,
    );

    expect(screen.getByText("64 GB")).toBeInTheDocument();
  });

  it("calls onStorageChange when a storage option is clicked", () => {
    render(
      <StorageButton
        activeStorage={mockStorageOptions[0]}
        option={mockStorageOptions[1]}
        onStorageChange={mockOnStorageChange}
      />,
    );

    fireEvent.click(screen.getByText("128 GB"));
    expect(mockOnStorageChange).toHaveBeenCalledWith(mockStorageOptions[1]);
  });

  it("handles keyboard events", () => {
    render(
      <StorageButton
        activeStorage={mockStorageOptions[0]}
        option={mockStorageOptions[2]}
        onStorageChange={mockOnStorageChange}
      />,
    );

    const button = screen.getByText("256 GB");
    fireEvent.keyDown(button, { key: "Enter" });
    expect(mockOnStorageChange).toHaveBeenCalledWith(mockStorageOptions[2]);

    fireEvent.keyDown(button, { key: " " });
    expect(mockOnStorageChange).toHaveBeenCalledWith(mockStorageOptions[2]);
  });
});
