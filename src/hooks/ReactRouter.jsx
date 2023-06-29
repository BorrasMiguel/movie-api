import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estrenos from "../components/Estrenos";
import Detalles from "../components/Detalles";


export default function ReactRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Estrenos />} />
            <Route path="/pelicula/:id" element={<Detalles />} />         
        </Routes>
    </BrowserRouter>
  )
}
