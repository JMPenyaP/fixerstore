import style from "./DetailPage.module.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState([]); // Utiliza un estado para las imágenes
  const params = useParams();
  const id = params.id;

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
  }, [id]);

  const setImage = (url) => {
    setMainImage(url);
  };

  return (
    <div className={style.divDetail}>
      {loading ? (
        <h1>Cargando Producto...</h1>
      ) : (
        <div className={style.divDetailedProduct}>
          <div className={style.divImagesCar}>
            <div className={style.divImage}>
              <img src={mainImage} alt="product" />
            </div>
            <div className={style.carouselImages}>
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
          </div>
          <div className={style.infoDiv}>
            <h5>Unidades en Stock: {product.stock}</h5>
            <h1>{product.name}</h1>
            <h2>${product.priceOfList}</h2>
            <h3>{product.description}</h3>
            <div className={style.divButton}>
{/*               <button>Agregar Al Carrito</button> */}
              <div className={style.buttonwpp}>
                <Link target="_blank" to={`https://api.whatsapp.com/send?phone=573102909092&text=Hola%20estoy%20interesado(a)%20en%20saber%20mas%20informacion%20acerca%20del%20producto%20${product.name}`}>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
