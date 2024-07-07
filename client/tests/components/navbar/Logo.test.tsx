import { render, screen } from "@testing-library/react";
import Logo from "../../../src/components/navbar/Logo";
import { MemoryRouter } from "react-router-dom";

describe("Logo", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    // const imageElement = screen.getAllByAltText("Logo");
    // expect(imageElement).toHaveAttribute("src");
  });
});
