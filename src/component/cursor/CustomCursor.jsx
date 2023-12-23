import React, { useState, useEffect } from 'react';
import './CustomCursor.scss'; // Ensure your CSS file path is correct

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [updatePosition, setUpdatePosition] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (updatePosition) {
        setPosition({ x: e.clientX, y: e.clientY });
        setUpdatePosition(false);

        setTimeout(() => {
          setUpdatePosition(true);
        }, 5); // Minimal delay for smoother movement
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [updatePosition]);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div className='cursor-dot'></div>
    </div>
  );
};

export default CustomCursor;
