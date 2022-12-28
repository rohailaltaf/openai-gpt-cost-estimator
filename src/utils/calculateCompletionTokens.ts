export const calculateCompletionTokens = (
  maxTokens: number = 16,
  n: number = 1,
  bestOf: number = 1
): number => {
  if (n > bestOf) {
    throw new Error("n must be less than or equal to bestOf");
  }
  return Math.max(n, bestOf) * maxTokens;
};
