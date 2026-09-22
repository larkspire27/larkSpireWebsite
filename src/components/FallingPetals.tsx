import React, { useEffect, useRef } from 'react';

export const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      '#FF4D6D', // Rose Red
      '#FF758F', // Pink Rose
      '#FFB703', // Marigold Yellow
      '#FB8500', // Marigold Orange
      '#FFE5EC'  // Light Rose
    ];

    interface Petal {
      x: number;
      y: number;
      size: number;
      color: string;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }

    const petals: Petal[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      speedY: Math.random() * 1.5 + 0.8,
      speedX: Math.sin(Math.random() * Math.PI) * 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.6 + 0.4
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Draw almond/petal shape
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size);
      ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-80"
    />
  );
};
