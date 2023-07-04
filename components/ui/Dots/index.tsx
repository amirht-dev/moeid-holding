import clsx from 'clsx';
import React from 'react';

type DotsProps = {
  rows: number;
  className?: string;
};

function Dots({ rows, className }: DotsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: rows * 3 }).map((_, idx) => (
        <div key={idx} className={clsx('rounded-full w-1 h-1', className)} />
      ))}
    </div>
  );
}

export default Dots;
