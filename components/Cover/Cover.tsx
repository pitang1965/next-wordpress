import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  background: string;
};

export const Cover: FC<Props> = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        objectFit="cover"
        className="mix-blend-soft-light"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
