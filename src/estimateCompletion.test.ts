import { CompletionModel } from "./types/Model";
import { Operation } from "./types/Operation";
import fs from "fs";
import path from "path";
import { estimateCompletion } from "./estimateCompletion";
import { CostEstimatorConfig } from "./types/CostEstimatorConfig";

describe("estimateCompletion", () => {
  it("davinci completion prompt: 482, n: 1, bestOf: 1, maxTokens: 100", () => {
    const file = path.join(__dirname, "./", "test/fixtures/482-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.DAVINCI,
      operation: Operation.COMPLETION,
      prompt,
      n: 1,
      bestOf: 1,
      maxTokens: 100,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 482,
      completionTokens: 100,
      totalTokens: 582,
      totalCost: 0.0116,
      totalCostDisplay: "$0.0116",
    });
  });

  it("davinci completion prompt: 3113, n: 1, bestOf: 2, maxTokens: 500", () => {
    const file = path.join(__dirname, "./", "test/fixtures/3113-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.DAVINCI,
      operation: Operation.COMPLETION,
      prompt,
      n: 1,
      bestOf: 2,
      maxTokens: 500,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 3113,
      completionTokens: 1000,
      totalTokens: 4113,
      totalCost: 0.0823,
      totalCostDisplay: "$0.0823",
    });
  });

  it("davinci completion prompt: 3113, n: 2, bestOf: 5, maxTokens: 500", () => {
    const file = path.join(__dirname, "./", "test/fixtures/3113-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.DAVINCI,
      operation: Operation.COMPLETION,
      prompt,
      n: 2,
      bestOf: 5,
      maxTokens: 500,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 3113,
      completionTokens: 2500,
      totalTokens: 5613,
      totalCost: 0.1123,
      totalCostDisplay: "$0.1123",
    });
  });

  it("curie completion prompt: 3113, n: 2, bestOf: 5, maxTokens: 500", () => {
    const file = path.join(__dirname, "./", "test/fixtures/3113-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.CURIE,
      operation: Operation.COMPLETION,
      prompt,
      n: 2,
      bestOf: 5,
      maxTokens: 500,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 3113,
      completionTokens: 2500,
      totalTokens: 5613,
      totalCost: 0.0112,
      totalCostDisplay: "$0.0112",
    });
  });

  it("babbage completion prompt: 3113, n: 2, bestOf: 5, maxTokens: 1000", () => {
    const file = path.join(__dirname, "./", "test/fixtures/3113-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.BABBAGE,
      operation: Operation.COMPLETION,
      prompt,
      n: 2,
      bestOf: 5,
      maxTokens: 1000,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 3113,
      completionTokens: 5000,
      totalTokens: 8113,
      totalCost: 0.0041,
      totalCostDisplay: "$0.0041",
    });
  });

  it("ada completion prompt: 3113, n: 2, bestOf: 10, maxTokens: 1000", () => {
    const file = path.join(__dirname, "./", "test/fixtures/3113-tokens.txt");
    const prompt = fs.readFileSync(file, "utf8");
    const config: CostEstimatorConfig = {
      model: CompletionModel.ADA,
      operation: Operation.COMPLETION,
      prompt,
      n: 2,
      bestOf: 10,
      maxTokens: 1000,
    };
    const result = estimateCompletion(config);
    expect(result).toEqual({
      promptTokens: 3113,
      completionTokens: 10000,
      totalTokens: 13113,
      totalCost: 0.0052,
      totalCostDisplay: "$0.0052",
    });
  });
});
