import React, { useState, useEffect } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#604fce] via-[#06b741] to-[#aa0ecd] opacity-40 shadow-lg blur-sm animate-pulse-fast"
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default Cursor;
