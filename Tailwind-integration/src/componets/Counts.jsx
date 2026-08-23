import React from 'react'
import Count_sub from './Count_sub'

const Counts = () => {
  return (
    <div className='flex flex-row justify-between gap-6'>
      {Count_sub("Likes" , 1000)}
      {Count_sub("Followers" , 2435)}
      {Count_sub("Following" , 223333)}
    </div>
  )
}

export default Counts
