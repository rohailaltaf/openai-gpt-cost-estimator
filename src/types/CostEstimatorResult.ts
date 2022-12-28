export interface CostEstimatorResultBase {
  promptTokens: number;
  totalTokens: number;
  totalCost: number;
  totalCostDisplay: string;
}

export interface CostEstimatorResultCompletion extends CostEstimatorResultBase {
  completionTokens: number;
}

export interface CostEstimatorResultEmbedding extends CostEstimatorResultBase {}

export type CostEstimatorResult =
  | CostEstimatorResultCompletion
  | CostEstimatorResultEmbedding;
