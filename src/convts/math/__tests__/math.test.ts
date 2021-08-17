import React from "react";
import { add, dot, multiply, subtract } from "../math";

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


describe("Add", () => {
  test("Add a 3,2 matrix and 1,2 together", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const b = [
      [1, 10],
    ];
    expect(
      add(a,b)
    ).toEqual([
      [2, 12],
      [4, 14],
      [6, 16],
    ]);

    expect(
      add(b,a)
    ).toEqual([
      [2, 12],
      [4, 14],
      [6, 16],
    ]);
  });

  test("Add matrixes of same dimention", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(
      add(a,a)
    ).toEqual([
      [2, 4],
      [6, 8],
      [10, 12],
    ]);
  })
});


describe("Subtract", () => {
  test("Subtract a 3,2 matrix and 1,2 together", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const b = [
      [1, 10],
    ];
    expect(
      subtract(a,b)
    ).toEqual([
      [0, -8],
      [2, -6],
      [4, -4],
    ]);

    expect(
      subtract(b,a)
    ).toEqual([
      [0, 8],
      [-2, 6],
      [-4, 4],
    ]);
  });

  test("Subtract matrixes of same dimention", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(
      subtract(a,a)
    ).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  })
});



describe("Multiply", () => {
  test("Multiply a 3,2 matrix and 1,2 together", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const b = [
      [1, 10],
    ];
    expect(
      multiply(a,b)
    ).toEqual([
      [1, 20],
      [3, 40],
      [5, 60],
    ]);

  });

  test("Subtract matrixes of same dimention", () => {
    const a = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(
      multiply(a,a)
    ).toEqual([
      [1, 4],
      [9, 16],
      [25, 36],
    ]);
  })
});


