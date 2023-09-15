import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { setFilters, getProductName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const productName = useSelector((state) => state.productName);

  const handleChange = (event) => {
    const updatedName = event.target.value; // MIENTRAS CAMBIA EL INPUT TAMBIEN LO HACE EL NAME
    setName(updatedName);

    if (updatedName.length === 0) {
      // Cambiar la propiedad filter del estado global a false
      dispatch(setFilters(false)); //   
      console.log(productName);                             // EN EL CASO DE QUE SE BORRE EL NAME, SETEAR EN FALSE EL FILTER
    }
  };

  const searchName =  () => {
    dispatch(getProductName(name)); // FUNCION PARA HACER DISPATCH DE LA ACTION QUE CONSIGUE EL Product
  };

  return (
    <div className={style.divNavBar}>
      <img
        src="https://s3-alpha-sig.figma.com/img/3833/7eca/e60625366dc9df5f0771fb658c866d39?Expires=1695600000&Signature=p4RVXaHWNaHJrK8200eTzaVVgwGmr0fpTtH8Fafay72nuONitHO-lXBMZwxBk5m02Ovx2QMWa-yYFxSdDw3APSToZoFt15CAVzqRMsQb1cyvtI7OgA~FKgjQbi9KSu6Y5KUjvNBmQcPwnI5Ypkw4dpPCQ9tfoV8UatuWbzeW3aqipK-a3GHtg14kbSqxuvXNe~Wlbv8IBpwoKBr7149G-TkWstKArQgtQqSahwxnt7WL04V7FIN7J2EceOtplXcsOBhbSMUxKu~wyJOJe314XKSHBM1tCA-Coh7jeEGgvA0KwdztsMsuj8KXPlHxJRDuW4dP7RL-Q7S0lSBi4m5A8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Logo Fixer"
        className={style.logo}
      />
      <div className={style.divButtonsNav}>
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <Link to="/productos">
          <button>Productos</button>
        </Link>
        <button>Quienes Somos</button>
      </div>
      <div className={style.searchBarDiv}>
        <input
          type="search"
          placeholder="Buscar Producto"
          value={name}
          onChange={handleChange}
        />
        <button onClick={searchName}>
          <img
            src="https://s3-alpha-sig.figma.com/img/9e95/eac1/98843c95e535f8beea5822d26858cfbd?Expires=1695600000&Signature=CeNGEaIfNS5Zj9wW8kDK0iWNTvRJEwEXquv~JLYiVDqMZdP1ucqtcW6R0JxoV1gv~CxLeTmsJCAbpbsTaFV5AZjBM25KfMVptLHQdASnGlEM9gedY~3w~j-CJaEu1ROJIAbTZJBYWD0zIMx0VSkSymws1-AZbKqgoFisKDlH78Ac1hpdR1WAJFG1GwQOfRMVVXUfwk0cKrSkbc0q6RbeBUrC12fdp5Y7y~QHOLugXAT4OPvSfiNu-FC4chb3LkTqY5JmiSVnt0f2z6djMYtMnTBcGyVa2R3-EhS~r5Q1RL8aEvWZpijUGd5HXgr4Cbibb5JsZeS2vkATCuxYMIFQRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="search button"
          />
        </button>
      </div>
      <div className={style.userLetter}>A</div>
      <div className={style.carritoDiv}>
        <img
          src="https://s3-alpha-sig.figma.com/img/12c3/1118/bb819854018b2e238fa8383bbc4dbc58?Expires=1695600000&Signature=lPvxgur06egYS0OhwWAM1GfdJRgREFP694bOi99E7DCMjPQbhtrlb2kTSZ00905WpfUYpOw2zfwHOFsx~e3sKpbkBQCUdiY-nTavcHquK2wrPaiQag5r7-aFv3ntKGU9iy4lKBizSJ5K3z0kGeJ9xg-ND0yExebRRMCZLrYmDPwy2Dk-w1-YBJCV~ln0CJTBuFfGwhuX-x5JljAzmH40NQFm2w7J8J6PWISaHteB0Tm9zVNBWzYs~6OjZOC-h~eaYNJIgKQZM-JWc6ntHTwgis6xTx0k2v2vvxRANqhZmlmpsgcoMfQNbCi1IdqfbAgz48J00zRtos4acXhZmZvYBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Bolso de Compras"
          className={style.carritoImg}
        />
      </div>
    </div>
  );
};

export default Navbar;
