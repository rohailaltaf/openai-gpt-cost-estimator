import { calculateCompletionTokens } from "./calculateCompletionTokens";

describe("calculateCompletionTokens", () => {
  it("should throw an error if n is greater than bestOf", () => {
    expect(() => calculateCompletionTokens(16, 2, 1)).toThrowError(
      "n must be less than or equal to bestOf"
    );
  });

  it("should return the maxTokens if n is less than or equal to bestOf", () => {
    expect(calculateCompletionTokens(7, 1, 1)).toEqual(7);
    expect(calculateCompletionTokens(7, 5, 6)).toEqual(42);
    expect(calculateCompletionTokens(7, 6, 6)).toEqual(42);
    expect(calculateCompletionTokens(7, 5, 5)).toEqual(35);
  });
});
