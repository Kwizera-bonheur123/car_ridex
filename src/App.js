import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Cards';
import Layout from './components/Layout';
import Cards from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cards />}></Route>
      </Routes>
    </div>
  );
}

export default App;
