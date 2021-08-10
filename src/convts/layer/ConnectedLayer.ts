import { addToMatrix, dot } from "../math/math";
import Layer from "./Layer";

class ConnectedLayer implements Layer {
  weight = [[1,0],[0,1]];
  bias = 1;
  forwardPropagation(input: number[][]): number[][] {
    return addToMatrix(dot(input, this.weight), this.bias);
  }
  backPropagation(outputError: number[][], learningRate: number): number[][] {

    throw new Error("Method not implemented.");
  }
}

export default ConnectedLayer;
