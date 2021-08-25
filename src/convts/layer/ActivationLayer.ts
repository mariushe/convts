import { Activation } from "../activations/activations";
import { multiply } from "../math/math";
import Layer from "./Layer";

class ActivationLayer implements Layer {
  activation;
  activationPrime;
  input: number[][] = [];
  output : number[][] = [];
  constructor(activation: Activation, activationPrime: Activation) {
    this.activation = activation;
    this.activationPrime = activationPrime;
  }

  forwardPropagation(input: number[][]): number[][] {
    this.input = input;
    this.output = this.activation(input);
    return this.output;
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {
      //console.log("Activation layer: outputError[",outputError,"], input[",this.input,"], activationPrime[" +this.activationPrime(this.input) + "], multiplied[" + multiply(this.activationPrime(this.input), outputError) + "]" )
    return multiply(this.activationPrime(this.input), outputError);
  }
}

export default ActivationLayer;
