import style from "../../components/BarDashboard/Constru.module.css"
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions"

const FormProduct = () => {
    const dispatch = useDispatch()
    const {handleSubmit, control, formState: {errors}, trigger, setValue} = useForm()
    const createProduct = useSelector(state => state.product_creado)
    const [creado, setCreado] = useState(createProduct)
    const [principal, setPrincipal] = useState("")
    const [carrusel, setCarrusel] = useState([])
    useEffect(() => {
        setCreado(createProduct);
      }, [createProduct]);
    const [showPercentageInput, setShowPercentageInput] = useState(false);
    const currentDate = new Date().toISOString().substr(0, 10);
    const togglePercentageInput = (value) => {
        setShowPercentageInput(value);
      };
      const handleCarruselChange = async (e) => {
        const files = e.target.files;
        let formData = new FormData();
        const uploadedImageUrls = []; // Arreglo para almacenar las URLs de las imágenes cargadas
      
        if (files.length > 0) {
          const arrayOfFiles = Array.from(files);
      
          // Utiliza Promise.all para realizar todas las solicitudes en paralelo
          await Promise.all(
            arrayOfFiles.map(async (file) => {
              formData = new FormData(); // Crea un nuevo formData para cada archivo
              formData.append("file", file);
              formData.append("upload_preset", "to62brlp");
      
              try {
                const res = await fetch("https://api.cloudinary.com/v1_1/dgxp4c4yk/image/upload", {
                  method: "POST",
                  body: formData,
                });
      
                if (res.status === 200) {
                  const data = await res.json();
                  uploadedImageUrls.push(data.secure_url); // Agrega la URL al arreglo
                } else {
                  console.error("Error al cargar el archivo a Cloudinary:", res.statusText);
                }
              } catch (error) {
                console.error("Error en la solicitud:", error);
              }
            })
          );
      
          // Una vez que todas las solicitudes se completen, actualiza el estado Carrusel
          setCarrusel(uploadedImageUrls);
        }
      };
      
    const handleImageChange = async (e) => {
        const files = e.target.files; // Cambiar de e.target.value a e.target.files
        const formData = new FormData();
        if (files.length > 0) { // Verifica si se seleccionó al menos un archivo
          formData.append("file", files[0]);
          formData.append("upload_preset", "to62brlp");
      
          try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dgxp4c4yk/image/upload", 
            { method: "POST",
            body:formData});
            console.log(res);
            if (res.status === 200) {
            const data = await res.json();
            setPrincipal(data.secure_url)
            } else {
              console.error("Error al cargar el archivo a Cloudinary:", res.statusText);
            }
          } catch (error) {
            console.error("Error en la solicitud:", error);
          }
        }
      };
    const categorias = [
        { id: 1, nombre: 'Categoría 1' },
        { id: 2, nombre: 'Categoría 2' },
        { id: 3, nombre: 'Categoría 3' },
    ];
    console.log(carrusel.length);
    const onSubmit = async (data) => {
        data.firstImage = principal
        data.carrouselImage = carrusel
        console.log(data)
        dispatch(actions.createProd(data))
    }
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
                    {principal && (<div><img src={principal} alt="Vista previa" style={{maxWidth: '50px' }} />
                    </div>)}
                </div>
                <div>
                    <label htmlFor="carrouselImage">Imagen del producto</label>
                    <Controller
                    name="carrouselImage"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio',}}
                    render={({ field }) => (
                    <input
                    type="file"
                    multiple
                    accept="image/jpeg, image/png, image/gif, image/svg+xml, image/webp"
                    onChange={(e) => { field.onChange(e);
                        trigger('firstImage')
                        handleCarruselChange(e)
                        }}
                    />
                    )}/>
                    {errors.firstImage && <p>{errors.firstImage.message}</p>}
                    {carrusel.length > 0 && (<div>{carrusel.map((carru)=>(<img src={carru} alt="Vista previa" style={{maxWidth: '50px' }} />))}
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
                    defaultValue="0"
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <div>
                        <select {...field}>
                            <option value="0" disabled> Seleccione un %</option>
                            {[...Array(19)].map((_, index) => (
                            <option key={index} value={(index + 1) * 5}> {(index + 1) * 5}% </option>
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
                <div>
                {creado === true ? (<><span>Producto creado</span></>) : (creado === false ? (<><span>No pudo crearse el producto</span></>) : null)}
                </div>
            <button type="submit" >Crear Producto</button>
            </form>
        </div>
    )
}
export default FormProduct