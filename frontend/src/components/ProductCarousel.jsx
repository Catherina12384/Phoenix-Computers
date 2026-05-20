import { useState, useEffect} from "react";
import laptop from "../assets/laptop.png";
import mouse from "../assets/mouse.png";
import cctv from "../assets/cctv.png";
import desktop from "../assets/desktop.png";
import keyboard from "../assets/keyboard.png";
import router from "../assets/router.png";
import headset from "../assets/headset.png";
import printer from "../assets/printer.png";
import projector from "../assets/projector.png";

const carouselItems = [
  { label: "Laptop",    img: laptop },
  { label: "Desktop",   img: desktop },
  { label: "CCTV",      img: cctv },
  { label: "Mouse",     img: mouse },
  { label: "Keyboard",  img: keyboard },
  { label: "Printer",   img: printer },
  { label: "Router",    img: router },
  { label: "Headset",   img: headset },
  { label: "Projector", img: projector },
];

function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden flex items-center justify-center">
      {carouselItems.map((item, i) => (
        <img
          key={i}
          src={item.img}
          alt={item.label}
          className={`absolute w-full h-auto object-contain transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default ProductCarousel;