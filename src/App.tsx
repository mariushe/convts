import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNetwork from "./components/network/DisplayNetwork";
import { createSimpleNetwork } from "./convts/network/networks";

function App() {
  const trainingData = [[[0, 0]], [[0, 1]], [[1, 0]], [[1, 1]]];
  const categories = [[[0]], [[1]], [[1]], [[0]]];

  const simpleNetwork = createSimpleNetwork();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <DisplayNetwork network={simpleNetwork} />
      </main>
    </div>
  );
}

export default App;
