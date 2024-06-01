import { render, screen } from "@testing-library/react";
import NotFound from "../../src/components/NotFound";
import { MemoryRouter } from "react-router-dom";

describe("NotFound", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/the page/i);
    const linkElement = screen.getByRole("link");
    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
