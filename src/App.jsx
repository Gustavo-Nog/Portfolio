import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contato" element={<Contato/> } />
      </Routes>
    </BrowserRouter>
  )

}

export default App;