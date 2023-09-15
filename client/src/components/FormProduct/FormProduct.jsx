import style from "../../components/BarDashboard/Constru.module.css"
import { useForm, Controller } from 'react-hook-form';
import { useState} from "react"
import { useDispatch } from "react-redux"
import * as actions from "../../redux/actions"


const FormProduct = () => {
    const dispatch = useDispatch()
    const {handleSubmit, control, formState: {errors}, trigger, setValue} = useForm()
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPercentageInput, setShowPercentageInput] = useState(false);
    const currentDate = new Date().toISOString().substr(0, 10);
    const togglePercentageInput = (value) => {
        setShowPercentageInput(value);
      };
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file))
        setValue('firstImage', file)
      }
    };
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
                    <label htmlFor="name">Nombre del producto</label>
                    <Controller name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <input type="text" {...field} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="categoryId">Categoria</label>
                    <Controller
                    name="categoryId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Seleccione una categoría' }}
                    render={({ field }) => (
                    <select {...field} onChange={(e) => {field.onChange(e); trigger("categoryId"); }}> 
                        <option value="" disabled> Seleccione una categoría </option>
                        {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}</option>))}
                    </select>)} />
                    {errors.categoryId && <p>{errors.categoryId.message}</p>}
                </div>
                <div>
                    <label htmlFor="firstImage">Imagen del producto</label>
                    <Controller
                    name="firstImage"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio',}}
                    render={({ field }) => (
                    <input
                    type="file"
                    accept="image/jpeg, image/png, image/gif, image/svg+xml, image/webp"
                    onChange={(e) => { field.onChange(e);
                        trigger('firstImage')
                        handleImageChange(e)
                        }}
                    />
                    )}/>
                    {errors.firstImage && <p>{errors.firstImage.message}</p>}
                    {selectedImage && (<div><img src={selectedImage} alt="Vista previa" style={{ maxWidth: '50px' }} />
                    </div>)}
                </div>     
                <div>
                    <label htmlFor="priceOfList">Precio del producto</label>
                    <p>$</p>
                    <Controller
                    name="priceOfList"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^\d+(\.\d{1,2})?$/,
                            message: 'Ingrese un precio válido (ejemplo: 20000)',},
                        }}
                    render={({ field }) => (
                    <input {...field} onChange={(e) => {field.onChange(e); trigger('priceOfList'); }}/>)}
                    />
                    {errors.priceOfList && <p>{errors.priceOfList.message}</p>}
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio', maxLength: {value: 200,message: 'La descripción no puede tener más de 200 caracteres'}}}
                    render={({ field }) => <textarea {...field} onChange={(e) => {field.onChange(e); trigger('description'); }} />}
                    />
                    {(errors.description && <p>{errors.description.message}</p>)}
                </div>
                <div>
                    <label htmlFor="date">Fecha de publicación:</label>
                    <Controller
                    name="date"
                    control={control}
                    defaultValue={currentDate}
                    render={({ field }) => (
                    <input type="date" {...field} />
                    )}
                    />
                    {(errors.date && <p>{errors.date.message}</p>)}
                </div>
                <div>
                    <label htmlFor="statusOffer">¿Producto en oferta?</label>
                    <Controller
                    name="statusOffer"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <select {...field} onChange={(e) => {
                        field.onChange(e);
                        trigger('statusOffer');
                        togglePercentageInput(e.target.value === 'true');}}>
                            <option value="" disabled> Seleccione un estado</option>
                            <option value="true">En oferta</option>
                            <option value="false">Sin oferta</option>
                    </select>)}
                    />
                    {errors.statusOffer && <p>{errors.statusOffer.message}</p>}
                </div>
                {showPercentageInput && (
                <div>
                    <label htmlFor="offer">Porcentaje de oferta</label>
                    <Controller
                    name="offer"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <div>
                        <select {...field}>
                            <option value="" disabled> Seleccione un %</option>
                            {[...Array(19)].map((_, index) => (
                            <option key={index} value={(index + 1) * 5/100}> {(index + 1) * 5}% </option>
                            ))}
                        </select>
                    </div>
                    )}
                    />
                    {errors.offer && <p>{errors.offer.message}</p>}
                </div>)}
                <div>
                    <label htmlFor="status">Estado</label>
                    <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <select {...field} onChange={(e) => {
                        field.onChange(e);
                        trigger('status');
                        togglePercentageInput(e.target.value === 'true');}}>
                            <option value="" disabled> Seleccione un estado</option>
                            <option value="true">Disponible</option>
                            <option value="false">No disponible</option>
                    </select>)}
                    />
                    {errors.statusOffer && <p>{errors.statusOffer.message}</p>}
                </div> 
                <div>
                    <label htmlFor="stock">Stock</label>
                    <Controller
                    name="stock"
                    control={control}
                    defaultValue= "0"
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Ingresa un valor numérico válido',},}}
                    render={({ field }) => (
                        <input {...field} type="number" placeholder="Ingrese el stock"/>
                    )}
                    />
                    {errors.stock && <p>{errors.stock.message}</p>}
                </div>
            <button type="submit" >Crear Producto</button>
            </form>
        </div>
    )
}
export default FormProduct



// carrouselImage
