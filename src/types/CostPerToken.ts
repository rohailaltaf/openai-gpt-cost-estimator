import { CompletionModel, EmbeddingModel } from "./Model";

export type CostPerToken<T extends CompletionModel | EmbeddingModel> = {
  [key in T]: number;
};
