export const dotOneValue = (input: number[][], weight: number): number[][] => {
  return input.map((i) => i.map((j) => j * weight));
};

export const dot = (input: number[][], weight: number[][]): number[][] => {
    return input.map((_, i) => input[i].map((_, j) => input[i][j] * weight[i][j]));
  };

export const addToMatrix = (input: number[][], value: number): number[][] => {
  return input.map((i) => i.map((j) => j + value));
};
