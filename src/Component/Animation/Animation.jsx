import React, { useEffect } from 'react';
import './Animation.css'; // Import the CSS file

const Animation = () => {
  useEffect(() => {
    const numberOfColorBoxes = 400;
    const bgAnimation = document.getElementById('bgAnimation');

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox);
    }

    // Cleanup function to remove the color boxes when the component unmounts
    return () => {
      while (bgAnimation.firstChild) {
        bgAnimation.removeChild(bgAnimation.firstChild);
      }
    };
  }, []);

  return (
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundanim"></div>
    </div>
  );
};

export default Animation;