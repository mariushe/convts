import React from "react";
import { dot } from "../math";

describe("Dot product", () => {
  test("Dot products of same size", () => {
    expect(
      dot(
        [
          [4, 2],
          [0, 3],
        ],
        [
          [4, 0],
          [1, 4],
        ]
      )
    ).toEqual([
      [18, 8],
      [3, 12],
    ]);
  });

  test("Dot products of 3x2 and 2x3 size", () => {
    expect(
      dot(
        [
          [2, 2],
          [0, 3],
          [0,4]
        ],
        [
          [2, 1,2],
          [3, 2,4],
        ]
      )
    ).toEqual([
      [10, 6, 12],
      [9,6, 12],
      [12,8, 16],
    ]);
  })
});
