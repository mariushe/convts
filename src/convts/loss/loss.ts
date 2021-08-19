import { divide, multiply, subtract } from "../math/math";

export type LossFunction = (expected: number[][], predicted: number[][]) => number;
export type LossPrime = (expected: number[][], predicted: number[][]) => number[][];

export interface Loss {
    loss: LossFunction;
    lossPrime: LossPrime;
}

export const meanSquaredError: LossFunction = (
  expected: number[][],
  predicted: number[][]
) => {
  let count = 0;
  const value = subtract(expected, predicted)
    .map((x1) => {
      return x1.map((x2) => {
        count += 1;
        return Math.pow(x2, 2);
      });
    })
    .reduce((acc, v) => {
      return (
        acc +
        v.reduce((acc2, v2) => {
          return acc2 + v2;
        }, 0)
      );
    }, 0);
  return value / count;
};

const countElements = (n: number[][]) => {
  return n.reduce((acc, v) => acc + v.length, 0);
};

export const meanSquaredErrorPrime: LossPrime = (
  expected: number[][],
  predicted: number[][]
) => {
  let count = countElements(expected);
  return multiply(divide(subtract(predicted, expected), count), 2);
};

export const Mse: Loss = {
    loss: meanSquaredError,
    lossPrime: meanSquaredErrorPrime,
}
