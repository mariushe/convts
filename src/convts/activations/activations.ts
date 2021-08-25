
export type Activation = (input: number[][]) => number[][];

export const Relu: Activation = (input: number[][]) => {
    return input.map((i1) => i1.map((i2) => {
        return i2 > 0 ? i2 : 0;
    }))
}

export const ReluPrime: Activation = (input: number[][]) => {
    return input.map((i1) => i1.map((i2) => {
        return i2 > 0 ? 1 : 0;
    }))
}

export const LeakyRelu: Activation = (input: number[][]) => {
    return input.map((i1) => i1.map((i2) => {
        return i2 > 0 ? i2 : i2 * 0.01;
    }))
}

export const LeakyReluPrime: Activation = (input: number[][]) => {
    return input.map((i1) => i1.map((i2) => {
        return i2 > 0 ? 1 : 0.01;
    }))
}