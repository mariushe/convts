import { Activation, ActivationPrime } from "../activations/activations";
import { multiply } from "../math/math";
import Layer from "./Layer";

class ActivationLayer implements Layer {
  activation;
  activationPrime;
  input: number[][] = [];
  output : number[][] = [];
  constructor(activation: Activation, activationPrime: ActivationPrime) {
    this.activation = activation;
    this.activationPrime = activationPrime;
  }

  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    this.output = this.activation(input);
    return this.output;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
    
    return multiply(this.activationPrime(this.input), this.output);
  }
}

export default ActivationLayer;
