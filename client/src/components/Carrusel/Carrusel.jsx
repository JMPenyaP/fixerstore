import "./carrusel.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

const Carrusel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios(`http://localhost:3001/products/`).then(({ data }) => {
        if (data.data) {
          setProducts(data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="divCarousel">
      <Slider {...settings}>
        {products.map((prod, index) => {
          return (
            <div className="divImgsCarousel" key={index}>
              <h1>{prod.name}</h1>
              <img
                src={prod.firstImage}
                alt="imagen"
                className="carouselImage"
              />
              <h3>$ {prod.priceOfList}</h3>
              <Link to={`/detail/${prod.id}`}>
                <div className="divButton">
                  <button><h5>Ver Producto</h5></button>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carrusel;
