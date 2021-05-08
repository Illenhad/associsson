import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProjectList from "./container/ProjectList/ProjectList"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                <ProjectList/>
            </header>

            <Footer/>
        </div>
    );
}

export default App;
