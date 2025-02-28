import React, { useEffect, useState, useCallback } from 'react';

const Scroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / windowHeight, 1);
      setScrollProgress(progress);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // First Line (Fades Out)
  const firstLineOpacity = 1 - Math.min(scrollProgress * 2.5, 1);

  // Middle Text (Fixed Position, No Jerking)
  const secondLineColor = scrollProgress > 0.5 ? 'white' : 'black';
  const underlineWidth = `${Math.min(scrollProgress * 200, 100)}%`;
  const underlineOpacity = Math.min(scrollProgress * 3, 1);
  const underlineColor = scrollProgress > 0.5 ? 'white' : 'rgb(0, 127, 216)';

  // "We make both easy" (Fades In Smoothly)
  const heresHowOpacity = Math.max(0, Math.min((scrollProgress - 0.3) * 3, 1));

  // Background color **returns to original** when scrolling back up
  const backgroundColor =
    scrollProgress > 0.5 ? 'rgb(0, 127, 216)' : 'rgb(241, 241, 241)';

  return (
    <div
      style={{
        height: '400vh',
        backgroundColor,
        transition: 'background-color 0.6s ease-out',
      }}
    >
      <div
        style={{
          height: '100vh',
          position: 'sticky',
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* First Line (Fades Out Without Affecting Layout) */}
        <div
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            opacity: firstLineOpacity,
            transition: 'opacity 0.5s ease-out',
            marginBottom: '0.5rem',
            visibility: firstLineOpacity === 0 ? 'hidden' : 'visible',
          }}
        >
            getting guidance is harder,
        </div>

        {/* Second Line (Fixed Position, No Jerking) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              color: secondLineColor,
              position: 'relative',
              transition: 'color 0.5s ease-in-out',
              marginBottom: '0.5rem',
            }}
          >
            guiding is harder,
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '6px',
                width: underlineWidth,
                backgroundColor: underlineColor,
                transition: 'width 0.4s ease-in-out, background-color 0.5s ease-in-out',
                opacity: underlineOpacity,
              }}
            ></div>
          </div>

          {/* "We make both easy" (Smooth Fade-In) */}
          <div
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              color: secondLineColor,
              opacity: heresHowOpacity,
              transform: `translateY(0)`, // Keeps position fixed
              transition: 'opacity 0.6s ease-out, color 0.6s ease-out',
              marginTop: '1.5rem',
            }}
          >
            We make both easy...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
