export interface Datos {
  nombre: string;
  apellido: string;
  segundo_apellido: string;
  email: string;
  telefono: string;
  foto: File | null;
}
export const añadirDatos = (datos: Datos) => {
  const formData = new FormData();

  formData.append("nombre", datos.nombre);
  formData.append("apellido", datos.apellido);
  formData.append("segundo_apellido", datos.segundo_apellido);
  formData.append("email", datos.email);
  formData.append("telefono", datos.telefono);

  if (datos.foto) {
    formData.append("foto", datos.foto);
  }
  return formData;
};

export const verificarFormularioCompleto = (datos: Datos) => {
  if (datos.nombre.trim() !== "" && datos.apellido.trim() !== "" && datos.segundo_apellido.trim() !== "" && datos.email.trim() !== "" && datos.telefono.trim() !== "") {
    return true;
  } else {
    return false;
  }
};
