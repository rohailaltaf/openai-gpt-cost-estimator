import { CompletionModel, EmbeddingModel } from "./Model";
import { Operation } from "./Operation";

interface CostEstimatorConfigBase {
  model: CompletionModel | EmbeddingModel;
  operation: Operation;
  prompt: string;
}

export interface CompletionCostEstimatorConfig extends CostEstimatorConfigBase {
  n?: number;
  bestOf?: number;
  maxTokens?: number;
}

export interface EmbeddingCostEstimatorConfig extends CostEstimatorConfigBase {
}

export type CostEstimatorConfig =
  | CompletionCostEstimatorConfig
  | EmbeddingCostEstimatorConfig;
