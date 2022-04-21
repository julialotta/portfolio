import logo from "../assets/logo.png";
import smalllogo from "../assets/smalllogo.png";
import hero from "../assets/img/JL01.png";
function Header() {
  return (
    <header className="headerContainer">
      <div className="topMenu">
        <img className="logo" src={logo} alt="Logo" />
        <img className="smalllogo" src={smalllogo} alt="Logo" />
        <div className="burgerMenu"></div>
        <ul className="menu">
          <li>
            <a href="#Om">Om</a>
          </li>
          <li>
            <a href="#Projekt">Projekt</a>
          </li>
          <li>
            <a href="#Kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
      <div className="hero">
        <h2>Välkommen</h2>
        <img className="hero" src={hero} alt="Tingloef" />
      </div>
    </header>
  );
}

export default Header;
