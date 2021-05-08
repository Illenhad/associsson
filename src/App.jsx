import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routes from "./services/Routes";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <header className="App-header">
                    <Routes/>
                </header>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
