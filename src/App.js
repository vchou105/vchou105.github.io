import logo from './logo.svg';
import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom'
import Home from "./components/Home";
import Nav from "./components/Nav.js";
import Hannas from "./components/Hannas.js";
import Walkathon from "./components/Walkathon.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-dark"> */}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hannas' element={<Hannas/>} />
          <Route path='/walkathon' element={<Walkathon />} />
        </Routes>
        {/* <span className="">🥐🥞🍦🍰</span> */}
      {/* </header> */}
    </div>
  );
}

export default App;
