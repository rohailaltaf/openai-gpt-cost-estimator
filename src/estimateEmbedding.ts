import { encode } from "gpt-3-encoder";
import { COST_PER_TOKEN_EMBEDDING } from "./costPerToken";
import { EmbeddingModel } from "./types";
import { EmbeddingCostEstimatorConfig } from "./types/CostEstimatorConfig";
import { CostEstimatorResultEmbedding } from "./types/CostEstimatorResult";

export const estimateEmbedding = (
  config: EmbeddingCostEstimatorConfig
): CostEstimatorResultEmbedding => {
  const { prompt, model } = config;
  const promptTokens = encode(prompt).length;
  const totalCost = parseFloat(
    (promptTokens * COST_PER_TOKEN_EMBEDDING[model as EmbeddingModel]).toFixed(4)
  );

  return {
    promptTokens,
    totalTokens: promptTokens,
    totalCost,
    totalCostDisplay: totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }),
  };
};
