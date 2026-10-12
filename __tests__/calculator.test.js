import { divide } from "../src/calculator.js";

test("2 / 1 = 2", () => {
    expect(divide(2, 1)).toBe(2);
});

test("division by zero", () => {
    expect(() => divide(2, 0)).toThrow(RangeError);
});

test("first argument is string", () => {
    expect(() => divide("2", 1)).toThrow(TypeError);
});

test("second argument is string", () => {
    expect(() => divide(2, "1")).toThrow(TypeError);
});

test("NaN argument", () => {
    expect(() => divide(NaN, 1)).toThrow(TypeError);
});