import React, { useEffect, useRef } from 'react';

interface Trash {
  x: number;
  y: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

const FallingTrash: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trashRef = useRef<Trash[]>([]);
  const animationFrameRef = useRef<number>();

  const createTrash = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    
    return {
      x: Math.random() * width,
      y: -50,
      speed: 1 + Math.random() * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
      size: 20 + Math.random() * 20
    };
  };

  const updateTrash = () => {
    if (!containerRef.current) return;
    const height = containerRef.current.offsetHeight;

    trashRef.current = trashRef.current
      .map(trash => ({
        ...trash,
        y: trash.y + trash.speed,
        rotation: trash.rotation + trash.rotationSpeed
      }))
      .filter(trash => trash.y < height);

    if (Math.random() < 0.05 && trashRef.current.length < 20) {
      trashRef.current.push(createTrash());
    }

    const container = containerRef.current;
    container.innerHTML = '';

    trashRef.current.forEach(trash => {
      const trashElement = document.createElement('div');
      trashElement.style.position = 'absolute';
      trashElement.style.left = `${trash.x}px`;
      trashElement.style.top = `${trash.y}px`;
      trashElement.style.transform = `rotate(${trash.rotation}deg)`;
      trashElement.innerHTML = `<svg width="${trash.size}" height="${trash.size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black/20"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>`;
      container.appendChild(trashElement);
    });

    if (isEnabled) {
      animationFrameRef.current = requestAnimationFrame(updateTrash);
    }
  };

  useEffect(() => {
    if (isEnabled) {
      trashRef.current = [];
      animationFrameRef.current = requestAnimationFrame(updateTrash);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      trashRef.current = [];
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isEnabled]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[45]"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default FallingTrash;