import logo from '../images/netflims.png';
import '../styles/Header.css'


function Header() {
    return (
      <div>
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

export default Header