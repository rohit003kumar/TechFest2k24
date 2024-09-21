import React, { useEffect, useState } from 'react';

const Visit = () => {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the visitor count
    const updateVisitorCount = () => {
      // Check if the count already exists in localStorage
      let storedCount = localStorage.getItem('visitorCount');
      if (storedCount) {
        storedCount = parseInt(storedCount) + 1;
      } else {
        storedCount = 1; // First visitor
      }
      localStorage.setItem('visitorCount', storedCount);
      setCount(storedCount);
    };

    // Call the function to update the visitor count when the component mounts
    updateVisitorCount();
  }, []); // Empty dependency array means this useEffect runs once on mount



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define styles conditionally based on window width
  const containerStyle = {
    textAlign: 'center',
    marginTop: windowWidth < 450 ? '20px' : '50px', // Smaller margin for mobile screens
    fontFamily: 'Arial, sans-serif',
  };

  const textStyle = {
    fontSize: windowWidth < 450? '18px' : '24px', // Smaller font size for mobile screens
    margin: '20px',
  };
  
  return (
    <div style={containerStyle}>
      <h1>Welcome to TechFest 2024</h1>
      <div style={textStyle }>
       Total Visitors: <span>{count}</span>
      </div>
     
    </div>
  );
};

export default Visit;
