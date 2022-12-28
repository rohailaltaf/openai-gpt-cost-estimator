import { encode } from "gpt-3-encoder";
import { COST_PER_TOKEN_COMPLETION } from "./costPerToken";
import { CompletionModel } from "./types";
import { CompletionCostEstimatorConfig } from "./types/CostEstimatorConfig";
import { CostEstimatorResultCompletion } from "./types/CostEstimatorResult";
import { calculateCompletionTokens } from "./utils/calculateCompletionTokens";

export const estimateCompletion = (
  config: CompletionCostEstimatorConfig
): CostEstimatorResultCompletion => {
  const { model, prompt, n = 1, bestOf = 1, maxTokens = 16 } = config;

  const promptTokens = encode(prompt).length;
  const completionTokens = calculateCompletionTokens(maxTokens, n, bestOf);
  const totalTokens = promptTokens + completionTokens;
  const totalCost = parseFloat(
    (totalTokens * COST_PER_TOKEN_COMPLETION[model as CompletionModel]).toFixed(4)
  );

  return {
    promptTokens,
    completionTokens,
    totalTokens,
    totalCost,
    totalCostDisplay: totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }),
  };
};
