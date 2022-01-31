import logo from './logo.svg';
import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom'
import Home from "./components/Home";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-dark"> */}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        {/* <span className="">🥐🥞🍦🍰</span> */}
      {/* </header> */}
    </div>
  );
}

export default App;
