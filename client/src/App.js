import "./App.css";
import Home from "./paginas/Home/Home";
import Catalogo from "./paginas/Catalogo/Catalogo"
import Dashboard from "./paginas/DashBoard/Dashboard"
import DetailPage from "./paginas/DetailPage/DetailPage";
import LoginAdmin from "./paginas/LoginAdmin/LoginAdmin"
import Home from "./paginas/Home/Home"
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/productos" element={<Catalogo/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/admin" element={< LoginAdmin/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </>
  );
}

export default App;
