import React from 'react';

const Image = ({ src, alt = 'image', className = '' }) => {
  if (!src) {
    console.warn("Image component requires a 'src' prop.");
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
