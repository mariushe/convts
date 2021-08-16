import { addToMatrix, dot, multiply, subtract } from "../math/math";
import Layer from "./Layer";

class ConnectedLayer implements Layer {
  weight = [
    [1, 0],
    [0, 1],
  ];
  bias = [1,1];
  input: number[][] = [];
  inputSize: number;
  outputSize: number;
  constructor(inputSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.outputSize = outputSize;
  }
  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    return addToMatrix(dot(input, this.weight), this.bias);
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
    const inputError = dot(outputError, this.weight);
    const weightError = dot(this.input, outputError);

    this.weight = subtract(this.weight, multiply(weightError, learningRate));
    this.bias = subtract(this.bias, multiply(outputError, learningRate));

    return inputError;
  }
}

export default ConnectedLayer;
