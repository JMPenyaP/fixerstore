import "./App.css";
import Catalogo from "./paginas/Catalogo/Catalogo";
import Dashboard from "./paginas/DashBoard/Dashboard";
import DetailPage from "./paginas/DetailPage/DetailPage";
import LoginAdmin from "./paginas/LoginAdmin/LoginAdmin";
import Home from "./paginas/Home/Home";
import Carrito from "./paginas/Carrito/Carrito";
import Navbar from "./components/NavBar/NavBar";
import Nosotros from "./paginas/Nosotros/Nosotros";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PassSolicitud from "./paginas/PassSolicitud/PassSolicitud";
import ResetPass from "./paginas/ResetPass/ResetPass";
import { useState, useEffect } from "react";
import SearchedProduct from "./paginas/SearchedProduct/SearchedProduct";
import { agregarAlCarrito } from "./redux/Actions/carrito";
import { getCarritoById } from "./redux/Actions/carrito";
import { actualizarUserIdEnCarrito } from "./redux/Actions/carrito";
import { vaciarCarrito } from "./redux/Actions/carrito";
import LoginUser from "./paginas/LoginUser/LoginUser";
import RegistroUsuario from "./paginas/RegistroUsuario/RegistroUsuario";
import Pasarela from "./paginas/Pasarela/Pasarela";
import DashUser from "./paginas/DashUser/DashUser";
import { setDataProfile } from "./redux/Actions/setDataProfile";
import { setUserMenu } from "./redux/Actions/setUserMenu";
import PassAnsony from "./paginas/PassSolicitud/PassAnsony";
import Success from "./paginas/Pasarela/payStatus/Success";
import Failured from './paginas/Pasarela/payStatus/Failured'
import ContactForm from './paginas/Contactanos/ContactForm';
import Error from "./paginas/Error/Error";


function App() {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.adminProfile);
  const client = useSelector((state) => state.clientProfile);
  const carrito = useSelector((state) => state.carrito);
  const [adminPass, setAdminPass] = useState(null);
  const [idVariable, setIdVariable] = useState(null);
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);
  const userMenu = useSelector((state) => state.userMenu)

  useEffect(() => {
    const handleClick = (event) => {
      // Verificar si el clic ocurrió dentro del elemento que activa el menú de usuario
      // o dentro del elemento con el ID "letterId"
      if (
        userMenu &&
        event.target.id !== 'user-menu-button' &&
        event.target.id !== 'letterId'
      ) {
        dispatch(setUserMenu(false));
        console.log("hola");
      }
    };

    // Agregar el EventListener al montar el componente
    document.addEventListener("click", handleClick);

    // Limpiar el EventListener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [userMenu, dispatch]);



  useEffect(() => {
    setAdminPass(admin);
  }, [admin, client]);

  const location = useLocation();
  const isLoginPage =
    location.pathname === "/admin" ||
    location.pathname === "/login" ||
    location.pathname === "/registro" ||
    location.pathname.includes("/reset") ||
    location.pathname === "/payment" ||
    location.pathname === "/payment/success" ||
    location.pathname === "/payment/failured";
  useEffect(() => {
    if (!adminPass && location.pathname === "/dashboard") {
      navigate("/admin");
    }
  }, [adminPass, location.pathname, navigate]);

  //MARCOS CARRITO

  const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0 && storedCart.length > 0) {
      storedCart.forEach((item) => {
        dispatch(
          agregarAlCarrito(
            item.idUser,
            {
              id: item.id,
              name: item.name,
              precio: item.precio,
              image: item.image,
              stock: item.stock,
            },
            item.cantidad
          )
        );
      });
    }

    if (dataProfile != null) {
      carrito.forEach((prod) => {
        if (prod.idUser === null) {
          dispatch(actualizarUserIdEnCarrito(prod.id, dataProfile.userData.id));
        } else {
          return console.log("no era null");
        }
      });
    } else {
      console.log("data profile es null");
    }

    dispatch(getCarritoById(idVariable));
    guardarCarritoEnLocalStorage();
  }, [carrito, dispatch, dataProfile, actualizarUserIdEnCarrito, idVariable]);

  useEffect(() => {
    if (dataProfile != null) {
      if (dataProfile.userData) {
        localStorage.setItem("dataProfile", JSON.stringify(dataProfile));
        setIdVariable(dataProfile.userData.id);
      }
    } else {
      const storedData = JSON.parse(localStorage.getItem("dataProfile")) || [];
      setIdVariable(null);
      if (storedData.success === true) {
        dispatch(setDataProfile(storedData));
      }
    }
  }, [dataProfile]);

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Catalogo />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/searchedprod/:name" element={<SearchedProduct />} />
        <Route path="/carrodecompras" element={<Carrito />} />
        <Route path="/login" element={<LoginUser />} />
        <Route
          path="/user/:id"
          element={<DashUser />} // : <Navigate to="/login" />
        /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/reset" element={<PassSolicitud />} />
        <Route path="/reset/:token" element={<ResetPass />} />
        <Route path="/resetAnsony" element={<PassAnsony />} />
        <Route path="/contactanos" element={<ContactForm />} />
        <Route
          path="/payment"
          element={<Pasarela />}
        />
        <Route
          path="/payment/success"
          element={<Success />}
        />
        <Route
          path="/payment/failured"
          element={<Failured />}
        />
        <Route
            path='*'
        element={<Error/>}/>

      </Routes>
    </>
  );
}
export default App;
