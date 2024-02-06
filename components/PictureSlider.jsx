// components/ImageSlider.jsx
import { useState } from 'react';
import Image from 'next/image';
import images from '../images'

const ImageSlider = () => {
  const [images] = useState([
    '/',
    '/images/image2.jpg',
    '/images/image3.jpg',
    // Add more image paths as needed
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      {images.length > 0 && (
        <>
          <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
          <div className="slider-controls">
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
