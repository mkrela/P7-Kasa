import React, { useState } from "react";
import "./ImageBanner.scss";

export function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  // Get the class name based on the current picture index
  const getClassName = (i) => {
    return i === currentPicture ? "show" : "";
  };

  // Move to the next picture
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Move to the previous picture
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(newCurrentPicture);
    }
  };

  // Check if pictures are available
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Get the carousel of images or a default image
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="https://picsum.photos/800" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">
        {getCarouselOrDefaultImage()}
      </div>
      {/* Show the navigation buttons and slide counter only if pictures are available */}
      {arePicturesAvailable() && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
