import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Gallery = ({ image }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full lg:h-[300px] md:h-[550px] sm:h-[500px] h-[300px] rounded-md cursor-pointer mySwiper2"
      >
        {image ? (
          Array.isArray(image) ? (
            image.map((img, index) => (
              <SwiperSlide key={index} className="h-full">
                {" "}
                <img src={img} alt="" className="h-full" />{" "}
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img src={image} alt="" />
            </SwiperSlide>
          )
        ) : null}
      </Swiper>

      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        className="mySwiper md:h-[120px] lg:h-[75px] h-[75px] my-5"
      >
        {image ? (
          Array.isArray(image) ? (
            image.map((img, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                {" "}
                <img src={img} alt="" className="" />{" "}
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img src={image} alt="" />
            </SwiperSlide>
          )
        ) : null}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
