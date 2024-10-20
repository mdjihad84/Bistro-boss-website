
import CategoryTitle from "../../../Components/CategoryTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="p-4 md:p-0 md:pl-6">
      <CategoryTitle
        subtitle={"From 11:00am to 10:00pm"}
        title={"special menu"}/>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="mb-16">
          <img src={img1} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16  ">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16   ">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16  ">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 ">Cake</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Category;
