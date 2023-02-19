
import './App.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Main/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aopd" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
