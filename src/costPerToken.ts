import { CostPerToken } from "./types/CostPerToken";
import { CompletionModel, EmbeddingModel } from "./types/Model";

export const COST_PER_TOKEN_COMPLETION: CostPerToken<CompletionModel> = {
  [CompletionModel.ADA]: 0.0004 / 1000,
  [CompletionModel.BABBAGE]: 0.0005 / 1000,
  [CompletionModel.CURIE]: 0.002 / 1000,
  [CompletionModel.DAVINCI]: 0.02 / 1000,
};

export const COST_PER_TOKEN_EMBEDDING: CostPerToken<EmbeddingModel> = {
  [EmbeddingModel.ADA_V2]: 0.0004 / 1000,
};
