import { render, screen } from "@testing-library/react";
import RewardsTable from "../components/RewardsTable";
import { describe, it, expect } from "vitest";

describe("RewardsTable", () => {
  it("renders no data message", () => {
    render(<RewardsTable rewards={{}} months={["Aug", "Sep", "Oct"]} />);
    expect(screen.getByText(/No rewards data/i)).toBeInTheDocument();
  });

  it("renders customer rewards", () => {
    const rewards = { Shashi: { months: { Aug: 100, Sep: 200 }, total: 300 } };
    render(<RewardsTable rewards={rewards} months={["Aug", "Sep"]} />);
    expect(screen.getByText("Shashi")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
    expect(screen.getByText("300")).toBeInTheDocument();
  });
});
