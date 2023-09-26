

export const validate =(formData,page)=>{
    const errors = {}
    if(page===0){
        if (!formData.name) {
          errors.name = "El nombre es obligatorio.";
        } else if (formData.name.length < 3) {
          errors.name = "El nombre debe tener al menos 3 caracteres.";
        } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
          errors.name = "El nombre solo debe contener letras.";
        }
        
          // Validación para el campo 'lastName' (si es necesario)
          if (!formData.lastName) {
            errors.lastName = "El apellido es obligatorio.";
          } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
            errors.lastName = "El apellido solo debe contener letras.";
          }
        
          if (!formData.phoneNumber) {
            errors.phoneNumber = "El número de teléfono es obligatorio.";
          } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = "El número de teléfono debe contener exactamente 10 dígitos.";
          }
          
          // Validación para el campo 'dni'
          if (!formData.dni) {
            errors.dni = "El CC / DNI es obligatorio.";
          } else if (!/^\d{10}$/.test(formData.dni)) {
            errors.dni = "El CC / DNI debe contener exactamente 10 dígitos.";
          }
    }else{
        if(!formData.place){
          errors.place="seleccionar una opcion"
        }
    }
    
      // Validación para otros campos según sea necesario
    
      return errors;
}