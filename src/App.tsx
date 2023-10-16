import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Formulario from "./pages/Formulario";

const App = (): React.JSX.Element => {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
