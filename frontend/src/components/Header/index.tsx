import logo from "../../assets/img/logo.svg";
import logoGithub from "../../assets/img/icon_Github.svg";
import logoLinkedin from "../../assets/img/iconLinkedin.svg"
import './styles.css'

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por: Aisllan
          </p>
          <p className="links">

            <a href="https://github.com/AisllanD" target="_blank">
              <img  src={logoGithub} alt="github" />
            </a>

            <a href="https://www.linkedin.com/in/aisllan-bezerra-993ba11a4/" target="_blank">
              <img src={logoLinkedin} alt="linkedin" />
            </a>

          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
