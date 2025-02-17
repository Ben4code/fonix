/** Constant - Sets immutable values to use in codebase. */
export const DefaultPageSize = {
  USERS: 10,
  ORDERS: 5,
} as const satisfies Record<string, number>;
