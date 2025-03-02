export interface Query {
  isLoading: boolean;
  error: Error | null;
}

export interface PaginatedQuery extends Query {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}
