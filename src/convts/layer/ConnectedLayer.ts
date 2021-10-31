import { logger } from "../log/Logger";
import { add, dot, multiply, subtract, transpose } from "../math/math";
import { NeuronListener, NeuronResult } from "../recorder/NeuronListener";
import { createRandomWeights } from "../weight/weight";
import Layer from "./Layer";

class ConnectedLayer implements Layer {
  weight: number[][];
  bias: number[][];
  input: number[][] = [];
  inputSize: number;
  outputSize: number;
  index: number;
  neuronListener?: NeuronListener
  constructor(index: number, inputSize: number, outputSize: number, neuronListener?: NeuronListener) {
    this.index = index;
    this.inputSize = inputSize;
    this.outputSize = outputSize;
    this.weight = createRandomWeights(inputSize, outputSize);
    this.bias = createRandomWeights(1, outputSize);
    this.neuronListener = neuronListener
  }

  getInputSize(): number {
    return this.inputSize;
  }

  getOutputSize(): number {
    return this.outputSize;
  }

  name(): string {
    return "Connected";
  }

  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    const t = add(dot(input, this.weight), this.bias);
    if (this.neuronListener) {
      this.neuronListener.recordNeurons(this.index, {layerName: "Connected", result: t, inputSize: this.inputSize, outputSize: this.outputSize}  as NeuronResult)
    }
    return t;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
    const inputError = dot(outputError, transpose(this.weight));
    const weightError = dot(transpose(this.input), outputError);
    //console.log("CONNECTED LAYER - weights[", this.weight,"], ","outputError[", outputError,"], inputError[",inputError,"], weightError[",weightError,"]");
    this.weight = subtract(this.weight, multiply(weightError, learningRate));
    this.bias = subtract(this.bias, multiply(outputError, learningRate));

    return inputError;
  }
}

export default ConnectedLayer;
