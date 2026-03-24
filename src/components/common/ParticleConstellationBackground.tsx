import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface ParticleConstellationBackgroundProps {
  isLightMode?: boolean;
}

const PALETTE = ["#3b82f6", "#ef4444", "#f59e0b", "#06b6d4", "#8b5cf6"];

export default function ParticleConstellationBackground({
  isLightMode = false,
}: ParticleConstellationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      radius: 135,
    };

    const getParticleCount = (canvasWidth: number, canvasHeight: number) => {
      const bySurface = Math.floor((canvasWidth * canvasHeight) / 5200);
      return Math.max(180, Math.min(420, bySurface));
    };

    const createParticles = () => {
      const particleCount = getParticleCount(width, height);
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.9 + 0.7,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      }));
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const drawConnections = () => {
      const maxDistance = 115;
      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (
          let secondIndex = firstIndex + 1;
          secondIndex < particles.length;
          secondIndex += 1
        ) {
          const first = particles[firstIndex];
          const second = particles[secondIndex];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * (isLightMode ? 0.22 : 0.26);
            context.strokeStyle = isLightMode
              ? `rgba(71, 85, 105, ${opacity})`
              : `rgba(148, 163, 184, ${opacity})`;
            context.lineWidth = 0.55;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.hypot(dx, dy) || 0.0001;

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const inertia = 0.23;
            particle.vx += (dx / distance) * force * inertia;
            particle.vy += (dy / distance) * force * inertia;
          }
        }

        particle.vx *= 0.985;
        particle.vy *= 0.985;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      });

      drawConnections();

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = isLightMode ? 0.58 : 0.82;
        context.fill();
        context.globalAlpha = 1;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
