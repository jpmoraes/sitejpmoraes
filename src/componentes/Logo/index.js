import logo from "../../imagens/logo.svg";
import './style.css';


function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img"></img>
      <p className="p-Logo">
        <strong>JP</strong>Moraes
      </p>
    </div>
  );
}

export default Logo;
