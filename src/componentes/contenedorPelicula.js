import '../estilos/contenedorPelicula.css';


import { useEffect, useState } from "react"
import { get } from "../info/apiPeticion"
import { Pelicula } from "./pelicula";

export function ContenedorPelicula(){

    const [movies, SetMovies]=useState([]);
    useEffect(()=>{
        get("/discover/movie").then((data)=>{ 
            SetMovies(data.results)
    console.log(data)
    

    });
    },[]);
    

return (
    // <ul>
    // {peliculas ? peliculas.map((movie) =>(<Pelicula key={movie.id} movie={movie}/>)) : null}
    // </ul>
    // <ul>
    //   {peliculas && peliculas.map((movie) =>(<Pelicula movie={movie}/>))}
    // </ul>

    <ul className='contenedor'>
    {movies && movies.map((movie) =>(<Pelicula key={movie.id}movie={movie}/>))}
    </ul>
   

  );


 }