abstract class Layer {
  abstract forwardPropagation(input: number[][]): number[][];
  abstract backPropagation(outputError: number[][], learningRate: number): number[][];
}

export default Layer;
