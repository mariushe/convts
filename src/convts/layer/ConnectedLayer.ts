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
    console.log("CONNECTION FORWARD", input)
    this.input = input;
    const t =  add(dot(input, this.weight), this.bias);
    return t;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
    console.log("CONNECTED LAYER")
    const inputError = dot(outputError, transpose(this.weight));
    console.log("WEIGHT ERROR", transpose(this.input), "|",outputError)
    const weightError = dot(transpose(this.input), outputError);
    console.log("weights[", this.weight,"], ","outputError[", outputError,"], inputError[",inputError,"], weightError[",weightError,"]");
    console.log("Weights before", this.weight, weightError, multiply(weightError, learningRate))
    this.weight = subtract(this.weight, multiply(weightError, learningRate));
    this.bias = subtract(this.bias, multiply(outputError, learningRate));
    console.log("Weights after", this.weight)

    return inputError;
  }
}

export default ConnectedLayer;
