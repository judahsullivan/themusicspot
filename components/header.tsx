'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi'
import Button from './button'


interface HeaderProps {
  className?: string;
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const handleLogout = () => {
  }
  return (
    <div
      className={twMerge(`
      h-fit
      bg-gradient-to-b
      from-purple-500
      p-5
      `,
        className
      )}
    >
      <div
        className="
      w-full
      mb-4
      flex
      items-center
      justify-between

      "
      >
        <div
          className='
        hidden
        md:flex
        gap-x-4
        items-center
        '
        >
          <button
            onClick={() => router.back()}
            className='
            rounded-full
            bg-purple-950
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
            ease-linear
            '

          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='
            rounded-full
            bg-purple-950
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
            ease-linear
            '

          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div
          className='
          flex
          md:hidden
          gap-x-2
          items-center
          '
        >
          <button
            className='
            rounded-full
            p-2
            flex
            bg-purple-100
            justify-center
            items-center
            hover:opacity-75
            transition
            ease-in-out
            '
          >
            <HiHome className='text-purple-950' size={25} />
          </button>
          <button
            className='
            rounded-full
            p-2
            flex
            bg-purple-100
            justify-center
            items-center
            hover:opacity-75
            transition
            ease-in-out
            '
          >
            <BiSearch className='text-purple-950' size={25} />
          </button>
        </div>
        <div className="

        flex
        justify-bewtween
        items-center
        gap-x-4
        ">
          <>
            <div>
              <Button
                className='
              font-medium
              '
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                className='
              font-medium
              '
              >
                Log in
              </Button>
            </div>

          </>
        </div>
      </div>
    </div>
  )
}

export default Header
