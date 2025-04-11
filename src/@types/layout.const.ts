export const MAX_GRID_COLUMNS = 4;

export const getGridClass = (columns: number) =>
  `grid grid-cols-1 sm:grid-cols-${Math.min(columns, MAX_GRID_COLUMNS)} gap-8`;