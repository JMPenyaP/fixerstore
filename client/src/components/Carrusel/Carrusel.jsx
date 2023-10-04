import style from "./carrusel.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Spinner } from "../../components/Carga/Carga";
import { Link } from "react-router-dom";

const Carrusel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios(`http://localhost:3001/products/`).then(({ data }) => {
        if (data.data) {
          const avalaiableProducts = data.data.filter(
            (prod) => prod.status == true
          );

          const OfferProducts = avalaiableProducts.filter(
            (prod) => prod.statusOffer == true
          );
          const firstFiveProds = OfferProducts.slice(0, 5);
          setProducts(firstFiveProds);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  let settings = {};

  if (products.length > 0) {
    settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  return (
    <div className="divCarousel">
      {products.length > 0 ? (
        <Slider {...settings}>
          {products.map((prod, index) => {
            const discountedPrice =
              prod.priceOfList - (prod.priceOfList * prod.offer) / 100;

            return (
              <div className="divImgsCarousel" key={index}>
                <h1>{prod.name}</h1>
                <img
                  src={prod.firstImage}
                  alt="imagen"
                  className="carouselImage"
                />
                <div>
                  <h3 className={style.crossedPrice}>$ {prod.priceOfList}</h3>
                  <h4>{prod.offer}% Off</h4>
                </div>
                <h2>$ {discountedPrice}</h2>
                <Link to={`/detail/${prod.id}`}>
                  <div className="divButton">
                    <button>
                      <h5>Ver Producto</h5>
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className={style.divCarga}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Carrusel;
