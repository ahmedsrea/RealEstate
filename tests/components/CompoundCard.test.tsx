import { render, screen } from "@testing-library/react";
import CompoundCard from "../../src/components/CompoundCard";
import { MemoryRouter } from "react-router-dom";

describe("CompoundCard", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <CompoundCard
          title="Hello"
          dev_by="Ahmed"
          price={150000}
          images="img"
          slug="hello"
          showPage
        />
      </MemoryRouter>
    );

    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();

    const devName = screen.getByText("Ahmed");
    expect(devName).toBeInTheDocument();

    const price = screen.getByText("150,000");
    expect(price).toBeInTheDocument();

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
});
