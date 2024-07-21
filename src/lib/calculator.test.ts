import { expect, test } from "vitest";
import { Evaluator } from "$lib/calculator";

const evaluator = new Evaluator();
const cases: Array<[string, number]> = [
    // Errors
    ["", NaN],
    ["a", NaN],
    ["(", NaN],
    [")", NaN],
    ["+", NaN],
    ["-", NaN],
    ["*", NaN],
    ["%", NaN],
    ["/", NaN],
    [".", NaN],
    ["a1", NaN],
    ["1a", NaN],
    ["()", NaN],
    ["2**", NaN],
    ["2 3", NaN],
    ["2//", NaN],
    ["2..", NaN],
    ["..2", NaN],
    ["2..2", NaN],
    ["2+(3", NaN],
    ["(2+3", NaN],
    ["2+3)", NaN],
    ["2.2.2", NaN],
    ["(2+3))", NaN],

    // Arithmetics
    ["69", 69],
    ["-69", -69],
    ["-(69)", -69],
    ["(-69)", -69],
    ["23 * 3", 69],
    ["34 + 35", 69],
    ["2%%", 0.0002],
    ["-69%", -0.69],
    ["138 - 69", 69],
    ["1/0", Infinity],
    ["100 - 31%", 69],
    ["(-69%)", -0.69],
    ["6.9 + 900%", 69],
    ["476.1 / 6.9", 69],
    ["6.9 * 1000%", 69],
    ["100 + (100 + 10%)", 210],

    ["100 + 10%", 110],
    ["100 + (100 + 10%)", 210],
    ["100 + 10% + 10%", 121],
    ["100 + (100 + 10%) + 10%", 231],
    ["100 + (100 + 10% + 10%)", 221],
    ["100 + ((100 * 2) + 10% + (4/2))", 322],

    // New
    ["2 ^ 2", 4],
    ["(2) ^ (2)", 4],
    ["2 ^ 3 ^ 2", 512],
    ["(2 ^ 3) ^ 2", 64],
];

test.each(cases)('evaluator.evaluate("%s") => %d', (input: string, expected: number): void => {
    expect(evaluator.evaluate(input)).toBe(expected);
});
