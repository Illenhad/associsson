import logo from './logo.png';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProjectList from "./container/ProjectList/ProjectList"
function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Site en cours de construction.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/Illenhad/associsson"
                    rel="author"
                >
                    Suivez-nous
                </a>
            </header>*/}
                <ProjectList/>
            
            <Footer/>
        </div>
    );
}

export default App;
