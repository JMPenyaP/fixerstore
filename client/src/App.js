import "./App.css";
import Catalogo from "./paginas/Catalogo/Catalogo";
import Dashboard from "./paginas/DashBoard/Dashboard";
import DetailPage from "./paginas/DetailPage/DetailPage";
import LoginAdmin from "./paginas/LoginAdmin/LoginAdmin"
import Home from "./paginas/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SearchedProduct from "./paginas/SearchedProduct/SearchedProduct";

function App() {
  const navigate = useNavigate()
  const admin = useSelector((state) => state.adminProfile)
  const [adminPass, setAdminPass] = useState(null)
  useEffect(() => {
    setAdminPass(admin)
  }, [admin])
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin';
  useEffect(() => {
    if (!adminPass && location.pathname === '/dashboard') {
      navigate('/admin');
    }
  }, [adminPass, location.pathname, navigate]);
  return (
    <>
      <div className="App">
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Catalogo />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="SearchedProd" element={<SearchedProduct />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
