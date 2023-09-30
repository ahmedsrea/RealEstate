import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  return (
    <div className="w-full">
      <div className="w-full ">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(245, 245, 245, 1)" offset="0%"></stop>
              <stop stop-color="rgba(245, 245, 245, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,90L60,76.7C120,63,240,37,360,21.7C480,7,600,3,720,3.3C840,3,960,7,1080,16.7C1200,27,1320,43,1440,53.3C1560,63,1680,67,1800,58.3C1920,50,2040,30,2160,25C2280,20,2400,30,2520,36.7C2640,43,2760,47,2880,50C3000,53,3120,57,3240,56.7C3360,57,3480,53,3600,55C3720,57,3840,63,3960,55C4080,47,4200,23,4320,26.7C4440,30,4560,60,4680,68.3C4800,77,4920,63,5040,50C5160,37,5280,23,5400,21.7C5520,20,5640,30,5760,28.3C5880,27,6000,13,6120,10C6240,7,6360,13,6480,18.3C6600,23,6720,27,6840,25C6960,23,7080,17,7200,25C7320,33,7440,57,7560,63.3C7680,70,7800,60,7920,60C8040,60,8160,70,8280,71.7C8400,73,8520,67,8580,63.3L8640,60L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#F5F5F5] overflow-hidden md:px-0 px-[15px] w-full">
        <h1 className="md:text-3xl text-2xl mb-16 text-black font-bold relative text-center">
          Featured projects
          <span className="under-line"></span>
        </h1>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // centeredSlides={true}
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
          className=""
        >
          {data?.data.map(
            ({ title, dev_by, price, images, slug, _id }: Data) => {
              const image = images?.split(",");
              const f = new Intl.NumberFormat("en-EG");

              return (
                <SwiperSlide key={_id}>
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
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 220"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(245, 245, 245, 1)" offset="0%"></stop>
              <stop stop-color="rgba(245, 245, 245, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,154L48,128.3C96,103,192,51,288,47.7C384,44,480,88,576,106.3C672,125,768,117,864,95.3C960,73,1056,37,1152,51.3C1248,66,1344,132,1440,135.7C1536,139,1632,81,1728,47.7C1824,15,1920,7,2016,29.3C2112,51,2208,103,2304,110C2400,117,2496,81,2592,73.3C2688,66,2784,88,2880,91.7C2976,95,3072,81,3168,80.7C3264,81,3360,95,3456,91.7C3552,88,3648,66,3744,73.3C3840,81,3936,117,4032,143C4128,169,4224,183,4320,183.3C4416,183,4512,169,4608,135.7C4704,103,4800,51,4896,51.3C4992,51,5088,103,5184,102.7C5280,103,5376,51,5472,51.3C5568,51,5664,103,5760,117.3C5856,132,5952,110,6048,106.3C6144,103,6240,117,6336,121C6432,125,6528,117,6624,113.7C6720,110,6816,110,6864,110L6912,110L6912,220L6864,220C6816,220,6720,220,6624,220C6528,220,6432,220,6336,220C6240,220,6144,220,6048,220C5952,220,5856,220,5760,220C5664,220,5568,220,5472,220C5376,220,5280,220,5184,220C5088,220,4992,220,4896,220C4800,220,4704,220,4608,220C4512,220,4416,220,4320,220C4224,220,4128,220,4032,220C3936,220,3840,220,3744,220C3648,220,3552,220,3456,220C3360,220,3264,220,3168,220C3072,220,2976,220,2880,220C2784,220,2688,220,2592,220C2496,220,2400,220,2304,220C2208,220,2112,220,2016,220C1920,220,1824,220,1728,220C1632,220,1536,220,1440,220C1344,220,1248,220,1152,220C1056,220,960,220,864,220C768,220,672,220,576,220C480,220,384,220,288,220C192,220,96,220,48,220L0,220Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FeaProjects;
