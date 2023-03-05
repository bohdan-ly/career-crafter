import classNames from "classnames";
import React from "react";
import Slider from "react-slick";

type Props = {
  className?: string;
  rtl?: boolean;
};

export const InvestorsCrawl: React.FC<Props> = ({ className, rtl = false }) => {
  const slickRef = React.useRef<Slider | null>(null);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    rtl: rtl,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 1,
    cssEase: "linear",
    variableWidth: true,
    slidesPerRow: 1,
  };

  return (
    <div className={classNames("flex items-center w-full", className)}>
      <div className="m-auto w-full flex space-x-5">
        <Slider ref={slickRef} {...settings}>
          <div className="flex px-2 items-center h-10 bg-green-200 rounded-lg">
            Investor
          </div>
          <div className="flex px-2 items-center h-10 bg-red-200 rounded-lg">
            Investor
          </div>
          <div className="flex px-2 items-center h-10 bg-orange-200 rounded-lg">
            Investor
          </div>
          <div className="flex px-2 items-center h-10 bg-yellow-200 rounded-lg">
            Investor
          </div>
          <div className="flex px-2 items-center h-10 bg-gray-200 rounded-lg">
            Investor
          </div>
          <div className="flex px-2 items-center h-10 bg-gray-200 rounded-lg">
            Investor
          </div>
        </Slider>
      </div>
    </div>
  );
};
