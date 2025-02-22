import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorFollower = () => {
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <CursorCircle
        style={{
          transform: `translate(${coords.x}px, ${coords.y}px) translate(-50%, -50%)`,
        }}
      />
      <GlobalCursorStyle />
    </>
  );
};

export default CursorFollower;

/* styled-components */
const CursorCircle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 20px;
  height: 20px;
  pointer-events: none;
  border-radius: 50%;

  /* ✨ 예쁜 핑크 그라디언트 */
  background: radial-gradient(circle at 30% 30%, #fcbf02 0%, #fcbf02 60%, rgba(255, 255, 255, 0) 100%);

  /* ✨ 빛나는 효과 */
  box-shadow: 0 0 8px rgba(247, 140, 204, 0.6), 0 0 16px rgba(247, 140, 204, 0.4);

  /* ✨ 부드러운 이동 애니메이션 */
  transition: transform 0.1s ease-out;
  will-change: transform;
`;

/* 기본 마우스 포인터 숨기기 */
const GlobalCursorStyle = styled.div`
  body,
  * {
    cursor: none !important;
    user-select: none;
  }
`;
