export function removeDuplicatesById<T extends { id: string }>(
  items: T[]
): T[] {
  const seen = new Set();
  return items.filter((item) => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
}
