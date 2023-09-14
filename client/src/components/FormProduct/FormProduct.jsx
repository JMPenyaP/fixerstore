import style from "../../components/BarDashboard/Constru.module.css"
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from "react-redux"
import * as actions from "../../redux/actions"


const FormProduct = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, control, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data);
        //dispatch(actions.createProd(data))
    }
    const categorias = [
        { id: 1, nombre: 'Categoría 1' },
        { id: 2, nombre: 'Categoría 2' },
        { id: 3, nombre: 'Categoría 3' },
    ];
    return (
        <div className={style.div}>
            <h2 className={style.titulo}>Crear producto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nombre">Nombre del producto</label>
                    <Controller name="nombre"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => <input {...field} />}
                    />
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>
                <div>
                    <label htmlFor="nombre">Categoria</label>
                <Controller
                name="categoria"
                control={control}
                defaultValue=""
                rules={{ required: 'Seleccione una categoría' }}
                render={({ field }) => (
                <select {...field}>
                    <option value="" disabled>
                        Seleccione una categoría
                        </option>
                        {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}</option>))}
                </select>)} />{errors.categoria && <p>{errors.categoria.message}</p>}
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <Controller
                    name="precio"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^\d+(\.\d{1,2})?$/,
                            message: 'Ingrese un precio válido (ejemplo: 19.99)',},
                        }}
                    render={({ field }) => <input {...field} />}
                    />
                    {errors? (errors.precio && <p>{errors.precio.message}</p>):(null)}
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <Controller
                    name="descripcion"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => <textarea {...field} />}
                    />
                    {errors? (errors.descripcion && <p>{errors.descripcion.message}</p>):(null)}
            </div>
            <button type="submit" disabled= {errors ? true:false}>Crear Producto</button>
            </form>
        </div>
    )
}


export default FormProduct





// {

//     "name": "Tinta",
//     "categoryId": 1,
//     "firstImage": "image",
//     "carrouselImage": "images",
//     "description": "producto para tenir zapatos",
//     "date": "01-18-2023",
//     "priceOfList": 5,
//     "statusOffer": false,
//     "offer": 10,
//     "status": false,
//     "stock": 15
  
//   }