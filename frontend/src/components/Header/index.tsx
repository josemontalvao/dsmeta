import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="dsmeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a
                        href="https://www.linkedin.com/in/jos%C3%A9-antonio-montalv%C3%A3o-aa16aa92/">@JoséAntonioMontalvão.in</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;