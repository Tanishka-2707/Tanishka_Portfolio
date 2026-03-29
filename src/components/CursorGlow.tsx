import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handler, { passive: true });

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      setPos({ x: current.current.x, y: current.current.y });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, hsl(340 80% 55% / 0.07), transparent 50%)`,
        }}
      />
    </>
  );
};

export default CursorGlow;
