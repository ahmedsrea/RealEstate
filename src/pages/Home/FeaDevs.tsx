import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

type Data = {
  title: string;
  images: string;
  slug: string;
};

const FeaDevs = () => {
  const url = "http://localhost:3000/get-dev";
  const { isLoading, error, data } = useQuery({
    queryKey: ["devs"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occured" + error;

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
    <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] mx-auto w-full px-[15px]">
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <h1 className="md:text-3xl text-2xl mb-24 text-black font-bold relative text-center">
          Featured Developers
          <span className="under-line"></span>
        </h1>
      </Reveal>
      <Swiper
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[Pagination]}
        className="pb-10"
      >
        {data?.data.map(({ slug, images, title }: Data) => (
          <SwiperSlide
            className="border-[1px] border-[#ddd] rounded-lg overflow-hidden"
            key={slug}
          >
            <Link to={`developers/${slug}`} className="w-full flex">
              <img src={images} alt={title} className="w-full h-auto" />
            </Link>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <div className="mt-16 flex justify-center">
          <Link
            to={"developers"}
            className="bg-[#FB6B01] text-white hover:bg-white hover:text-[#FB6B01] py-2 px-6 rounded-md transition duration-300 shadow-md"
          >
            View All Developers
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default FeaDevs;
