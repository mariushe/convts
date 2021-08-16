import React from 'react';

describe("Start of convts", () => {
    test('First init', () => {
        expect(2).toEqual(2);
    });

    /**
    https://towardsdatascience.com/math-neural-network-from-scratch-in-python-d6da9f29ce65
    https://medium.com/swlh/how-to-build-a-neural-network-from-scratch-b712d59ae641
    https://towardsdatascience.com/how-to-build-your-own-neural-network-from-scratch-in-python-68998a08e4f6
    https://heartbeat.fritz.ai/building-a-neural-network-from-scratch-using-python-part-2-testing-the-network-c1f0c1c9cbb0
     * Steps
     * 1. Feed input data
     * 2. Data flows through layers (forward propagation)
     * 3. When we got an output -- calculate error
     * 4. Finally we can adjust a given parameter (weight or bias) by subtracting the derivative of the error with respect to the parameter itself.
     * 5. We iterate through that process.
     */
})