import style from "./DetailPage.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState([]); // Utiliza un estado para las imágenes
  const productByName = useSelector((state) => state.productByName);
  const params = useParams();
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);
  const id = params.id;
  let disabledButton = true;
  const productCategory = allCategories.find(
    (category) => category.id === product.categoryId
  );

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

  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());
    console.log(allCategories);
  }, [allCategories, dispatch]);

  const setImage = (url) => {
    setMainImage(url);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
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
                    <h5>catalogo</h5>
                  </Link>
                </button>
              )}
              <ion-icon name="chevron-forward-outline"></ion-icon>
              <button disabled={disabledButton}>
                <h6>{product.name}</h6>
              </button>
            </div>
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
            <div className={style.stockAndCategory}>
              <h5>Unidades en Stock: {product.stock}</h5>
              <h5>Categoría: {productCategory ? productCategory.name : 'Sin categoría'}</h5>
            </div>
            <h1>{product.name}</h1>
            <h2>${product.priceOfList}</h2>
            <h3>{product.description}</h3>
            <div className={style.divButton}>
              {/*               <button>Agregar Al Carrito</button> */}
              <div className={style.buttonwpp}>
                <Link
                  target="_blank"
                  to={`https://api.whatsapp.com/send?phone=573102909092&text=Hola%20estoy%20interesado(a)%20en%20saber%20mas%20informacion%20acerca%20del%20producto%20${product.name}`}
                >
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
