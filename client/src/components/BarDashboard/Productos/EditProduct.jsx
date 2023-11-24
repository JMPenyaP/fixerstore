import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useForm, Controller} from "react-hook-form"
import style from "./edit.module.css"
import { getCategories } from "../../../redux/Actions/getCategories"
import { getAllProducts } from "../../../redux/Actions/getAllProducts"
import axios from "axios"

const EditProduct = (props) => {
    // Importaciones
    const {product, onModify} = props
    const dispatch = useDispatch()
    const {handleSubmit, control, formState: {errors}, trigger, setValue, reset} = useForm()
    //Estados globales
    const createProduct = useSelector(state => state.createdProduct) //Cambiar por Modify Product
    //Categorias
    const categorias = useSelector(state => state.allCategories)
    useEffect(()=> {
      if (categorias.length < 1) {dispatch(getCategories())}
    }, [categorias])
    //Estados locales
    const [creado, setCreado] = useState(createProduct) //Cambiar por modify
    const [principal, setPrincipal] = useState(product.firstImage)
    const [carrusel, setCarrusel] = useState(product.carrouselImage)
    const [createOptions, setCreateOptions] = useState(null)
    const [showPercentageInput, setShowPercentageInput] = useState(product.statusOffer);
    const [mensaje, setMensaje] = useState("")
    //Función ocultar porcentjae
    const togglePercentageInput = (value) => {setShowPercentageInput(value);};
    useEffect(()=> {setCreado(createProduct)}, [createProduct])
    // Función de subir fotos del carrusel
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
    // Función para subir foto principal
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
    // Enviar formulario
    const onSubmit = async (datas) => {
      datas.firstImage = principal
      datas.carrouselImage = carrusel
      if(datas.offer === undefined) {
        datas.offer = "0"
      }
      datas.date = product.date
      try {
        const endpoint = `http://localhost:3001/products/update/${product.id}`
        const response = await axios.patch(endpoint, datas)
        const {data} = response
        const {message} = data
        if(message) {
            setMensaje("Producto actualizado con exito")
        }
        dispatch(getAllProducts())
        setTimeout(()=> {
          onModify()
        }, 1000)
      } 
      catch (error) {
        setMensaje("Hubo un error, intentalo de nuevo") 
      }
    }
    //Renderizado
    return (
        <div className={style.div}>
            <h2 className={style.tituloEdit}>Editar producto: <strong>{product.name}</strong></h2>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
              <div className={style.container}>
              <div className={style.divCampo}>
                    <label className={style.label} htmlFor="name">Nombre del producto</label>
                    <div className={style.divInput}>
                    <Controller name="name"
                    control={control}
                    defaultValue={product.name}
                    rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El nombre no puede tener más de 30 caracteres'}} }
                    render={({ field }) => (
                    <input className={style.input} type="text" {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
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
                    defaultValue={product.categoryId}
                    rules={{ required: 'Seleccione una categoría' }}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("categoryId"); }}> 
                        <option value="" disabled> Seleccione una categoría </option>
                        {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.name.charAt(0).toUpperCase() + categoria.name.slice(1)}</option>))}
                    </select>)} />
                    <div className={style.errorMenssage}>
                    {errors.categoryId && <p className={style.errorText}>{errors.categoryId.message}</p>}
                    </div>
                    </div>
                </div>
                <div className={style.divImagenes}>
                <div className={style.divCampo}>
                  <div className={style.divCampo}>
                    <label className={style.label} htmlFor="firstImage">Imagen principal del producto</label>
                    <div className={style.divInput}>
                    <Controller
                    name="firstImage"
                    control={control}
                    defaultValue={product.firstImage}
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
                    defaultValue={product.firstImage}
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
                  </div>
                <div className={style.divCampo}>
                  <label className={style.label} htmlFor="carrouselImage">Vista previa de imagenes</label>
                  <div className={style.divVistaPrevia}>
                    {carrusel.length > 0 && (<div>{carrusel.map((carru)=>(<img className={style.miniatura} src={carru}  />))}
                    </div>)}
                    {principal !== "" && (<div><img className={style.miniatura} src={principal} alt="Vista previa" />
                    </div>)}
                  </div>
                </div>
                </div>
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="priceOfList">Precio del producto</label>
                    <div className={style.divInput}>
                    {/* <p className={style.p}>$</p> */}
                    <Controller
                    name="priceOfList"
                    control={control}
                    defaultValue={product.priceOfList}
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Ingrese un precio válido (ejemplo: 20000)',},
                        }}
                    render={({ field }) => (
                    <input className={style.input} min="0" type="number" placeholder='$' {...field} onChange={(e) => {field.onChange(e); trigger('priceOfList'); }}/>)}
                    />
                    <div className={style.errorMenssage}>
                    {errors.priceOfList && <p className={style.errorText} >{errors.priceOfList.message}</p>}
                    </div>
                    </div>
                </div>
              </div>
              <div className={style.container}>
              <div className={style.divCampo}>
                <label className={style.label} htmlFor="descripcion">Descripción:</label>
                <div className={style.divInput}>
                    <Controller
                    name="description"
                    control={control}
                    defaultValue={product.description}
                    rules={{ required: 'Este campo es obligatorio', maxLength: {value: 200,message: 'La descripción no puede tener más de 200 caracteres'}, minLength: {value: 50,message: 'La descripción no puede tener menos de 50 caracteres'}}}
                    render={({ field }) => <textarea cols="40"
                    rows="5" className={style.inputext} {...field} onChange={(e) => {field.onChange(e); trigger('description'); }} />}
                    />
                    <div className={style.errorMenssage}>
                    {errors.description && <p className={style.errorText}>{errors.description.message}</p>}
                    </div>
                  </div>
                </div>
                {/* <div className={style.divCampo}>
                    <label className={style.label} htmlFor="date">Fecha de publicación:</label>
                    <div className={style.divInput}>
                    <Controller
                    name="date"
                    control={control}
                    defaultValue={currentDate}
                    rules={{ required: 'Este campo es obligatorio'}}
                    render={({ field }) => (
                    <input type="date" className={style.select} {...field} />
                    )}
                    />
                    <div className={style.errorMenssage}>
                    {errors.date && <p className={style.simbolo}>!</p>}
                    {errors.date && <p className={style.errorText}>{errors.date.message}</p>}
                    </div>
                    </div>
                </div> */}
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="statusOffer">¿Producto en oferta?</label>
                    <div className={style.divInput}>
                    <Controller
                    name="statusOffer"
                    control={control}
                    defaultValue={product.statusOffer}
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {
                        field.onChange(e);
                        trigger('statusOffer');
                        togglePercentageInput(e.target.value === "true");}}>
                            <option value="" disabled> Seleccione un estado</option>
                            <option value="true">En oferta</option>
                            <option value="false">Sin oferta</option>
                    </select>)}
                    />
                    <div className={style.errorMenssage}>
                    {errors.statusOffer && <p className={style.errorText}>{errors.statusOffer.message}</p>}
                    </div>
                    </div>
                </div>
                {showPercentageInput && (
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="offer">Porcentaje de oferta</label>
                    <div className={style.divInput}> 
                    <Controller
                    name="offer"
                    control={control}
                    defaultValue={product.offer}
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
                    <div className={style.errorMenssage}>
                    {errors.offer && <p className={style.errorText}>{errors.offer.message}</p>}
                    </div>
                    </div>
                </div>)}
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="status">Estado</label>
                    <div className={style.divInput}>                    
                      <Controller
                    name="status"
                    control={control}
                    defaultValue={product.status}
                    render={({ field }) => (
                    <select className={style.select} {...field} onChange={(e) => {
                        field.onChange(e);
                        trigger('status');}}>
                            <option value=""disabled>Seleccione un estado</option>
                            <option value="true">Disponible</option>
                            <option value="false">No disponible</option>
                    </select>)}
                    />
                    <div className={style.errorMenssage}>
                    {errors.status && <p className={style.errorText}>{errors.status.message}</p>}
                    </div>
                    </div>
                </div> 
                <div className={style.divCampo}>
                    <label className={style.label} htmlFor="stock">Stock</label>
                    <div className={style.divInput}> 
                    <Controller
                    name="stock"
                    control={control}
                    defaultValue={product.stock}
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Ingresa un valor numérico válido',},}}
                    render={({ field }) => (
                        <input className={style.input} {...field} min="0" type="number" placeholder="Ingrese el stock"/>
                    )}
                    />
                    <div className={style.errorMenssage}>
                    {errors.stock && <p className={style.errorText}>{errors.stock.message}</p>}
                    </div>
                    </div>
                </div>
            <div className={style.mensajeProducto}>
              <button type="submit" className={style.formbutton} >Actualizar producto</button>
              {mensaje !== "" ? (<><p className={style.mensajeCreated}>{mensaje}</p></>):(null)}
            </div>
            </div>
            </form>
            {/* <div className={style.mensajeProducto}>
            {createOptions === true ? (<div className={style.aviso}>
              <button onClick={handleOptionsClean} className={style.formbuttonClean}>Crea otro producto</button>
              <NavLink to="/productos">
              <button className={style.formbuttonClean} onClick={()=> {setCreateOptions(null); handleCleanState()}} >Ir al catalogo</button>
              </NavLink>
            </div>):(null)} */}
            {/* <button className={style.formbuttonClean} onClick={handleYes}>Limpiar/Cancelar</button>
            {botonLimpiar === true ? (<div className={style.aviso}>
              <h5 className={style.mensajeAviso}>¿Seguro que quiere cancelar la subida de productos?</h5>
              <button onClick={handleYes} className={style.botonYes}>Sí</button>
              <button onClick={handleNo} className={style.botonNo} >No</button>
            </div>): (null)} */}
        </div>
    )
}


export default EditProduct