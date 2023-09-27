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
  const [displayMenu, setDisplayMenu] = useState(false);
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

  // ON CHANGE Y ON CLICK

  const handleChange = (event) => {
    const updatedName = event.target.value; // MIENTRAS CAMBIA EL INPUT TAMBIEN LO HACE EL NAME
    setName(updatedName);

    if (updatedName.length === 0) {
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

  const showHideMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <>
      <div className={style.divNavBar}>
        <img
          src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png"
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
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </Link>
          ) : (
            <button disabled>
              <ion-icon name="search-outline"></ion-icon>
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
                      <ion-icon name="log-out"></ion-icon>{" "}
                      <h5>Cerrar sesion</h5>
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
            <ion-icon name="cart-outline"></ion-icon>
            <div className={style.cartCounter}>{cartLong}</div>
          </div>
        </Link>
      </div>
      <div className={style.resNavBar}>
        <button onClick={showHideMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png"
            alt="Logo Fixer"
            className={style.resLogo}
          />
        </Link>
        <Link to="/carrodecompras">
          <div className={style.carritoDiv}>
            <ion-icon name="cart-outline"></ion-icon>
            <div className={style.cartCounter}>{cartLong}</div>
          </div>
        </Link>
        <div
          className={`${style.menuDisplay} ${displayMenu ? style.show : ""}`}
        >
          {dataProfile !== null ? (
            <div className={style.resUserLetter}>
              <h4>{letter}</h4>
            </div>
          ) : (
            <h2>inicia sesion</h2>
          )}
          <ul>
            <li>te</li>
            <li>tet</li>
            <li>tet</li>
            <li>tt</li>
          </ul>
        </div>
      </div>
    </>
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
