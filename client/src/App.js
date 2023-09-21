import "./App.css";
import Catalogo from "./paginas/Catalogo/Catalogo";
import Dashboard from "./paginas/DashBoard/Dashboard";
import DetailPage from "./paginas/DetailPage/DetailPage";
import LoginAdmin from "./paginas/LoginAdmin/LoginAdmin"
import Home from "./paginas/Home/Home";
import Carrito from "./paginas/Carrito/Carrito";
import Navbar from "./components/NavBar/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SearchedProduct from "./paginas/SearchedProduct/SearchedProduct";
import LoginUser from "./paginas/LoginUser/LoginUser";
import RegistroUsuario from "./paginas/RegistroUsuario/RegistroUsuario";

function App() {
  const navigate = useNavigate()
  const admin = useSelector((state)=> state.adminProfile)
  const [adminPass, setAdminPass] = useState(null)
  useEffect(() => {
    setAdminPass(admin)
}, [admin])
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin' || location.pathname === "/login" || location.pathname === "/registro";
  useEffect(() => {
    if (!adminPass && location.pathname === '/dashboard') {
      navigate('/admin');
    }
  }, [adminPass, location.pathname, navigate]);
  return (
    <>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/registro" element={<RegistroUsuario/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Catalogo />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/searchedprod/:name" element={<SearchedProduct />} />
          <Route path="/carrodecompras" element={<Carrito />} />
          <Route path="/login" element={<LoginUser />}/>
        </Routes>
    </>
  );
}
export default App;

