import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filtros() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const categorias = useSelector((state) => state.categorias);
  const toShow = useSelector((state) => state.toShow);

  const [categoria, setCategoria] = useState("Todas");
  const [order, setOrder] = useState("Ninguno");
  const [precio, setPrecio] = useState("Todos");
  /* const [fecha, setFecha] = useState('Ninguna') */

  /* const limpiarFiltros = () => {
    dispatch(filterOptions(productos));
    setCategoria("Todas");
    setPrecio("Todos");
    setOrder("Ninguno");
  };
 */
  return (
    <>
      <div>
        <div>
          <p>Categoría</p>
          <select
            onChange={(event) => handleFilter("categoria", event.target.value)}
            defaultValue="Todas"
            value={categoria}
          >
            <option value="Todas">Todas</option>
            {diets.length &&
              categorias?.map((cat, index) => (
                <option key={index} value={cat.nombre}>
                  {cat.nombre}
                </option>
              ))}
          </select>
        </div>
        <div>
          <p>Nombre</p>
          <select
            onChange={(event) => handleFilter("order", event.target.value)}
            defaultValue="Ninguno"
            value={order}
          >
            <option value="Ninguno" disabled>
              Ninguno
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
        <div>
          <p>Precio</p>
          <select name="" id=""></select>
        </div>
      </div>
    </>
  );
}
