import style from "./DetailPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    name: "Zapatilla Nike Air Max",
    description:
      "Las Zapatillas Nike Air Max son la elección perfecta para los entusiastas del running. Diseñadas con tecnología de vanguardia y materiales de alta calidad, estas zapatillas ofrecen comodidad, durabilidad y rendimiento inigualables. Con su amortiguación avanzada y su suela resistente, te brindan un soporte excepcional para tus pies en cada paso. Ya sea que estés corriendo en el parque o entrenando para tu próxima carrera, las Zapatillas Nike Air Max te llevarán al siguiente nivel.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_632124-MLA42150136966_062020-O.webp",
    price: 99.99,
    color: "Negro",
    talla: "42",
    marca: "Nike",
    categoria: "Deportes",
    enOferta: true,
    stock: 50,
  });
  const [mainImage, setMainImage] = useState(product.image);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    try {
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const images = [
    "https://http2.mlstatic.com/D_NQ_NP_632124-MLA42150136966_062020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_817118-MLA42150173428_062020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_816748-MLA42150191129_062020-O.webp",
  ];

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
                return <div className={style.divImageCarousel} key={index}><img src={image} alt="product" onClick={() => {setImage(image)}}/></div>;
              })}
            </div>
          </div>
          <div className={style.infoDiv}>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <h3>{product.description}</h3>
            <div className={style.divButton}>
              <button>Agregar Al Carrito</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;