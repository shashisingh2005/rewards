import { calculatePoints } from "../utils/calculateRewards";
import { describe, it, expect } from "vitest";

describe("calculatePoints", () => {
  it("returns 0 for <= 50", () => {
    expect(calculatePoints(50)).toBe(0);
  });
  it("returns correct for 75", () => {
    expect(calculatePoints(75)).toBe(25);
  });
  it("returns correct for 120", () => {
    expect(calculatePoints(120)).toBe(90);
  });
});
