import { Activation } from "../activations/activations";
import { multiply } from "../math/math";
import { NeuronListener } from "../recorder/NeuronListener";
import Layer from "./Layer";

class ActivationLayer implements Layer {
  activation;
  activationPrime;
  input: number[][] = [];
  output : number[][] = [];
  index: number;
  neuronListener: NeuronListener;
  constructor(index: number, activation: Activation, activationPrime: Activation, neuronListener: NeuronListener) {
    this.activation = activation;
    this.activationPrime = activationPrime;
    this.index = index;
    this.neuronListener = neuronListener;
  }

  name(): string {
    return "Activation"
  }

  getInputSize(): number | undefined {
    return undefined;
  }

  getOutputSize(): number | undefined {
    return undefined;
  }

  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    this.output = this.activation(input);
    if (this.neuronListener) {
      this.neuronListener.recordNeurons(this.index, this.output)
    }
    return this.output;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
      //console.log("Activation layer: outputError[",outputError,"], input[",this.input,"], activationPrime[" +this.activationPrime(this.input) + "], multiplied[" + multiply(this.activationPrime(this.input), outputError) + "]" )
    return multiply(this.activationPrime(this.input), outputError);
  }
}

export default ActivationLayer;
