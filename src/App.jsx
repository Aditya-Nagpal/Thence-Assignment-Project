import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import GetProjects from './pages/GetProjects';
import SuccessPage from "./pages/SuccessPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/get-projects' element={<GetProjects />} />
        <Route path='/success-page' element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
