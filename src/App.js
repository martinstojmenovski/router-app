
import './App.css';
import {Routes, Route, Link, } from "react-router-dom"
import About from './Components/About';
import Home from './Components/Home';
import Stocks from './Components/Stocks'

function App() {
  return (
    <div className="App">
     <nav>
      <Link to='/'>
        <h1>iStocks</h1>
      </Link>
      <Link to='/AboutPage'>
      <h1>About</h1>
      </Link>
      <Link to='/Stocks'>
      <h1>Stocks</h1>
      </Link>
     </nav>
     <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='AboutPage' element={<About/>} />
          <Route path='Stocks' element={<Stocks/>} />
        </Routes>
     </main>
    </div>
  );
}

export default App;
