import React from "react";

const Neuron = ({ probability }: { probability: number }) => {
  return (
    <div
      className={`flex justify-center items-center m-1 w-12 h-12 ${
        probability > 0.1 ? "bg-red-500" : "bg-gray-500"
      } bg-opacity-50 rounded-full border-red-700`}
    >
      {probability.toFixed(2)}
    </div>
  );
};

export default Neuron;
