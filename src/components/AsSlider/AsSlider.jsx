import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./AsSlider.css"

// Importar módulos correctos
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function AsHeader() {
  return (
    <div className="As_slider_container" style={{ paddingTop: "50px" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img className="As_slider_img" width={"100%"} height={"300"} src="./slider1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="As_slider_img" width={"100%"} height={"300"} src="./slider2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="As_slider_img" width={"100%"} height={"300"} src="./slider3.jpg" alt="Slide 2" />
        </SwiperSlide>
        
      </Swiper>
     
    </div>
  );
}
