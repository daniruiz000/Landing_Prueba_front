// fetchFunction.js
import { NavigateFunction } from "react-router-dom"; // Asegúrate de importar NavigateFunction

export const fetchFunction = async (formData: FormData, navigate: NavigateFunction) => {
  try {
    const response = await fetch("https://landing-promo-prueba-api.onrender.com/user/add-user", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      alert(`Error: ${response.status} - ${response.statusText}\n${errorText}`);
    }
  } catch (error: any) {
    alert(`Error en fetchFunction: ${error.message}`);
  }
};
