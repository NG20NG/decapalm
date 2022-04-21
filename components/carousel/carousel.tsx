//
import c from "./carousel.module.css";
//
import Image from "next/image";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//
//
//
const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnFocus: true,
    autoplaySpeed: 4000,
  };
  const width = "750px";
  const height = "450px";
  return (
    <div className={c.mainCarouselStaticContainer}>
      <Slider {...settings}>
        {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((e, i) => {
          return (
            <div key={i} className={c.divInsideCarousel}>
              <Image
                src={"/carousel/" + e}
                alt="test"
                width={width}
                height={height}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
