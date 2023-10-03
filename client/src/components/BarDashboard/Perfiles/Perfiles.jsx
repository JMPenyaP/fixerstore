import style from "./Perfiles.module.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../redux/Actions/getAllUsers"
import { useForm, Controller } from 'react-hook-form';
import { createUser, closeUser } from "../../../redux/Actions/createUser"
import axios from "axios";


const Perfiles = () => {
    const {handleSubmit, control, formState: {errors}, trigger, reset, watch} = useForm()
    const dispatch = useDispatch()
    const [adminUsers, setAdminUsers] = useState([])
    const [mensaje, setMensaje] = useState("")
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [createUsers, setCreateUsers] = useState(false)
    const registro = useSelector((state) => state.registerConfirm);
    const [confirmRegistro, setConfirmRegistro] = useState(null);
    const [formDisabled, setFormDisabled] = useState(false);
    useEffect(() => {
        try {
            setConfirmRegistro(registro);
        } catch (error) {
            console.error('Error al obtener registro:', error);}}, [registro]);
    const handleNewUser = () => {
        if (createUsers) {
            setCreateUsers(false)
        }
        else {
            setCreateUsers(true)
        }
    }
    useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);
    const allUsersGlobal = useSelector((state) => (state.allUsers ?? null ))
    useEffect(()=> {
        if (allUsersGlobal.length > 0) {
            setAdminUsers(allUsersGlobal.filter((user) => user.role === "admin"))}
    }, [allUsersGlobal])
    const [deleteUser, setDeleteUser] = useState(false)
    const [idDelete, setIdDelete] = useState("")
    const handleDelete = (id) => {
      if(deleteUser) {
        setDeleteUser(false)
        setIdDelete("")
      }
      else {
        setDeleteUser(true)
        setIdDelete(id)
      }
    }
    const verifyEmail = async (email) => {
        try {
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
            console.log(res.data.success)
            const { success } = res.data;
            if (success === true) {
                return true
            }
            else {
                return false
            }
        } catch (error) {
            return error.message;
        }
    }
    const handlePermanentDelete = async (id) => {
        try {
          const endpoint = `http://localhost:3001/users/delete`
          const usuario = {id: id}
          const response = await axios.delete(endpoint, {data: usuario})
          console.log(response);
          const {data} = response
          const {message} = data
          if(message) {
              setMensaje("Usuario eliminado con éxito")
          }
        } 
        catch (error) {
          setMensaje("Hubo un error, intentalo de nuevo") 
        }
        setTimeout(()=> {
          dispatch(getAllUsers())
          setDeleteUser(false)
          setMensaje("")
        }, 1500)
    }
    const generatePassword = () => {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
      const passwordLength = 8;
      let password = '';
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
      setGeneratedPassword(password);
    };
    const onSubmit = async (data) => {
        setFormDisabled(true);
        data.password = generatedPassword;
        data.role = "admin";
        try {
          await dispatch(createUser(data));
          dispatch(closeUser());
          setConfirmRegistro(null);
          setFormDisabled(false);
          setCreateUsers(false);
          await dispatch(getAllUsers());
        } catch (error) {
          console.error("Error al crear usuario:", error);
          setFormDisabled(false);
        }
        reset()
      };
    return (
        <div className={style.contenedor}>
          <div className={style.divComplementario}>
            <h5 className={style.tituloProduct}>Administra tus perfiles</h5>
          </div>
          <div className={style.divTabla}>
            <table className={style.table}>
              <tr className={style.tr}>
                <th className={style.th}>Rol</th>
                <th className={style.th}>Email</th>
                <th className={style.th}>Nombre</th>
                <th className={style.th}>Apellido</th>
                <th className={style.th}>Acciones</th>
              </tr>
              {adminUsers.map((user) => ( <>
                <tr className={style.tr} key={user.id}>
                  <td className={style.td}>{user.role}</td>
                  <td className={style.td}>{user.email}</td>
                  <td className={style.td}>{user.name}</td>
                  <td className={style.td}>{user.surname}</td>
                  <td className={style.tdetail}>
                    <button className={style.botonDelete} disabled={deleteUser} onClick={() => handleDelete(user.id)}> Eliminar </button>
                  </td>
                </tr>
                {deleteUser === true && idDelete === user.id && (
                <tr className={style.tr} key={user.id}>
                    <td colSpan="5">
                        <div className={style.mensajeDelete}>
                            <p className={style.mensajeConfirmacion}> ¿Desea eliminar el usuario <strong>{user.name + " " + user.surname}</strong>? Esta acción es permanente </p>
                            <button className={style.botonDeleteConfirm} onClick={() => handlePermanentDelete(user.id)}>Eliminar</button>
                            <button className={style.botonCancelConfirm} onClick={() => handleDelete(user.id)}>Cancelar</button>
                        </div>
                        <div className={style.mensajeDelete}>
                            {mensaje !== "" ? (<><p className={style.mensajeCreated}>{mensaje}</p></>) : null}
                        </div>
                    </td>
                </tr>)}
                </>))}
            </table>
            </div>
            <div className={style.newUser}>
                {createUsers === false ? (<button className={style.formbutton} onClick={handleNewUser}> + Nuevo usuario</button>):(<button className={style.formbutton} onClick={handleNewUser}> Cerrar </button>)}
                {createUsers === true ? (
                    <div>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={style.divDatos}>
                                <div className={style.divCampo}>
                                    <label className={style.label} htmlFor="name">Nombre completo</label>
                                    <div className={style.divInput}>
                                        <Controller name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El nombre no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El nombre no puede tener menos de 4 caracteres'}} }
                                        render={({ field }) => (
                                        <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
                                        <div className={style.errorMenssage}>
                                            {errors.name && <p className={style.errorText}>{errors.name.message}</p>}
                                        </div>
                                    </div>
                                </div> 
                                <div className={style.divCampo}>
                                    <label className={style.label} htmlFor="surname">Apellido completo</label>
                                    <div className={style.divInput}>
                                        <Controller name="surname"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El apellido no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El apellido no puede tener menos de 4 caracteres'}} }
                                        render={({ field }) => (
                                        <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("surname"); }}/>)}/>
                                        <div className={style.errorMenssage}>
                                            {errors.surname && <p className={style.errorText}>{errors.surname.message}</p>}
                                        </div>
                                    </div>
                                </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="email"> Correo electronico </label>
                            <div className={style.divInput}>
                                <Controller name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                      message: 'Este no es un correo electrónico válido',
                                    },
                                    validate: async (value) => {
                                        try {
                                          const success = await verifyEmail(value);
                                          if (success === true) {
                                            return "Este correo ya está registrado, intenta con uno nuevo";
                                          } else {
                                            return true;
                                          }
                                        } catch (error) {
                                          console.error("Error al verificar el correo:", error);
                                          return "Error al verificar el correo";
                                        }
                                      }
                                }}
                                render={({ field }) => (
                                    <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("email")}}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                            <button type="submit" className={style.formbutton} disabled={formDisabled} onClick={generatePassword} >Crear usuario</button>
                            {confirmRegistro === true ? (<><p className={style.positivo}>Usuario registrado con exito</p></>):(confirmRegistro === false ? (<><p className={style.negativo} >No se pudo registrar, vuelve a intentarlo</p></>):(null))}
                        </div>
                        </form>
                    </div>):(null)}
            </div>
        </div>
      );
}

export default Perfiles