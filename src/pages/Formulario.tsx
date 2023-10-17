import React, { useState, ChangeEvent, FormEvent } from "react";
import "../styles/layouts/Formulario.scss"; // Importa tu archivo SCSS
import { useNavigate } from "react-router";
import { fetchFunction } from "../utils/fetchFunction";
import { añadirDatos, verificarFormularioCompleto } from "../utils/dataUtils";

const Formulario = (): React.JSX.Element => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    segundo_apellido: "",
    email: "",
    telefono: "",
    foto: null as File | null, // Para almacenar la foto seleccionada
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleFotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const foto = event.target.files?.[0] ?? null;
    setDatos({ ...datos, foto });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const formRellenado = verificarFormularioCompleto(datos);
      if (formRellenado) {
        const formData = añadirDatos(datos);
        const response = await fetchFunction(formData, navigate);
        if (response) {
          navigate("/correct");
        }
      } else {
        alert("Faltan rellenar alguno de los datos");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo-div">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={datos.nombre} onChange={handleInputChange} />
        </div>
        <div className="campo-div">
          <label>Apellido:</label>
          <input type="text" name="apellido" value={datos.apellido} onChange={handleInputChange} />
        </div>
        <div className="campo-div">
          <label>Segundo Apellido:</label>
          <input type="text" name="segundo_apellido" value={datos.segundo_apellido} onChange={handleInputChange} />
        </div>
        <div className="campo-div">
          <label>Email:</label>
          <input type="email" name="email" value={datos.email} onChange={handleInputChange} />
        </div>
        <div className="campo-div">
          <label>Telefono:</label>
          <input type="tel" name="telefono" value={datos.telefono} onChange={handleInputChange} />
        </div>
        <div className="campo-div">
          <label>Subir Foto:</label>
          <input type="file" name="foto" accept="image/*" onChange={handleFotoChange} />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
