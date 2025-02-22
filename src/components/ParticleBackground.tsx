import React, { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create non-null references after validation
    const validCanvas = canvas;
    const validCtx = ctx;

    const setCanvasSize = () => {
      validCanvas.width = window.innerWidth;
      validCanvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particlesArray: Particle[] = [];
    const numberOfParticles = 80;

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;

      constructor() {
        this.x = Math.random() * validCanvas.width;
        this.y = Math.random() * validCanvas.height;
        this.directionX = Math.random() * 0.4 - 0.2;
        this.directionY = Math.random() * 0.4 - 0.2;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        if (this.x > validCanvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > validCanvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
      }

      draw() {
        validCtx.beginPath();
        validCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        validCtx.fillStyle = "rgba(59, 130, 246, 0.2)";
        validCtx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    let animationFrameId: number;
    
    const animate = () => {
      validCtx.clearRect(0, 0, validCanvas.width, validCanvas.height);
      
      particlesArray.forEach((particle, i) => {
        particle.update();
        particle.draw();
        
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particle.x - particlesArray[j].x;
          const dy = particle.y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            validCtx.beginPath();
            validCtx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
            validCtx.lineWidth = 1;
            validCtx.moveTo(particle.x, particle.y);
            validCtx.lineTo(particlesArray[j].x, particlesArray[j].y);
            validCtx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};