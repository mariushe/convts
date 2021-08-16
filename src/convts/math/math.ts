export const dotOneValue = (input: number[][], weight: number): number[][] => {
  return input.map((i) => i.map((j) => j * weight));
};
// https://towardsdatascience.com/linear-algebra-basics-dot-product-and-matrix-multiplication-2a7624942810
export const dot = (a: number[][], b: number[][]): number[][] => {
  return a.map((a1, i1) => {
    return a.map((_, i2) => {
        return Array.from(Array(a1.length).keys()).reduce((acc, q) => {
            //console.log(`a[${i1}][${q}] * b[${q}][${i2}]`)
            return acc + (a[i1][q] * b[q][i2])
        }, 0)

    
      //return a[i1][i2] * b[i2][i1];
    });
  });
};

export const multiply = (a: number[][], b: number): number[][] => {
  return a.map((_, i) => a[i].map((_, j) => a[i][j] * b));
};

export const subtract = (a: number[][], b: number[][]): number[][] => {
  return a.map((_, i) => a[i].map((_, j) => a[i][j] * b[i][j]));
};

export const addToMatrix = (input: number[][], value: number): number[][] => {
  return input.map((i) => i.map((j) => j + value));
};
