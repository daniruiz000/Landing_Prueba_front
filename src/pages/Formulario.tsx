import React, { useState, ChangeEvent, FormEvent } from "react";
import "../styles/layouts/Formulario.scss"; // Importa tu archivo SCSS
import { useNavigate } from "react-router";

const Formulario = (): React.JSX.Element => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    segundo_apellido: "",
    email: "",
    telefono: "",
    dni: "",
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
      const formData = new FormData();
      // Agrega los datos del formulario
      formData.append("nombre", datos.nombre);
      formData.append("apellido", datos.apellido);
      formData.append("segundo_apellido", datos.segundo_apellido);
      formData.append("email", datos.email);
      formData.append("telefono", datos.telefono);
      formData.append("dni", datos.dni);
      // Agrega la foto si está presente
      if (datos.foto) {
        formData.append("foto", datos.foto);
      }

      // Realiza una solicitud POST con los datos y la foto
      const response = await fetch("https://landing-promo-prueba-api.onrender.com/user/add-user", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await response.json();
        console.log("Datos enviados exitosamente:");
        navigate("/correct");
      } else {
        console.error("Error al enviar los datos.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
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
          <label>DNI:</label>
          <input type="text" name="dni" value={datos.dni} onChange={handleInputChange} />
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
