import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNetwork from "./components/network/DisplayNetwork";
import { createSimpleNetwork } from "./convts/network/networks";
import Network from "./convts/network/Network";

function App() {
  const [network, setNetwork] = useState<Network>(createSimpleNetwork());
  const [lastEpochError, setLastEpochError] = useState<number | undefined>(undefined);
  const trainingData = [[[0, 0]], [[0, 1]], [[1, 0]], [[1, 1]]];
  const categories = [[[0]], [[1]], [[1]], [[0]]];

  network.fit(trainingData, categories, 1000);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <DisplayNetwork network={network} />
        <button 
        onClick={() => {
          setLastEpochError(network.fit(trainingData, categories, 1000));
          
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Create and train
        </button>
        {lastEpochError && <p>Error after last epoch: {lastEpochError}</p>}
        {lastEpochError && <p>Testing 0,0: {network.predict([[0,0]])}</p>}
        {lastEpochError && <p>Testing 0,1: {network.predict([[0,1]])}</p>}
        {lastEpochError && <p>Testing 1,1: {network.predict([[1,1]])}</p>}
        {lastEpochError && <p>Testing 0,1: {network.predict([[1,0]])}</p>}
        
      </main>
    </div>
  );
}

export default App;
