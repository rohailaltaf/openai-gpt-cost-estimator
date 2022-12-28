import { estimate } from ".";

describe("estimate", () => {
  it("should throw an error if the operation is not supported", () => {
    const config = {
      operation: "unsupported",
    };

    // @ts-ignore
    expect(() => estimate(config)).toThrowError(
      'Unsupported operation for config {"operation":"unsupported"}'
    );
  });
});
