abstract class Layer {
  abstract forwardPropagation(input: number[][]): number[][];
  abstract backPropagation(outputError: number[][], learningRate: number): number[][];
  abstract name(): string;
  abstract getInputSize(): number | undefined;
  abstract getOutputSize(): number | undefined;
}

export default Layer;
