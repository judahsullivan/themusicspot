
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps  {
    children: React.ReactNode;
    className?: string;
  }

const Box = ({children, className}: BoxProps) => {
  return (
    <div className={twMerge(`
    bg-gray-700
    rounded-lg
    h-fit
    w-full
    `,
    className)}>
    {children}
    </div>
  )
}

export default Box 

