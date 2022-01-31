import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/> 
        {/* <span className="">🥐🥞🍦🍰</span> */}
      </header>
    </div>
  );
}

export default App;
