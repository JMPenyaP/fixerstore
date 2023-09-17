
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions"
import style from "./FormProduct.module.css"

const FormProduct = () => {
    const dispatch = useDispatch()
    const {handleSubmit, control, formState: {errors}, trigger, setValue} = useForm()
    const createProduct = useSelector(state => state.createdProduct)
    const categories = useSelector(state => state.allCategories)
    const [categorias, setCategorias] =useState([
      { id: 1, name: 'Categoría 1' },
      { id: 2, name: 'Categoría 2' },
      { id: 3, name: 'Categoría 3' },
    ])
    const [creado, setCreado] = useState(createProduct)
    const [principal, setPrincipal] = useState("")
    const [carrusel, setCarrusel] = useState([])
    useEffect(() => {
        setCreado(createProduct);
        if (categories) {
          setCategorias(categories)
        }
      }, [createProduct, categories]);
    const [showPercentageInput, setShowPercentageInput] = useState(null);
    const currentDate = new Date().toLocaleDateString('es-CO', { timeZone: 'America/Bogota' });
    const togglePercentageInput = (value) => {
        setShowPercentageInput(value);
      };
    const handleCarruselChange = async (e) => {
      const files = e.target.files;
      let formData = new FormData();
      const uploadedImageUrls = [];
      if (files.length > 0) {
        const arrayOfFiles = Array.from(files);
          await Promise.all(
            arrayOfFiles.map(async (file) => {
            formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "to62brlp");
      
          try {
              const res = await fetch("https://api.cloudinary.com/v1_1/dgxp4c4yk/image/upload", {
                method: "POST",
                body: formData,
              });
              if (res.status === 200) {
                const data = await res.json();
                uploadedImageUrls.push(data.secure_url);
              }
              else {
                console.error("Error al cargar el archivo a Cloudinary:", res.statusText);
              }
            } 
          catch (error) {
              console.error("Error en la solicitud:", error);
            }
          })
          );
        setCarrusel(uploadedImageUrls);
      }
    };
    const handleImageChange = async (e) => {
      const files = e.target.files;
      const formData = new FormData();
      if (files.length > 0) {
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
          }
          else {
            console.error("Error al cargar el archivo a Cloudinary:", res.statusText);
          }
          }
          catch (error) {
            console.error("Error en la solicitud:", error);
          }
      }
    };
    const onSubmit = async (data) => {
      data.firstImage = principal
      data.carrouselImage = carrusel
      dispatch(actions.createProd(data))
    }
    return (
        <div className={style.div}>
            <h2 className={style.titulo}>Crear producto</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="name">Nombre del producto</label>
                    <div className={style.divInput}>
                    <Controller name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El nombre no puede tener más de 30 caracteres'}} }
                    render={({ field }) => (
                    <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
                    <div className={style.errorMenssage}>
                    {errors.name && <p className={style.errorText}>{errors.name.message}</p>}
                    </div>
                    </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="categoryId">Categoria</label>
                    <div className={style.divInput}>
                      <Controller
                    name="categoryId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Seleccione una categoría' }}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("categoryId"); }}> 
                        <option value="" disabled> Seleccione una categoría </option>
                        {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.name}</option>))}
                    </select>)} />
                    <div className={style.errorMenssage}>
                    {errors.categoryId && <p className={style.errorText}>{errors.categoryId.message}</p>}
                    </div>
                    </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="firstImage">Imagen principal del producto</label>
                    <div className={style.divInput}>
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
                    <div className={style.errorMenssage}>
                    {errors.firstImage && <p className={style.errorText}>{errors.firstImage.message}</p>}
                    </div>
                    </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="carrouselImage">Imagenes para carrusel</label>
                    <div className={style.divInput}>
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
                    <div className={style.errorMenssage}>
                      {errors.carrouselImage && <p className={style.errorText}>{errors.carrouselImage.message}</p>}
                    </div>
                    </div>
                </div> 
                <div className={style.divCampo}>
                  <label className={style.label} htmlFor="carrouselImage">Vista previa de imagenes</label>
                  <div>
                    {carrusel.length > 0 && (<div>{carrusel.map((carru)=>(<img src={carru} alt="Vista previa" style={{maxWidth: '50px' }} />))}
                    </div>)}
                    {principal && (<div><img src={principal} alt="Vista previa" style={{maxWidth: '50px' }} />
                    </div>)}
                  </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="priceOfList">Precio del producto</label>
                    <div className={style.divInput}>
                    <p className={style.p}>$</p>
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
                    <input className={style.input} min="0" type="number" {...field} onChange={(e) => {field.onChange(e); trigger('priceOfList'); }}/>)}
                    />
                    <div className={style.errorMenssage}>
                    {errors.priceOfList && <p className={style.errorText} >{errors.priceOfList.message}</p>}
                    </div>
                    </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="descripcion">Descripción:</label>
                    <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio', maxLength: {value: 200,message: 'La descripción no puede tener más de 200 caracteres'}}}
                    render={({ field }) => <textarea className={style.inputext} {...field} onChange={(e) => {field.onChange(e); trigger('description'); }} />}
                    />
                    {(errors.description && <p>{errors.description.message}</p>)}
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="date">Fecha de publicación:</label>
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
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="statusOffer">¿Producto en oferta?</label>
                    <div>
                    <Controller
                    name="statusOffer"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {
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
                </div>
                {showPercentageInput && (
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="offer">Porcentaje de oferta</label>
                    <div className={style.divInput}> 
                    <Controller
                    name="offer"
                    control={control}
                    defaultValue="0"
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <div>
                        <select className={style.select} {...field}>
                            <option value="0" disabled> Seleccione un %</option>
                            {[...Array(19)].map((_, index) => (
                            <option key={index} value={(index + 1) * 5}> {(index + 1) * 5}% </option>
                            ))}
                        </select>
                    </div>
                    )}
                    />
                    {errors.offer && <p>{errors.offer.message}</p>}
                    </div>
                </div>)}
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="status">Estado</label>
                    <div className={style.divInput}>                    
                      <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {
                        field.onChange(e);
                        trigger('status');}}>
                            <option value="" disabled>Seleccione un estado</option>
                            <option value="true">Disponible</option>
                            <option value="false">No disponible</option>
                    </select>)}
                    />
                    {errors.statusOffer && <p>{errors.statusOffer.message}</p>}
                    </div>
                </div> 
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="stock">Stock</label>
                    <div className={style.divInput}> 
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
                        <input className={style.input} {...field} min="0" type="number" placeholder="Ingrese el stock"/>
                    )}
                    />
                    {errors.stock && <p>{errors.stock.message}</p>}
                    </div>
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