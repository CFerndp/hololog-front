export interface PaginationDTO<T> {
  items: T[];
  count: number;
}

export interface Pagination<T> {
  items: T[];
  count: number;
}

export const transformPaginationDTOToPagination = <T>(
  dto: PaginationDTO<T>,
  itemTransformFn: (item: T) => T
): Pagination<T> => {
  return {
    items: dto.items.map(itemTransformFn),
    count: dto.count,
  };
};
