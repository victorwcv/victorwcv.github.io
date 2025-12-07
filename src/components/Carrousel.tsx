import { CarouselItem } from '@/types';

interface Props {
  items: CarouselItem[];
}

const Carrousel: React.FC<Props> = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-group">
        {items.map((item, index) => (
          <div
            className="carousel-card"
            key={item.id}
          >
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="block w-full h-auto shadow-sm"
            />
          </div>
        ))}
      </div>
      <div aria-hiden className="carousel-group">
        {items.map((item, index) => (
          <div
            className="carousel-card"
            key={item.id}
          >
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="block w-full h-auto shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
