import { test, expect } from "vitest";
import { sum } from "$lib/solve.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
