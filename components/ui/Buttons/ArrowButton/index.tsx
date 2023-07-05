import Image from 'next/image';
import React from 'react';

type ArrowButtonProps = {
  variant: 'Right' | 'Left';
} & React.ComponentProps<'button'>;

function ArrowButton({ variant, ...props }: ArrowButtonProps) {
  return (
    <button
      className="grid place-items-center rounded-xl bg-secondary p-1"
      {...props}
    >
      <Image
        src={`/images/icons/arrow/Arrow-${variant}.png`}
        alt="button"
        width={25}
        height={25}
      />
    </button>
  );
}

export default ArrowButton;
