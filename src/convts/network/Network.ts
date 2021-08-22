import React from "react";
import Layer from "../layer/Layer";
import { Loss } from "../loss/loss";

class Network {
  layers: Layer[];
  loss: Loss;
  learningRate: number = 0.1;
  private constructor(layers: Layer[], loss: Loss) {
    this.layers = layers;
    this.loss = loss;
  }

  public static create(layers: Layer[], loss: Loss): Network {
    return new Network(layers, loss);
  }

  public fit(
    trainingData: number[][][],
    categories: number[][][],
    epochs: number
  ) {
    for (let epoch = 1; epoch <= epochs; epoch++) {
      const err = trainingData
        .map((x, i) => {
          const output = this.forwardPropagate(x);
          console.log("Expected", categories[i], "Predicted", output)
          this.backPropagate(categories[i], output);
          return this.loss.loss(categories[i], output);
        })
        .reduce((acc, v) => acc + v, 0);

      console.log(
        `Epoch ${epoch}/${epochs} error=${err / trainingData.length}`
      );
    }
  }

  private backPropagate(expected: number[][], predicted: number[][]) {
    let error = this.loss.lossPrime(expected, predicted);
    for (var i = this.layers.length - 1; i >= 0; i--) {
      error = this.layers[i].backPropagation(error, this.learningRate);
    }
  }

  private forwardPropagate(data: number[][]) {
    return this.layers.reduce((output, layer) => {
      return layer.forwardPropagation(output);
    }, data);
  }
}

export default Network;
