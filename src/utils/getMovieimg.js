import placeholder from "../images/placeholder.png"
export function getMovieimg(path, width){
    return path?  `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}

//const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path;
 