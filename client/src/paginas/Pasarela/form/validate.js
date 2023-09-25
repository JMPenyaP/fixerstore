

export const validate =(formData)=>{
    const errors = {}

    if (!formData.name) {
        errors.name = "El nombre es obligatorio.";
      } else if (formData.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";
      }
    
      // Validación para el campo 'lastName' (si es necesario)
      if (!formData.lastName) {
        errors.lastName = "El apellido es obligatorio.";
      }
    
      // Validación para el campo 'phoneNumber'
      if (!formData.phoneNumber) {
        errors.phoneNumber = "El número de teléfono es obligatorio.";
      } else if (!/^\d+$/.test(formData.phoneNumber)) {
        errors.phoneNumber = "El número de teléfono debe contener solo dígitos.";
      }
    
      // Validación para el campo 'dni'
      if (!formData.dni) {
        errors.dni = "El CC / DNI es obligatorio.";
      } else if (!/^\d+$/.test(formData.dni)) {
        errors.dni = "El CC / DNI debe contener solo dígitos.";
      }
    
      // Validación para otros campos según sea necesario
    
      return errors;
}