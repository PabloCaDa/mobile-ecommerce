import { render, screen, fireEvent } from "@testing-library/react";
import { StoragePicker } from "./StoragePicker";
import { IPhoneStorageOptions } from "@/types/phone";

const mockStorageOptions: IPhoneStorageOptions[] = [
  { capacity: "64GB", price: 699 },
  { capacity: "128GB", price: 799 },
  { capacity: "256GB", price: 899 },
];

const mockOnStorageChange = jest.fn();

describe("StoragePicker", () => {
  it("renders storage options correctly", () => {
    render(
      <StoragePicker
        storageOptions={mockStorageOptions}
        onStorageChange={mockOnStorageChange}
        activeStorage={mockStorageOptions[0]}
      />,
    );

    expect(
      screen.getByText("STORAGE ¿HOW MUCH SPACE DO YOU NEED?"),
    ).toBeInTheDocument();
    mockStorageOptions.forEach((option) => {
      expect(screen.getByText(option.capacity)).toBeInTheDocument();
    });
  });

  it("calls onStorageChange when a storage option is clicked", () => {
    render(
      <StoragePicker
        storageOptions={mockStorageOptions}
        onStorageChange={mockOnStorageChange}
        activeStorage={mockStorageOptions[0]}
      />,
    );

    const secondOption = screen.getByText(mockStorageOptions[1].capacity);
    fireEvent.click(secondOption);

    expect(mockOnStorageChange).toHaveBeenCalledWith(mockStorageOptions[1]);
  });
});
