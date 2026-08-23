import React from 'react'

const Count_sub = (text , count) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-semibold'>{count}</h1>
      <p className='font-[1px]'>{text}</p>
    </div>
  )
}

export default Count_sub
