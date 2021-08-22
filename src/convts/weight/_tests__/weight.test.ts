import React from 'react';
import { createRandomWeights } from '../weight';

describe("Create initial weights", () => {
    test('First init', () => {
        const weights = createRandomWeights(2,3)
        expect(weights.length).toEqual(2);
        expect(weights[0].length).toEqual(3);
    });

})