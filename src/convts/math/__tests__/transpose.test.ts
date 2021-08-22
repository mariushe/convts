import React from "react";
import { transpose } from "../math";

test("Transpose array", () => {
  expect(
    transpose([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  ).toEqual([
    [1, 3, 5],
    [2, 4, 6],
  ]);
});
