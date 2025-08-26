'use client';

import { useEffect, useRef } from 'react';

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    };

    let particles: Particle[] = [];
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFD700'];

    const createFirework = (x: number, y: number) => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 2 + Math.random() * 3;
        const size = 1 + Math.random() * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size
        });
      }
    };

    let isAnimating = false;
    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life *= 0.95;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.life + 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
        ctx.fill();

        if (p.life < 0.01) particles.splice(i, 1);
      }

      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        isAnimating = false;
      }
    };

    const startFireworks = () => {
      if (isAnimating) return;
      isAnimating = true;
      
      const rect = canvas.getBoundingClientRect();
      createFirework(rect.width / 2, rect.height / 2);
      animate();
    };

    // Add event listeners
    const parentElement = canvas.parentElement;
    if (parentElement) {
      parentElement.addEventListener('mouseenter', startFireworks);
    }

    return () => {
      if (parentElement) {
        parentElement.removeEventListener('mouseenter', startFireworks);
      }
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
};

export default Fireworks;