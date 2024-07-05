import React from "react";
import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardbut from "../card/cardbut/Cardbut";
import Cardvid from "../card/cardvid/Cardvid";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  let slider;

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div className="carousel-container">
      <Slider ref={(c) => (slider = c)} {...settings}>
        <div className="card">
          <button>
            <Cardbut />
            <Cardvid rotate={true} />
          </button>
        </div>
        <div className="card">
          <button>
            <Cardvid />
            <Cardbut />
          </button>
        </div>
        <div className="card">
          <button>
            <Cardbut />
            <Cardvid rotate={true} />
          </button>
        </div>
        <div className="card">
          <button>
            <Cardvid />
            <Cardbut />
          </button>
        </div>
        {/* Add more cards as needed */}
      </Slider>
      <div className="arrow-slide" style={{}}>
        <a onClick={previous}>
          <span class="material-icons">chevron_left</span>
        </a>

        <a onClick={next}>
          <span class="material-icons">navigate_next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
