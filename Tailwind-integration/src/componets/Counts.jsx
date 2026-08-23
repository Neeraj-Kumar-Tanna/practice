import React from 'react'
import Count_sub from './Count_sub'

const Counts = (details) => {
  return (
    <div className='flex flex-row justify-between gap-6'>
      {Count_sub("Likes" , details.likes)}
      {Count_sub("Followers" , details.followers)}
      {Count_sub("Following" , details.following)}
    </div>
  )
}

export default Counts
