import "./App.css";
import Landing from "./Paginas/Landing/Landing";
import Home from "./Paginas/Home/Home";
import Form from "./Paginas/Form/Form";
import Detail from "./Paginas/Detail/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
{/*         <Route path="/home" element={<Home />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
