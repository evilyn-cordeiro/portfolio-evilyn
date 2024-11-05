import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  CarouselItemsContainer,
  CarouselItem,
  IndicatorsContainer,
  Indicator,
} from "./styles";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < items.length ? prevIndex + itemsToShow : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0
        ? prevIndex - itemsToShow
        : items.length - itemsToShow
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index * itemsToShow);
  };

  const translateX =
    -(currentIndex / itemsToShow) *
    (100 / Math.ceil(items.length / itemsToShow));

  return (
    <CarouselContainer>
      <CarouselItemsContainer translateX={translateX} itemsLengh={itemsToShow}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselItemsContainer>

      <IndicatorsContainer>
        {Array.from({ length: Math.ceil(items.length / itemsToShow) }).map(
          (_, index) => (
            <Indicator
              key={index}
              active={index === Math.floor(currentIndex / itemsToShow)}
              onClick={() => handleIndicatorClick(index)}
            />
          )
        )}
      </IndicatorsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
