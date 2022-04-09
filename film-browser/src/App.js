import logo from './netflims.PNG';
import './App.css';

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Netflims</h1>
      </header>
    </div>
  );
}
export default Header;
