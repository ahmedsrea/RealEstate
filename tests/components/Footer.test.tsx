import { screen, render } from "@testing-library/react";
import Footer from "../../src/components/Footer";

describe("Footer", () => {
  it("should render All Rights Reserved 2021 ©", () => {
    render(<Footer />);

    const footerText = screen.getByText("All Rights Reserved 2021 ©");
    expect(footerText).toBeInTheDocument();
  });
});
