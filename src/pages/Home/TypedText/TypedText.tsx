import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
}

const TypedText: React.FC<TypedTextProps> = ({ strings, typeSpeed = 100, backSpeed = 50, loop = false, showCursor = true, cursorChar = '|' }) => {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      showCursor,
      cursorChar,
    };
    const typed = new Typed(elRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, showCursor, cursorChar]);

  return <span ref={elRef}></span>;
};

export default TypedText;
