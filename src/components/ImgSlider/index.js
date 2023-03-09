import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, Wrap } from './styles';

function ImgSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt=""/>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider;