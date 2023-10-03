import style from "./DetailPage.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import { agregarAlCarrito } from "../../redux/Actions/carrito";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';
import { getReviews } from "../../redux/Actions/getReviews";

const DetailPage = () => {
  
  const opinion = [{
    ratingValue: 4.0,
    comment: "malisimo pesimo producto no lorecomiendo",
    ProductId: 5
  }, {
    ratingValue: 3.0,
    comment: "bueno que lindo",
    ProductId: 5
  }, {
    ratingValue: 3.0,
    comment: "recomendado",
    ProductId: 5
  }, {
    ratingValue: 1.0, 
    comment: "que buen producto",
    ProductId: 5
  }]
  // ESTADOS ///
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState();
  const [cantidad, setCantidad] = useState(1);
  const [images, setImages] = useState([]);
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState();
  const [idVariable, setIdVariable] = useState(null);
  const dataProfile = useSelector((state) => state.dataProfile);
  //////
  
  let carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  
  // STATE REDUX
  const productByName = useSelector((state) => state.productByName);
  const allCategories = useSelector((state) => state.allCategories);
  const carrito = useSelector((state) => state.carrito);
  const reviews = useSelector((state)=>state.reviews)
  //////

  let precioReal;

  if (product.statusOffer === true) {
    precioReal =
      product.priceOfList - (product.priceOfList * product.offer) / 100;
  } else {
    precioReal = product.priceOfList;
  }

  // USE PARAMS Y DISPATCH
  const params = useParams();
  const dispatch = useDispatch();
  //////

  const id = params.id;

  // CATEGORIAS
  const productCategory = allCategories.find(
    (category) => category.id === product.categoryId
  );
  //////

  useEffect(() => {
    try {
      axios(`http://localhost:3001/products/${id}`).then(({ data }) => {
        if (data.name) {
          setProduct(data);
          setMainImage(data.firstImage);
          setImages([data.firstImage, ...data.carrouselImage]); // Actualiza el estado de las imágenes
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id, carrito]);

  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());

    carritoEnLocalStorage.map((item) => {
      if (item.id === product.id && item.idUser === idVariable) {
        setCantidadEnCarrito(item.cantidad);
      } else {
        setCantidadEnCarrito(0);
      }
    });

    if (dataProfile != null) {
      setIdVariable(dataProfile.userData.id);
    } else {
      setIdVariable(null);
    }
  }, [allCategories, dispatch, carritoEnLocalStorage, dataProfile]);

 // Reviews
  useEffect(()=>{
     dispatch(getReviews)
  },[])

  // ONCLICK FUNCTIONS
  const setImage = (url) => {
    setMainImage(url);
  };

  const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const goBack = () => {
    window.history.back();
  };

  const handleAumentar = () => {
    if (cantidad + cantidadEnCarrito >= product.stock) {
    } else {
      setCantidad(cantidad + 1);
    }
  };

  const handleDisminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarProductoAlCarrito = () => {
    dispatch(
      agregarAlCarrito(
        idVariable,
        {
          id: product.id,
          name: product.name,
          precio: precioReal,
          image: product.firstImage,
          stock: product.stock,
        },
        cantidad
      )
    );

    setCantidad(1);

    guardarCarritoEnLocalStorage();

    toast.success("Producto agregado al carrito !", {
      icon: "🚀",
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  ///////

  // VARIABLES QUE CAMBIAN
  let slidesToShowImg = images.length;
  let carousel = true;
  /////

  // SETTINGS CAROUSEL
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600,
  };

  if (slidesToShowImg < 4) {
    carousel = false;
  }
  ///////
  
 
  
  return (
    <>
      <div className={style.divDetail}>
        {loading ? (
          <h1>Cargando Producto...</h1>
        ) : (
          <div className={style.divDetailedProduct}>
            <div className={style.divImagesCar}>
              <div className={style.paginateButton}>
                <button>
                  <Link to="/">
                    <h5>Inicio</h5>
                  </Link>
                </button>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                {productByName.data !== undefined ? (
                  <button onClick={goBack}>
                    <h5>Buscar Productos</h5>
                  </button>
                ) : (
                  <button>
                    <Link to="/productos">
                      <h5>Productos</h5>
                    </Link>
                  </button>
                )}
              </div>
              <div className={style.divImage}>
                <img src={mainImage} alt="product" />
              </div>
              <div className={style.carouselImages}>
                {carousel ? (
                  <Slider {...settings}>
                    {images.map((image, index) => {
                      return (
                        <div className={style.divImageCarousel} key={index}>
                          <img
                            src={image}
                            alt="product"
                            onClick={() => {
                              setImage(image);
                            }}
                          />
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <div className={style.imgNoCarousel}>
                    {images.map((image, index) => {
                      return (
                        <div className={style.divImageCarousel} key={index}>
                          <img
                            src={image}
                            alt="product"
                            onClick={() => {
                              setImage(image);
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className={style.infoDiv}>
              <div className={style.stockAndCategory}>
                <h5
                  className={
                    cantidad + cantidadEnCarrito >= product.stock ||
                      cantidad >= product.stock
                      ? style.noStock
                      : style.stock
                  }
                >
                  Unidades en Stock: {product.stock}
                </h5>
                <h5>
                  Categoría:{" "}
                  {productCategory ? productCategory.name : "Sin categoría"}
                </h5>
              </div>
              <h1>{product.name}</h1>
              <div className={style.pricesDiv}>
                {product.statusOffer === true ? (
                  <div>
                    <h2 className={style.oldPrice}>$ {product.priceOfList}</h2>
                    <h2>
                      ${" "}
                      {product.priceOfList -
                        (product.priceOfList * product.offer) / 100}
                    </h2>
                  </div>
                ) : (
                  <h2>$ {product.priceOfList}</h2>
                )}
              </div>
              <h3>Descripcion Del Producto :</h3>
              <h3>{product.description}</h3>
              <div className={style.divButton}>
                {/*               <button>Agregar Al Carrito</button> */}
                <div className={style.buttonwpp}>
                  {product.statusOffer === true ? (
                    <Link
                      target="_blank"
                      to={`https://api.whatsapp.com/send?phone=573102909092&text=Hola%20estoy%20interesado(a)%20en%20saber%20mas%20informacion%20acerca%20del%20producto%20en%20oferta%20${product.name}`}
                    >
                      <ion-icon name="logo-whatsapp"></ion-icon>
                      <h6>Consultá Por Este Producto !</h6>
                    </Link>
                  ) : (
                    <Link
                      target="_blank"
                      to={`https://api.whatsapp.com/send?phone=573102909092&text=Hola%20estoy%20interesado(a)%20en%20saber%20mas%20informacion%20acerca%20del%20producto%20${product.name}`}
                    >
                      <ion-icon name="logo-whatsapp"></ion-icon>
                      <h6>Consultá Por Este Producto !</h6>
                    </Link>
                  )}
                </div>
              </div>
              <div className={style.divAddCart}>
                <div className={style.addAndRestButtons}>
                  <button
                    onClick={handleDisminuir}
                    className={style.buttonCantidad}
                  >
                    <ion-icon name="remove-circle"></ion-icon>
                  </button>
                  <span>{cantidad}</span>
                  <button
                    onClick={handleAumentar}
                    className={style.buttonCantidad}
                    disabled={
                      cantidad + cantidadEnCarrito >= product.stock ||
                      cantidad >= product.stock
                    }
                  >
                    <ion-icon name="add-circle"></ion-icon>
                  </button>
                </div>
                <div className={style.divButton}>
                  <button
                    onClick={agregarProductoAlCarrito}
                    disabled={
                      cantidad + cantidadEnCarrito > product.stock ||
                      cantidad > product.stock
                    }
                    className={style.buttonAgregar}
                  >
                    Agregar Al Carrito
                  </button>
                </div>
              </div>
            </div>

          </div>

        )}

      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={style.mainContRev}>
        <h1>Opiniones acerca de este producto:</h1>
        {opinion.map((op) => (
        <div className={style.reviewCont}>
          <h3>{op.ratingValue}</h3>
          <p>{op.comment}</p>

         </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
//       <div className={style.grade} >
//   </div>
//   <div className={style.coment}>
//     <h1>comentarios review
//     </h1>
//  </div>