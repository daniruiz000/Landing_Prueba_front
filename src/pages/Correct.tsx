import React from "react";
import Calabaza from "../assets/img/calabaza-smile.svg";
import { useNavigate } from "react-router-dom";
const Correct = (): React.JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="correct">
      <div className="header">
        <h2 className="header_title"> Usuario registrado.</h2>
        <h2 className="header_title"> Muchas gracias por participar.</h2>
        <img className="container-down_calabaza" src={Calabaza} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Correct;
