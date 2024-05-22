import { useQuery } from "@tanstack/react-query";
import CompoundCard from "../../components/CompoundCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import axios from "../../api/axios";

const OtherProjects = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["other-projects"],
    queryFn: () => axios.get("/compounds"),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading....";
  if (error) return "Error";

  return (
    <div className="xl:max-w-[1400px] w-full px-[15px] mx-auto mb-10">
      <h1 className="text-[28px] font-bold mb-4">Other Projects in </h1>
      <Swiper
        grabCursor
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="pb-8"
      >
        {data?.data?.data &&
          data?.data?.data.map((data: any) => (
            <SwiperSlide key={data._id}>
              <CompoundCard {...data} showPage />
            </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev sm:flex hidden slider-arrow"></div>
          <div className="swiper-button-next sm:flex hidden slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default OtherProjects;
