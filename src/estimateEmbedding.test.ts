import { CompletionModel, EmbeddingModel } from "./types/Model";
import { Operation } from "./types/Operation";
import fs from "fs";
import path from "path";
import { CostEstimatorConfig } from "./types/CostEstimatorConfig";
import { estimateEmbedding } from "./estimateEmbedding";


describe("estimateEmbedding", () => {
  it("ada embedding prompt: 8116", () => {
    const file = path.join(__dirname, "./", "test/fixtures/8116-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: EmbeddingModel.ADA_V2,
      operation: Operation.EMBEDDING,
      prompt,
    };
    const result = estimateEmbedding(config);
    expect(result).toEqual({
      promptTokens: 8116,
      totalTokens: 8116,
      totalCost: 0.0032,
      totalCostDisplay: "$0.0032",
    });
  });
});
