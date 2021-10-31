import React, { useEffect, useState } from "react";
import {
  NeuronListener,
  NeuronResult,
} from "../../convts/recorder/NeuronListener";
import Neuron from "./Neuron";

const LayerSection = ({ neuron }: { neuron: NeuronResult }) => {
  return (
    <div className={"bg-gray-800 rounded-md max-w-xl m-2 p-5 w-full"}>
      <div className={"flex items-center"}>
          <div className={"flex-grow"}>
        <div className={"text-xl"}>{neuron.layerName}</div>
        <div className={"text opacity-70"}>Input size: {neuron.inputSize}</div>
        <div className={"text  opacity-70"}>Output size: {neuron.outputSize}</div>
              </div>
        <div  className={"flex justify-items-center flex-grow"}>
          {neuron.result[0].map((nn) => (
            <Neuron probability={nn} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NeuralRenderer = ({
  lastUpdate,
  neuronListener,
}: {
  lastUpdate: number;
  neuronListener: NeuronListener;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-2">
        Network visualization
      </h2>

      {Object.values(neuronListener.result).map((n) => (
        <LayerSection neuron={n} />
      ))}
    </div>
  );
};

export default NeuralRenderer;
