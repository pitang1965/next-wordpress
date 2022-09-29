import React, { FC, ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  background: string;
};

export const Cover: FC<Props> = ({ children, background }) => {
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center">
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        objectFit="cover"
        className="mix-blend-soft-light"
      />
      {children}
    </div>
  );
};
