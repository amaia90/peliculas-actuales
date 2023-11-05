
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimacionCarga } from "../paginas/AnimacionCarga";
import { DetallesPeliculas } from "../paginas/DetallesPeliculas";

export function MisRutas(){
    return(<Router>
        <Routes>
            <Route exact path="/" element={<AnimacionCarga/>}/>
            <Route exact path="/movies/:movieId" element={<DetallesPeliculas/>}/>

            
        </Routes>
    </Router>
    )
}