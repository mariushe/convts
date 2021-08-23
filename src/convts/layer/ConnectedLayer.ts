import { add, dot, multiply, subtract, transpose } from "../math/math";
import { createRandomWeights } from "../weight/weight";
import Layer from "./Layer";

class ConnectedLayer implements Layer {
  weight: number[][];
  bias: number[][];
  input: number[][] = [];
  inputSize: number;
  outputSize: number;
  constructor(inputSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.outputSize = outputSize;
    this.weight = createRandomWeights(inputSize, outputSize);
    this.bias = createRandomWeights(1, outputSize);
  }
  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    const t =  add(dot(input, this.weight), this.bias);
    return t;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
    const inputError = dot(outputError, transpose(this.weight));
    const weightError = dot(transpose(this.input), outputError);
    console.log("CONNECTED LAYER - weights[", this.weight,"], ","outputError[", outputError,"], inputError[",inputError,"], weightError[",weightError,"]");
    this.weight = subtract(this.weight, multiply(weightError, learningRate));
    this.bias = subtract(this.bias, multiply(outputError, learningRate));
    
    return inputError;
  }
}

export default ConnectedLayer;
