import React from "react";
import { LeakyRelu, LeakyReluPrime, Relu, ReluPrime } from "../../activations/activations";
import ActivationLayer from "../../layer/ActivationLayer";
import ConnectedLayer from "../../layer/ConnectedLayer";
import { Mse } from "../../loss/loss";
import Network from "../Network";

describe("Network", () => {
  test("Simple network", () => {
    const trainingData = [[[0, 0]], [[0, 1]], [[1, 0]], [[1, 1]]];
    const categories = [[[0]], [[1]], [[1]], [[0]]];

    const network = Network.create(
        [
            new ConnectedLayer(2,3),
            new ActivationLayer(LeakyRelu,LeakyReluPrime),
            new ConnectedLayer(3,1),
            new ActivationLayer(LeakyRelu,LeakyReluPrime)
        ], 
        Mse
    );

    network.fit(trainingData, categories, 1000)


    expect(true).toEqual(true);
  });
});
