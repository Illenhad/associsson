import logo from './logo.png';
import './App.css';
import LogiquePopup from './Components/PopupLogin_SignUp/LogiquePopup.js'
import Popup from './Components/PopupLogin_SignUp/Popup.js'

function App() {
  const {revele,toggle} = LogiquePopup();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projet en cours de construction.
        </p>
        <a
          className="App-link"
          href="https://github.com/Illenhad/associsson"
          target="_blank"
          rel="author"
        >
          Suivez-nous
        </a>
        <button onClick={toggle}>Log in</button>
      <Popup
        revele={revele}
        cache={toggle}
      />
      </header>
    </div>
  );
}

export default App;
