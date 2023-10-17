// fetchFunction.js
import { NavigateFunction } from "react-router-dom"; // Asegúrate de importar NavigateFunction

export const fetchFunction = async (formData: FormData, navigate: NavigateFunction) => {
  try {
    const response = await fetch("https://landing-promo-prueba-api.onrender.com/user/add-user", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Si la respuesta es exitosa, espera la conversión a JSON y muestra una alerta con un mensaje de éxito.
      return true;
    } else {
      // Si la respuesta no es exitosa, recupera el mensaje de error de la respuesta y muestra una alerta con ese mensaje.
      const errorText = await response.text();
      alert(`Error: ${response.status} - ${response.statusText}\n${errorText}`);
    }
  } catch (error: any) {
    // Captura cualquier error en el proceso de la solicitud o conversión JSON y muestra una alerta con el mensaje de error.
    alert(`Error en fetchFunction: ${error.message}`);
  }
};
