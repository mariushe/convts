import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNetwork from "./components/network/DisplayNetwork";
import { createSimpleNetwork } from "./convts/network/networks";
import Network from "./convts/network/Network";
import { NeuronListener } from "./convts/recorder/NeuronListener";
import Neuron from "./components/network/Neuron";
import NeuralRenderer from "./components/network/NeuralRenderer";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [neuronListener, setNeuronListener] = useState<NeuronListener>(
    new NeuronListener((i, ii) => console.log(ii))
  );
  const [network, setNetwork] = useState<Network>(
    createSimpleNetwork(neuronListener)
  );
  const [lastEpochError, setLastEpochError] = useState<number | undefined>(
    undefined
  );
  const trainingData = [[[0, 0]], [[0, 1]], [[1, 0]], [[1, 1]]];
  const categories = [[[0]], [[1]], [[1]], [[0]]];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className={"p-10"}>
        {!lastEpochError && (
          <div className={"flex flex-col items-center"}>
            <DisplayNetwork network={network} />
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  setLastEpochError(
                    network.fit(trainingData, categories, 1000)
                  );
                  neuronListener.startRecording();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Train network
              </button>
            </div>
          </div>
        )}
        {lastEpochError && <p>Error after last epoch: {lastEpochError}</p>}
        {lastEpochError && (
          <p
            onClick={() => {
              network.predict([[1, 0]]);
              setLastUpdate(neuronListener.lastUpdate);
            }}
          >
            Testing 1,0
          </p>
        )}
        {lastEpochError && (
          <p
            onClick={() => {
              network.predict([[0, 0]]);
              setLastUpdate(neuronListener.lastUpdate);
            }}
          >
            Testing 0,0
          </p>
        )}
        {lastEpochError && (
          <p
            onClick={() => {
              network.predict([[0, 1]]);
              setLastUpdate(neuronListener.lastUpdate);
            }}
          >
            Testing 0,1
          </p>
        )}
        {lastEpochError && (
          <p
            onClick={() => {
              network.predict([[1, 1]]);
              setLastUpdate(neuronListener.lastUpdate);
            }}
          >
            Testing 1,1
          </p>
        )}
        <NeuralRenderer
          lastUpdate={lastUpdate}
          neuronListener={neuronListener}
        />
        {/* {lastEpochError && <p>Testing 0,1: {network.predict([[0,1]])}</p>}
        {lastEpochError && <p>Testing 1,1: {network.predict([[1,1]])}</p>}
        {lastEpochError && <p>Testing 0,1: {network.predict([[1,0]])}</p>} */}
      </main>
    </div>
  );
}

export default App;
