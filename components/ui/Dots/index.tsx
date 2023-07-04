import React from 'react';

type DotsProps = {
  rows: number
  cols?: number
}

function Dots({rows, cols = 3}: DotsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: rows * cols }).map((_, idx) => (
        <span
          key={idx}
          className="aspect-square w-1 rounded-full bg-base-100/50"
        />
      ))}
    </div>
  );
}

export default Dots;
