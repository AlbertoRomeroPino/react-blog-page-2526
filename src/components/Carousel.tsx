import { useState } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";
import CarouselImages from "./CarouselImages";
import CarouselIndicators from "./CarouselIndicators";

interface CarouselProps {
  imagenes: string[],
  mostrarBotones?: boolean,
  mostrarIndicadores?: boolean,
  ciclo?: boolean
}

function Carousel({ imagenes, mostrarBotones=true, mostrarIndicadores=true, ciclo=true }: CarouselProps) {
  const [indiceActivo, setIndiceActivo] = useState(0);
  return (
    <div className="carousel-container">
      <CarouselImages imagenes={imagenes} indiceActivo={indiceActivo} />
      { mostrarBotones && <CarouselControls
        indiceActivo={indiceActivo}
        setIndiceActivo={setIndiceActivo}
        cantidadImagenes={imagenes.length}
        ciclo={ciclo}
      /> }
      { mostrarIndicadores && <CarouselIndicators
        indiceActivo={indiceActivo}
        setIndiceActivo={setIndiceActivo}
        cantidadImagenes={imagenes.length}
      />}
    </div>
  );
}

export default Carousel;
