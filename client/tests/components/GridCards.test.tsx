import { render } from "@testing-library/react";
import GridCards from "../../src/components/GridCards";
import { MemoryRouter } from "react-router-dom";

const sampleProps = {
  title: "New Property",
  images: "image1.jpg,image2.jpg",
  price: 1000000,
  unite_type: "New Type",
  bedrooms: 3,
  bathrooms: 2,
  unite_size: 240,
  location: "Location",
  slug: "new-property",
};

test("GridCards renders with given props", () => {
  const { getByText } = render(
    <MemoryRouter>
      <GridCards {...sampleProps} />
    </MemoryRouter>
  );
  const f = new Intl.NumberFormat("en-EG");

  // const priceTextMatcher = (content, node) => {
  //   const formattedPrice = new Intl.NumberFormat('en-EG').format(sampleProps.price);
  //   return node.textContent === formattedPrice;
  // };

  expect(getByText(sampleProps.title)).toBeInTheDocument();
  expect(getByText(sampleProps.location)).toBeInTheDocument();
  expect(getByText(`${f.format(sampleProps.price)}`)).toBeInTheDocument();
  expect(getByText(sampleProps.unite_type)).toBeInTheDocument();
  expect(getByText(`${sampleProps.bedrooms}`)).toBeInTheDocument();
  expect(getByText(`${sampleProps.bathrooms}`)).toBeInTheDocument();
  expect(getByText(`${sampleProps.unite_size}`)).toBeInTheDocument();
  expect(getByText(sampleProps.location)).toBeInTheDocument();
  expect(getByText(sampleProps.slug)).toBeInTheDocument();
});
