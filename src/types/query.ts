export interface Query {
  isLoading: boolean;
  error: any;
}

export interface PaginatedQuery extends Query {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}
