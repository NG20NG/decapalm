//
import c from "./carousel.module.css";
//
import Image from "next/image";
import Slider from "react-slick";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
//
//
const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const width = "750px";
  const height = "450px";
  return (
    <div className={c.mainCarouselStaticContainer}>
      <Slider {...settings}>
        {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"].map((e) => {
          return (
            <div>
              <Image src={e} alt="test" width={width} height={height} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
