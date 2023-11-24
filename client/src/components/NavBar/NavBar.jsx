import style from "./NavBar.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { setFilters, getProductName } from "../../redux/actions";
import { setNameSearch } from "../../redux/Actions/setNameSearch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import logOutUser from "../../redux/Actions/logOutUser";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { showFilters } from "../../redux/Actions/showFilters";
import { setOrder } from "../../redux/Actions/setOrder";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import { setCategoryId } from "../../redux/Actions/setCategoryId";
import { setUserMenu } from "../../redux/Actions/setUserMenu";
import { setDataProfile } from "../../redux/Actions/setDataProfile";

const Navbar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [letter, setLetter] = useState(null);
  const [cartLong, setCartLong] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const carrito = useSelector((state) => state.carrito);
  const carritoById = useSelector((state) => state.carritoById);
  const dataProfile = useSelector((state) => state.dataProfile);
  const categoryId = useSelector((state) => state.categoryId);
  const order = useSelector((state) => state.order);
  const order2 = useSelector((state) => state.order2);
  const search = useSelector((state) => state.search);
  const userMenu = useSelector((state) => state.userMenu);

  useEffect(() => {
    if (dataProfile !== null) {
      setLetter(
        dataProfile.success !== null ? dataProfile.userData.name[0] : null
      );
    } else {
      setLetter(null);
    }


    if (carritoById.length >= 0) {
      setCartLong(carritoById.length);
    }
  }, [dataProfile, carrito, carritoById]);

  // ON CHANGE Y ON CLICK

  const handleChange = (event) => {
    const updatedName = event.target.value; // MIENTRAS CAMBIA EL INPUT TAMBIEN LO HACE EL NAME
    setName(updatedName);
    dispatch(setNameSearch(updatedName));
    if (updatedName.length === 0) {
      dispatch(setFilters(false)); //
    }
  };

  const handleClick = () => {
    dispatch(showFilters(false)); //
    dispatch(setNameSearch(""));
    dispatch(setOrder(""));
    dispatch(setOrder2(""));
    dispatch(setCategoryId(0));
  };

  const handleMenu = (boolean) => {
    dispatch(setUserMenu(boolean));
  };

  const searchName = (name, categoryId, order, order2) => {
    /* setName(""); */
    /* dispatch(setNameSearch('')) */
    if (name.length < 1) {
      alert("debe buscar algo");
    } else {
      dispatch(setOrder(""));
      dispatch(setOrder2(""));
      dispatch(showFilters(true));
      dispatch(buscaComb(name, categoryId, order, order2));
      /* dispatch(getProductName(name)); // FUNCION PARA HACER DISPATCH DE LA ACTION QUE CONSIGUE EL Product */
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

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      // Realizar búsqueda cuando se presiona "Enter"
      searchName(name, categoryId, order, order2);
    }
  };


  return (
    <>
      <div className={style.divNavBar}>
        <img className={style.logo}
          src="https://fixershoes.com/assets/fixer-227x78.jpg"
          alt="Logo Fixer"

        />
        <div className={style.divButtonsNav}>
          <Link to="/">
            <button className={currentPath === "/" ? style.onBoton : style.offBoton}>
              <h5>Inicio</h5>
            </button>
          </Link>
          <Link to="/productos">
          <button className={currentPath === "/productos" ? style.onBoton : style.offBoton} onClick={() => handleClick()}>
            <h5>Productos</h5>
          </button>
          </Link>
          <Link to="/nosotros">
            <button className={currentPath === "/nosotros" ? style.onBoton : style.offBoton}>
              <h5>Quienes Somos</h5>
            </button>
          </Link>
          <Link to="/contactanos">
          <button  className={currentPath === "/contactanos" ? style.onBoton : style.offBoton}>
            <h5>Contactanos</h5>
          </button>
          </Link>
        </div>
        <div className={style.searchBarDiv}>
          <input
            type="search"
            placeholder="Buscar Productos"
            value={search}
            onChange={handleChange}
            onKeyPress={handleSearchKeyPress} // Agrega el manejador de eventos

          />
          {name.length > 0 ? (
            <Link to={currentPath === "/productos" ? "#" : "/productos"}>
              <button
                onClick={() => searchName(name, categoryId, order, order2)}
              >
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
              <div
                className={style.userLetter}
                onClick={() => handleMenu(!userMenu)}
                id="user-menu-button"
              >
                <h4 id="letterId">{letter}</h4>
              </div>
              {userMenu ? (
                letter !== null ? (
                  <div className={style.divMenuDesplegable}>
                    {dataProfile.userData.role != "admin" ? (
                      <Link to={`/user/${dataProfile.userData.id}`}>
                        <button>
                          <ion-icon name="person"></ion-icon> <h5>Mi perfil</h5>
                        </button>
                      </Link>
                    ) : (
                      <Link to={`/dashboard`}>
                        <button>
                          <ion-icon name="person"></ion-icon> <h5>Dashboard</h5>
                        </button>
                      </Link>
                    )}
                    <button onClick={() => handleRedirect()}>
                      <ion-icon name="log-out"></ion-icon>
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
                <button className={style.botonInicio}>Ingresar</button>
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

      {/* RESPONSIVE NAVBAR ////////////////////////////////////////////////////////////////////////////////*/}

      <div className={style.resNavBar}>
        <div className={style.resNavBarNoSearch}>
          <button
            onClick={showHideMenu}
            className={`${style.buttonShowMenu} ${
              displayMenu ? style.actived : ""
            }`}
          >
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
              <h2>Ingresar</h2>
            )}
            <ul>
              <li>te</li>
              <li>tet</li>
              <li>tet</li>
              <li>tt</li>
            </ul>
          </div>
        </div>
        <div className={style.resSearchBarDiv}>
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
