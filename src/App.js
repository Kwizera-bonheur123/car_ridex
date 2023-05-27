import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Cards';
import Rent from './components/Rent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rent' element={<Rent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
