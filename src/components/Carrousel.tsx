import { useAnimation, motion } from 'motion/react';
import { FC, useEffect, useRef, useState } from 'react';

export interface CarouselItem {
  id: number;
  src: string;
  title: string;
  link?: string;
  description?: string;
  tags?: string[];
}

interface Props {
  items: CarouselItem[];
}

const Carrousel: FC<Props> = ({ items }) => {
  const [isMovingForward, setIsMovingForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const carruselRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<number>(0);


  

  useEffect(() => {
    const desplazamientos = carruselRef.current?.clientWidth === 960 ? items.length - 3 : items.length - 1;
    
    const maxOffset = 320 * (desplazamientos); // Desplazamiento máximo permitido
    const moveCarousel = () => {
      let x = positionRef.current;

      if (isMovingForward) {
        x -= 320; // Mover hacia adelante
        if (Math.abs(x) >= maxOffset) {
          setIsMovingForward(false); // Cambiar dirección
        }
      } else {
        x += 320; // Mover hacia atrás
        if (x >= 0) {
          setIsMovingForward(true); // Cambiar dirección
        }
      }

      positionRef.current = x;
      controls.start({ x, transition: { duration: 4, ease: 'linear' } });
    };

    const interval = setInterval(() => {
      if (!isPaused) moveCarousel();
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, items.length, isPaused, isMovingForward]);

  return (
    <div
      ref={carruselRef}
      className="carousel-container relative lg:w-[960px] w-[320px] overflow-hidden mx-auto"
      onMouseEnter={() => setIsPaused(true)} // Pausar al hacer hover
      onMouseLeave={() => setIsPaused(false)} // Reanudar al salir
    >
      <motion.div
        ref={containerRef}
        className="flex items-center"
        animate={controls}
        initial={{ x: 0 }}
        style={{
          display: 'flex',
          width: `${300 * items.length}px`,
        }}
      >
        {items.map((item, index) => (
          <div
            className="hover:cursor-pointer"
            key={index}
            style={{
              minWidth: '300px', // Ajusta al tamaño de cada imagen
              marginInline: '10px',
            }}
          >
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              style={{ width: '100%' }}
              className="block w-full h-auto shadow"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carrousel;
