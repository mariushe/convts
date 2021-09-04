import { LeakyRelu, LeakyReluPrime } from "../activations/activations";
import ActivationLayer from "../layer/ActivationLayer";
import ConnectedLayer from "../layer/ConnectedLayer";
import { Mse } from "../loss/loss";
import Network from "./Network";


export const createSimpleNetwork = () => {
    return Network.create(
        [
            new ConnectedLayer(2,3),
            new ActivationLayer(LeakyRelu,LeakyReluPrime),
            new ConnectedLayer(3,1),
            new ActivationLayer(LeakyRelu,LeakyReluPrime)
        ], 
        Mse
    );
}