import React from "react";
import Network from "../../convts/network/Network";
import Layer from "../../convts/layer/Layer";

const DisplayLayer = ({ layer }: { layer: Layer }) => {
  return (
    <div>
      <div
        className={
          "px-4 p-2 m-4 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-md flex items-center space-x-4"
        }
      >
        {layer.name()}{" "}
        {layer.getInputSize() && layer.getOutputSize()
          ? ` (${layer.getInputSize()}, ${layer.getOutputSize()})`
          : ""}
      </div>
    </div>
  );
};

const Layers = ({ network }: { network: Network }) => {
  return (
    <section>
      {network.layers.map((l, i) => (
        <DisplayLayer key={`layer_${i}`} layer={l} />
      ))}
    </section>
  );
};

const DisplayNetwork = ({ network }: { network: Network }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-2">Network architecture</h2>
      <Layers network={network} />
    </div>
  );
};

export default DisplayNetwork;
