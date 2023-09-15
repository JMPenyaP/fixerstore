import './index.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const images = [
  "https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-327-ms327lu1-1_1.jpg",
  "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/20/16530573660117.jpg",
  "https://img4.dhresource.com/0x0/f3/albu/ry/z/31/26af6540-206c-4680-a045-ec1cd66ff250.jpg.webp",
  "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-adidas-breaknet-2-0-mujer-blanca-100010hp9445001-1.jpg",
  "https://bboys.pe/cdn/shop/files/HP9424_0.jpg?v=1691253494",
];

const Carrusel = () => {
  return (
    <div className="container">
      <h1 className="heading">TOP PRODUCTS</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <img src={img} alt="foto" />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">      
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">    
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carrusel;
