import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Why = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;
  return (
    <div className="bg-[#019DFB] w-full text-white text-center flex flex-col items-center justify-center py-12">
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <h1 className="text-3xl font-bold mb-16 relative">
          Why Real Estate Egypt?
          <span className="under-line"></span>
        </h1>
      </Reveal>
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] px-5 w-full flex flex-col gap-10 leading-7 text-base">
        <p>
          Real Estate Egypt website has been established to provide all the
          details and information about the Egyptian real estate market, from
          residential projects, ِِِAdministrative projects, and touristic
          resorts. The site contains all projects in all areas of Egypt, such as
          the New Administrative Capital, Fifth Settlement, New Cairo, October
          and Zayed, touristic cities such as North Coast, Al Ain Al Sokhna, El
          Gouna, Ras Sudr, Houses for sale in Egypt and Sharm El Sheikh. The
          site serves real estate seekers whether for their own use or for
          investment by providing all projects in one place and providing the
          opportunity to compare the projects which save researchers time and
          effort.
        </p>

        <p>
          <a href="/" className="text-[#019DFB] hover:text-[#0e2838] font-bold">
            The Egyptian Real Estate Market
          </a>{" "}
          is witnessing a notable growth that made it spearheading different
          economic sectors in terms of investments,
          <br />
          employment, assets’ value, and many other economic indicators.
          <br /> The Egyptian real estate market is divided into two
          subsidiaries sectors: The construction and building sector that’s
          dedicated for producing the different buildings and constructions, as
          well as the real estate activities sector that includes the real
          estate property and the business services. Recently, the investment in
          Egypt is a safe shelter for many people, especially with fluctuating
          the Egyptian pound’s value against the dollar. So the solution was to
          put the money in a real estate has a purchasing value with continuous
          rising, so the real estate investment is considered one of the winning
          fields that many people want to participate in.
        </p>

        <p>
          And with the advantages of the resolution taken by the Prime Minster
          Doctor Mostafa Madboly recently, through which he links between the
          right of residence and owning real estates in Egypt for the
          foreigners.
          <br /> We find that Egypt is considered a big factor in attracting
          Arab investors who wish to buy real estate to reside and invest at the
          same time. Especially with the tendency of the country to build big
          and modern cities with contemporary concepts, in which there are
          integrated residential, commercial, and entertainment compounds.
          <br /> In spite of the big jumps in real estate prices in the last
          period, experts confirmed that the real estate market growth will
          continue with the conditions surrounding it.
        </p>

        <p>
          Especially after Egypt’s joining of FIABCI, The International Real
          Estate Federation, in 2016, and that was considered a quantum leap
          that provided the investors and the world the chance to know Egypt’s
          real estate sector.
          <br /> And of course one of the important factors that helped in the
          recovery of Egypt’s real estate sector is electronic marketing which
          was prominent across the world.
        </p>

        <p>
          So that expert confirmed that the share of digital real estate is
          rising massively, and it was a factor in increasing of buying and
          selling movement in the real estate, the same thing in Egypt which
          lead many companies to depend on electronic marketing as one of its
          pillars in the sector.
          <br /> And as a result some companies spent huge sums of money on
          electronic marketing, doubles of what they spent on developing its
          large projects.
        </p>
      </div>
    </div>
  );
};

export default Why;
