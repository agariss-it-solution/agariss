import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollControlButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576); // Bootstrap's mobile breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 200);
      setAtTop(scrollY < 1500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    const scrollTarget = atTop
      ? document.documentElement.scrollHeight
      : 0;

    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  if (isMobile) return null; // ⛔ Hide on mobile

  return (
    <>
      {showButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '150px',
            right: '20px',
            zIndex: 1,
          }}
        >
          <Button
            onClick={handleScrollClick}
            style={{ borderRadius: '20%', background: "#B88338" }}
          >
            {atTop ? <FaArrowDown /> : <FaArrowUp />}
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollControlButton;
