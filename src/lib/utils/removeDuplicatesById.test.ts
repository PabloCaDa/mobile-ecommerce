import { removeDuplicatesById } from "./removeDuplicatesById";

describe("removeDuplicatesById", () => {
  it("should remove duplicate items by id", () => {
    const items = [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
      { id: "1", name: "Item 1 Duplicate" },
    ];

    const result = removeDuplicatesById(items);

    expect(result).toEqual([
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
    ]);
  });

  it("should return an empty array if input is empty", () => {
    const items: { id: string; name: string }[] = [];

    const result = removeDuplicatesById(items);

    expect(result).toEqual([]);
  });

  it("should return the same array if there are no duplicates", () => {
    const items = [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
    ];

    const result = removeDuplicatesById(items);

    expect(result).toEqual(items);
  });
});
