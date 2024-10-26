// ImageStack.tsx
import React from 'react';

interface ImageStackProps {
  images: string[];  // An array of image URLs
}

const ImageStack: React.FC<ImageStackProps> = ({ images }) => {
  return (
    <div className="relative w-full h-[100px] "> {/* Container with relative positioning */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Stacked Image ${index + 1}`}
          className={`absolute top-0 left-0 w-[30px] h-[30px] object-cover transition-all duration-500 ease-in-out
                      ${index === 0 ? 'z-30' : index === 1 ? 'z-20' : 'z-10'}  /* Control stacking order */
                      ${index === 1 ? 'translate-x-[20px] translate-y-[2px]' : ''}  /* Shift the second image */
                      ${index === 2 ? 'translate-x-[40px] translate-y-[2px]' : ''}  /* Shift the third image */}
                      rounded-full shadow-lg`}
        />
      ))}
    </div>
  );
};

export default ImageStack;
