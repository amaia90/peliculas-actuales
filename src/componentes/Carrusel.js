import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g6bfq26jmzEGNGMw768Fwu6OmdZ.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6StdSKn9ej4rwtQjcl1XMk5E0iE.jpg",
];
function Carrusel() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={false} autoPlay >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Carrusel;