import React from "react";
import Home from "./components/Home";
import Atendimentos from "./components/Atendimentos";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./css/App.css"
import "./css/Home.css"
import "./css/Modal.css"
import "./css/Form.css"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/atendimentos" element = {<Atendimentos />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
