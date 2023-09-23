import "./App.css";
import Catalogo from "./paginas/Catalogo/Catalogo";
import Dashboard from "./paginas/DashBoard/Dashboard";
import DetailPage from "./paginas/DetailPage/DetailPage";
import LoginAdmin from "./paginas/LoginAdmin/LoginAdmin";
import Home from "./paginas/Home/Home";
import Carrito from "./paginas/Carrito/Carrito";
import Navbar from "./components/NavBar/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PassSolicitud from "./paginas/PassSolicitud/PassSolicitud";
import ResetPass from "./paginas/ResetPass/ResetPass";
import { useState, useEffect } from "react";
import SearchedProduct from "./paginas/SearchedProduct/SearchedProduct";
import { agregarAlCarrito } from "./redux/Actions/carrito";
import LoginUser from "./paginas/LoginUser/LoginUser";
import RegistroUsuario from "./paginas/RegistroUsuario/RegistroUsuario";
import Pasarela from "./paginas/Pasarela/Pasarela";

function App() {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.adminProfile);
  const carrito = useSelector((state) => state.carrito);
  const [adminPass, setAdminPass] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setAdminPass(admin);
  }, [admin]);

  const location = useLocation();
  const isLoginPage =
    location.pathname === "/admin" ||
    location.pathname === "/login" ||
    location.pathname === "/registro" ||
    location.pathname === "/resetPass" ||
    location.pathname === "/reset" ||
    location.pathname === "/payment";
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

    guardarCarritoEnLocalStorage();
  }, [carrito, dispatch]);
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
        <Route path="/payment" element={<Pasarela />} />
      </Routes>
    </>
  );
}
export default App;
