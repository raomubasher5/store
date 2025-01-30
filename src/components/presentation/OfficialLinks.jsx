import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/official links/220x220b.png";
import img2 from "../../assets/official links/220x220c.png";
import img3 from "../../assets/official links/220x220e.png";
import img4 from "../../assets/official links/220x220f.png";
import img5 from "../../assets/official links/220x220g.png";
import img6 from "../../assets/official links/220x220h.png";
import img7 from "../../assets/official links/220x220i.png";
import img8 from "../../assets/official links/220x220j.png";
import img9 from "../../assets/official links/220x220sodle.gif";
import img10 from "../../assets/official links/logo.gif";

export default function OfficialLinks() {
  const images = [
    {
      image: img1,
      link: "https://www.google.com",
      text: 'Flash Sales',
    },
    {
      image: img2,
      link: "https://www.google.com",
      text: 'Sell on Jumia',
    },
    {
      image: img3,
      link: "https://www.google.com",
      text: 'Official Store',
    },
    {
      image: img4,
      link: "https://www.google.com",
      text: 'Guarantee',
    },
    {
      image: img5,
      link: "https://www.google.com",
      text: 'Call to Order',
    },
    {
      image: img6,
      link: "https://www.google.com",
      text: 'From 99 DH',
    },
    {
      image: img7,
      link: "https://www.google.com",
      text: 'Earn money',
    },
    {
      image: img8,
      link: "https://www.google.com",
      text: 'Help',
    },
    {
      image: img9,
      link: "https://www.google.com",
      text: 'End of the year sale',
    },
    {
      image: img10,
      link: "https://www.google.com",
      text: 'Tech week',
    }
  ];

  return (
    <div className="container bg-gray-200 rounded">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={7}
        loop={true}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <a href={img.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center">
                <img
                  src={img.image}
                  alt={`Slide ${index + 1}`}
                  className="w-[130px] h-[130px] rounded-lg transform hover:scale-105 transition-transform duration-300"

                />
                <div className="text-black text-center py-1 text-sm">
                  {img.text}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
