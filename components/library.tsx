'use-client'

import React from 'react'
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from 'react-icons/ai'


const Library = () => {
  const onClick = () => {
    // Handle upload Later
  }
  return (

    <div className='flex flex-col'>
      <div className='
          flex
          items-center
          justify-between
          px-5
          pt-4
        '>
        <div className='
          inline-flex
          items-center
          gap-x-2

         '
        >
          <TbPlaylist className='text-gray-400 ' size={26} />
          <p className='
            text-gray-400
            font-medium
            text-md
            


          '>
            Your Library

          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className='
            cursor-pointer
            text-neutral-400
            hover:text-white
            transition
            ease-in
      '
        />

      </div>
      <div
        className='
      flex
      flex-col
      gap-y-2
      mt-4
      px-3
      '
      >
        List of Songs!
      </div>



    </div>

  )
}

export default Library
