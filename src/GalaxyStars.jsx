// GalaxyStars.jsx
import React, { useRef, useEffect } from 'react';


// Configurable star count and speed
const STAR_COUNT = 70;
const STAR_COLORS = ['#fff', '#e0e0e0', '#bdbdbd', '#f5f5f5']; // white and silver shades
const STAR_MIN_SIZE = 1.1;
const STAR_MAX_SIZE = 2.7;
const STAR_MIN_SPEED = 0.07;
const STAR_MAX_SPEED = 0.19;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const GalaxyStars = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function setCanvasSizeAndStars() {
      // Always fill parent
      const parent = canvas.parentElement;
      const width = canvas.width = parent.offsetWidth;
      const height = canvas.height = parent.offsetHeight;
      // Re-initialize stars to fill new area
      stars.current = Array.from({ length: STAR_COUNT }, () => {
        const angle = randomBetween(0, 2 * Math.PI);
        return {
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          r: randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE),
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          speed: randomBetween(STAR_MIN_SPEED, STAR_MAX_SPEED),
          twinkle: Math.random() * Math.PI * 2,
          glow: randomBetween(10, 32),
          sparkleOffset: Math.random() * 1000,
          dx: Math.cos(angle) * randomBetween(0.08, 0.22),
          dy: Math.sin(angle) * randomBetween(0.08, 0.22),
        };
      });
      return { width, height };
    }

    let { width, height } = setCanvasSizeAndStars();

    // Responsive resize
    const handleResize = () => {
      const size = setCanvasSizeAndStars();
      width = size.width;
      height = size.height;
    };
    window.addEventListener('resize', handleResize);

    function animate() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      for (let star of stars.current) {
        // Move star in its direction
        star.x += star.dx;
        star.y += star.dy;
        // Wrap around edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
        // Twinkle and sparkle
        const now = Date.now();
        const twinkle = 0.7 + 0.3 * Math.sin(now * 0.002 + star.twinkle);
        const sparkle = 1 + 0.7 * Math.max(0, Math.sin((now + star.sparkleOffset * 1000) * 0.006 + star.twinkle * 2));
        ctx.globalAlpha = twinkle * sparkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * sparkle, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = star.glow * sparkle;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
};

export default GalaxyStars;
