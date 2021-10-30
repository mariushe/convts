import { LeakyRelu, LeakyReluPrime } from "../activations/activations";
import ActivationLayer from "../layer/ActivationLayer";
import ConnectedLayer from "../layer/ConnectedLayer";
import { Mse } from "../loss/loss";
import { NeuronListener } from "../recorder/NeuronListener";
import Network from "./Network";


export const createSimpleNetwork = (neuronListener: NeuronListener) => {
    return Network.create(
        [
            new ConnectedLayer(1, 2,3, neuronListener),
            new ActivationLayer(2, LeakyRelu,LeakyReluPrime, neuronListener),
            new ConnectedLayer(3, 3,1, neuronListener),
            new ActivationLayer(4, LeakyRelu,LeakyReluPrime, neuronListener)
        ], 
        Mse
    );
}