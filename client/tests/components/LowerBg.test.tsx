import { render, screen } from "@testing-library/react";
import LowerBg from "../../src/components/LowerBg";

describe("LowerBg", () => {
  it("should render correctly", () => {
    render(<LowerBg />);

    const svgElement = screen.getByTestId("lower-bg-svg");
    expect(svgElement).toBeInTheDocument();
  });
});
