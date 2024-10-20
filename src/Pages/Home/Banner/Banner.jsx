
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";

const Banner = () => {
  return (
    <Carousel className="text-center" autoPlay="true" infiniteLoop="true">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
