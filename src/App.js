import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Rent from './components/Rent';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Carsales from './components/Carsales'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rent' element={<Rent />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path="/carsales" element={<Carsales />}></Route>
      </Routes>
    </div>
  );
}

export default App;
