import { useParams } from "react-router-dom"
import { get } from "../info/apiPeticion"
import { useEffect, useState } from "react"
import { getMovieimg } from "../utils/getMovieimg"


 export function DetallesPeliculas(){
   const {movieId}=useParams()
     const [movie, SetMovie]=useState([])
     const [generos, SetGeneros]=useState([])

   
     useEffect(()=>{
         get("/movie/"+movieId).then((data)=>{
             SetMovie(data)
             SetGeneros(data.genres[0])

         })
     }, [movieId])
     const imageUrl=getMovieimg(movie.poster_path, 500)
     return(
     <div className="detalles">
        <img src={imageUrl} className="movieImage"/>
     <div className="detallesTextos"> 
        <p>
            <strong>TITULO:
            {movie.title} </strong>
        </p>
        <p>
            <strong>
            GÉNERO:
            {generos.name}
            </strong>
        </p>
        <p><strong>DESCRIPCIÓN</strong></p>
        {movie.overview}
     </div>
     </div>);
    }
    