import api from "../assets/api.svg";
import "../Styles/Header.css";

export default function Header() {
    return (
      <div className="Header">
        <h1> <span className="Title-color">Movie</span>Browser</h1>
        <img src={api} alt="movie icon" className="Header-api-icon" />
      </div>
    );
}