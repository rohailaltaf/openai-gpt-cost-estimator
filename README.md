# openai-gpt-cost-estimator

Easily calculate the estimated cost of various operations for [OpenAI's GPT API](https://openai.com)

**Note:** Currently this supports the `completion` and `embedding` commands. More to be added soon. Pricing is accurate as of 2022/12/28. This is _NOT_ an official package by OpenAI.

# Usage

## Install

```bash
yarn add openai-gpt-cost-estimator
```

OR

```bash
npm i openai-gpt-cost-estimator
```

## Example 1: Completion

```ts
import { estimate, Operation, CompletionModel } from 'openai-gpt-cost-estimator'

const prompt = "The quick brown fox jumps over the lazy dog"
const config = {
  operation: Operation.COMPLETION,
  model: CompletionModel.DAVINCI,
  prompt,
  n: 3,
  bestOf: 5,
  maxTokens: 32
}
const result = estimate(config)

console.log(result)

/*
{
  promptTokens: 9,
  completionTokens: 160,
  totalTokens: 169,
  totalCost: 0.0034,
  totalCostDisplay: '$0.0034'
}
*/
```
## Example 2: Embedding

```ts
import { estimate, Operation, EmbeddingModel } from 'openai-gpt-cost-estimator'

const prompt = "[SOME LONG PROMPT OF 8000 TOKENS]"
const config = {
  operation: Operation.EMBEDDING,
  model: EmbeddingModel.ADA_V2,
  prompt
}
const result = estimate(config)

console.log(result)

/*
{
  promptTokens: 8000,
  totalTokens: 8000,
  totalCost: 0.0032,
  totalCostDisplay: '$0.0032'
}
*/
```


[![Twitter Follow](https://img.shields.io/twitter/follow/rohail_altaf.svg?style=social)](https://twitter.com/rohail_altaf) 