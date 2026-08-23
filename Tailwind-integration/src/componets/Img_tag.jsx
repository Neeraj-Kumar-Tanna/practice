import React from 'react'

const Img_tag = (link) => {
  return (
    <img className='h-17 w-17 rounded-[50%] bg-amber-900 ' src={link.href} alt="photo" />
  )
}

export default Img_tag
