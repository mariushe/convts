/**
 * Creates a 2 dim matrix of random weights to be
 * used as initial weights for layers.
 * @param d0 length of dim0
 * @param d1 length of dim1
 */
export const createRandomWeights = (dim0: number, dim1: number): number[][] => {
  return Array.from(Array(dim0).keys()).map((_) => {
    return Array.from(Array(dim1).keys()).map((_) => {
      return Math.random() - 0.5;
    });
  });
};
