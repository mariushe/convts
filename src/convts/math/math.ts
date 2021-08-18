
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

export const multiply = (a: number[][], b: number | number[][]): number[][] => {
  if (typeof b === 'number') {
    return a.map((_, i) => a[i].map((_, j) => a[i][j] * b));
  }
  if (a.length === b.length ) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] * b[i][j]
    }))
  } else if (a.length === 1) {
    return b.map((_,i) => b[0].map((_, j) => {
      return a[0][j] * b[i][j]
    }))
  } else if (b.length === 1) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] * b[0][j]
    }))
  }

  throw Error(`Dimentions didn't match. a=${a} b=${b}`)

};

export const divide = (a: number[][], b: number | number[][]): number[][] => {
  if (typeof b === 'number') {
    return a.map((_, i) => a[i].map((_, j) => a[i][j] / b));
  }
  if (a.length === b.length ) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] / b[i][j]
    }))
  } else if (a.length === 1) {
    return b.map((_,i) => b[0].map((_, j) => {
      return a[0][j] / b[i][j]
    }))
  } else if (b.length === 1) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] / b[0][j]
    }))
  }

  throw Error(`Dimentions didn't match. a=${a} b=${b}`)

};


export const add = (a: number[][], b: number[][]): number[][] => {
  if (a.length === b.length ) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] + b[i][j]
    }))
  } else if (a.length === 1) {
    return b.map((_,i) => b[0].map((_, j) => {
      return a[0][j] + b[i][j]
    }))
  } else if (b.length === 1) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] + b[0][j]
    }))
  }

  throw Error(`Dimentions didn't match. a=${a} b=${b}`)

};

export const subtract = (a: number[][], b: number[][]): number[][] => {
  if (a.length === b.length ) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] - b[i][j]
    }))
  } else if (a.length === 1) {
    return b.map((_,i) => b[0].map((_, j) => {
      return a[0][j] - b[i][j]
    }))
  } else if (b.length === 1) {
    return a.map((_,i) => a[0].map((_, j) => {
      return a[i][j] - b[0][j]
    }))
  }

  throw Error(`Dimentions didn't match. a=${a} b=${b}`)

};
