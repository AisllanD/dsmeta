import logo from "../../assets/img/logo.svg";
import './styles.css'

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por:  <blockquote></blockquote>  
            <a href="https://github.com/AisllanD" target="_blank">
              @AisllanD.github
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
