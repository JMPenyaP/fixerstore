import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { setFilters, getProductName } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import logOutUser from "../../redux/Actions/logOutUser";

const Navbar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [letter, setLetter] = useState(null);
  const [cartLong, setCartLong] = useState(0);
  const navigate = useNavigate();

  const carrito = useSelector((state) => state.carrito);
  const dataProfile = useSelector((state) => state.dataProfile);

  useEffect(() => {
    if (dataProfile !== null) {
      setLetter(
        dataProfile.success !== null ? dataProfile.userData.name[0] : null
      );
    } else {
      setLetter(null);
    }

    if (carrito.length >= 0) {
      setCartLong(carrito.length);
    }
  }, [dataProfile, carrito]);

  const handleChange = (event) => {
    const updatedName = event.target.value; // MIENTRAS CAMBIA EL INPUT TAMBIEN LO HACE EL NAME
    setName(updatedName);

    if (updatedName.length === 0) {
      // Cambiar la propiedad filter del estado global a false
      dispatch(setFilters(false)); //
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const searchName = () => {
    setName("");
    if (name.length < 1) {
      alert("debe buscar algo");
    } else {
      dispatch(getProductName(name)); // FUNCION PARA HACER DISPATCH DE LA ACTION QUE CONSIGUE EL Product
    }
  };

  const handleRedirect = () => {
    dispatch(logOutUser());
    navigate("/");
    window.location.reload();
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
          <button>
            <h5>Inicio</h5>
          </button>
        </Link>
        <Link to="/productos">
          <button>
            <h5>Productos</h5>
          </button>
        </Link>
        <Link to="/us">
          <button>
            <h5>Quienes Somos</h5>
          </button>
        </Link>
        <button>
          <h5>Contactanos</h5>
        </button>
      </div>
      <div className={style.searchBarDiv}>
        <input
          type="search"
          placeholder="Buscar Productos"
          value={name}
          onChange={handleChange}
        />
        {name.length > 0 ? (
          <Link to={`/searchedprod/${name}`}>
            <button onClick={searchName}>
              <img
                src="https://s3-alpha-sig.figma.com/img/9e95/eac1/98843c95e535f8beea5822d26858cfbd?Expires=1695600000&Signature=CeNGEaIfNS5Zj9wW8kDK0iWNTvRJEwEXquv~JLYiVDqMZdP1ucqtcW6R0JxoV1gv~CxLeTmsJCAbpbsTaFV5AZjBM25KfMVptLHQdASnGlEM9gedY~3w~j-CJaEu1ROJIAbTZJBYWD0zIMx0VSkSymws1-AZbKqgoFisKDlH78Ac1hpdR1WAJFG1GwQOfRMVVXUfwk0cKrSkbc0q6RbeBUrC12fdp5Y7y~QHOLugXAT4OPvSfiNu-FC4chb3LkTqY5JmiSVnt0f2z6djMYtMnTBcGyVa2R3-EhS~r5Q1RL8aEvWZpijUGd5HXgr4Cbibb5JsZeS2vkATCuxYMIFQRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="search button"
              />
            </button>
          </Link>
        ) : (
          <button disabled>
            <img
              src="https://s3-alpha-sig.figma.com/img/9e95/eac1/98843c95e535f8beea5822d26858cfbd?Expires=1695600000&Signature=CeNGEaIfNS5Zj9wW8kDK0iWNTvRJEwEXquv~JLYiVDqMZdP1ucqtcW6R0JxoV1gv~CxLeTmsJCAbpbsTaFV5AZjBM25KfMVptLHQdASnGlEM9gedY~3w~j-CJaEu1ROJIAbTZJBYWD0zIMx0VSkSymws1-AZbKqgoFisKDlH78Ac1hpdR1WAJFG1GwQOfRMVVXUfwk0cKrSkbc0q6RbeBUrC12fdp5Y7y~QHOLugXAT4OPvSfiNu-FC4chb3LkTqY5JmiSVnt0f2z6djMYtMnTBcGyVa2R3-EhS~r5Q1RL8aEvWZpijUGd5HXgr4Cbibb5JsZeS2vkATCuxYMIFQRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="search button"
            />
          </button>
        )}
      </div>
      <div className={style.containerLogIn}>
        {dataProfile !== null ? (
          <>
            <div className={style.userLetter} onClick={handleMenu}>
              <h4>{letter}</h4>
            </div>
            {showMenu ? (
              letter !== null ? (
                <div className={style.divMenuDesplegable}>
                  <Link to={`/user/${dataProfile.userData.id}`}>
                    <button>
                      <ion-icon name="person"></ion-icon> <h5>Mi perfil</h5>
                    </button>
                  </Link>
                  <button onClick={() => handleRedirect()}>
                    <ion-icon name="log-out"></ion-icon> <h5>Cerrar sesion</h5>
                  </button>
                </div>
              ) : null
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <Link to="/login">
              <button className={style.botonInicio}>Iniciar sesión</button>
            </Link>
          </>
        )}
      </div>
      <Link to="/carrodecompras">
        <div className={style.carritoDiv}>
          <img
            src="https://s3-alpha-sig.figma.com/img/12c3/1118/bb819854018b2e238fa8383bbc4dbc58?Expires=1695600000&Signature=lPvxgur06egYS0OhwWAM1GfdJRgREFP694bOi99E7DCMjPQbhtrlb2kTSZ00905WpfUYpOw2zfwHOFsx~e3sKpbkBQCUdiY-nTavcHquK2wrPaiQag5r7-aFv3ntKGU9iy4lKBizSJ5K3z0kGeJ9xg-ND0yExebRRMCZLrYmDPwy2Dk-w1-YBJCV~ln0CJTBuFfGwhuX-x5JljAzmH40NQFm2w7J8J6PWISaHteB0Tm9zVNBWzYs~6OjZOC-h~eaYNJIgKQZM-JWc6ntHTwgis6xTx0k2v2vvxRANqhZmlmpsgcoMfQNbCi1IdqfbAgz48J00zRtos4acXhZmZvYBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Bolso de Compras"
            className={style.carritoImg}
          />
          <div className={style.cartCounter}>{cartLong}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

/* const handleEnter = (event) => {
  if (event.key === 'Enter') {
      onSearch(name);
  } else if (event.target.tagName === 'BUTTON') {
      onSearch(name);
  }
} */
