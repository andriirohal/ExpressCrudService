export function validateId(id: unknown): id is string {
  return typeof id === "string" && id.trim().length > 0;
};