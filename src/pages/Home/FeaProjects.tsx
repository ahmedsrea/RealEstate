import { Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import UpperBg from "../../components/UpperBg";
import LowerBg from "../../components/LowerBg";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

type Data = {
  title: string;
  images: string;
  slug: string;
  markdown: string;
  dev_by: string;
  price: number;
  _id: string;
};

const FeaProjects = () => {
  const url = "http://localhost:3000/get-compounds";
  const { isLoading, error, data } = useQuery({
    queryKey: ["showItems"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
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
    <div className="w-full">
      <div className="w-full ">
        <UpperBg />
      </div>
      <div className="bg-[#F5F5F5] overflow-hidden md:px-0 px-[15px] w-full">
        <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
          <h1 className="md:text-3xl text-2xl mb-24 text-black font-bold relative text-center">
            Featured projects
            <span className="under-line"></span>
          </h1>
        </Reveal>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 200,
            },
            720: {
              slidesPerView: "auto",
              spaceBetween: 200,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 300,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: "auto",
              spaceBetween: 500,
              centeredSlides: true,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-1"
        >
          {data?.data.map(
            ({ title, dev_by, price, images, slug, _id }: Data) => {
              const image = images?.split(",");
              const f = new Intl.NumberFormat("en-EG");

              return (
                <SwiperSlide key={_id} className="swiper-slide-1">
                  <Link
                    to={`/${slug}`}
                    className="absolute top-0 left-0 w-full h-full z-20"
                  ></Link>
                  <img src={image[0]} alt="slide_image" />
                  <div className="absolute left-0 top-0 z-10 w-full h-full flex justify-center items-center backdrop-brightness-50"></div>

                  <div className="flex flex-row justify-between absolute top-0 left-0 p-5 z-10 w-full">
                    <div className="flex flex-col">
                      <h1 className="sm:text-lg text-base text-white mb-2">
                        {title}
                      </h1>
                      <p className="text-[#DDDDDD] sm:text-base text-sm font-light">
                        Developed By: {dev_by}
                      </p>
                    </div>
                    <div className="text-white whitespace-nowrap">
                      160 units
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center absolute bottom-0 left-0 p-5 z-10 w-full">
                    <p className="md:text-base text-sm text-white">
                      <strong>{f.format(price)}</strong> EGP
                    </p>
                    <button className="bg-[#FB6B01] px-8 py-1 text-white rounded-[4px] text-lg">
                      Details
                    </button>
                  </div>
                </SwiperSlide>
              );
            }
          )}

          <div className="slider-controler">
            <div className="swiper-button-prev sm:flex hidden slider-arrow"></div>
            <div className="swiper-button-next sm:flex hidden slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="w-full">
        <LowerBg />
      </div>
    </div>
  );
};

export default FeaProjects;
