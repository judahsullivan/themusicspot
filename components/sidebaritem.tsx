
import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const SideBarItem = ({
  icon: Icon,
  label,
  active,
  href,
}: any) => {

  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex
    flex-row
    h-auto
    items-center
    w-full
    gap-x-4
    text-md
    font-medium
    cursor-pointer
    hover:text-white
    transition
    ease-linear
    text-neutral-400
    py-1
    align-center
    `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className='truncate w-full'>{label}</p>


    </Link>
  )

}


export default SideBarItem
