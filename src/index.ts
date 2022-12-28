import { CostEstimatorConfig } from "./types/CostEstimatorConfig";
import { CostEstimatorResult } from "./types/CostEstimatorResult";
import { Operation } from "./types/Operation";
import { estimateCompletion } from "./estimateCompletion";
import { estimateEmbedding } from "./estimateEmbedding";

export const estimate = (config: CostEstimatorConfig): CostEstimatorResult => {
  switch (config.operation) {
    case Operation.COMPLETION:
      return estimateCompletion(config);
    case Operation.EMBEDDING:
      return estimateEmbedding(config);
    default:
      throw new Error(`Unsupported operation for config ${JSON.stringify(config)}`);
  }
};



export { Operation, CompletionModel, EmbeddingModel } from "./types";