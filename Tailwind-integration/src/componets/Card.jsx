import React from 'react'
import Img_tag from './Img_tag'
import UserName from './UserName';
import Name from './name';
import Discription from './Discription';
import Counts from './Counts';

const Card = (props) => {
  return (
    <div className='w-70 px-8 py-3 bg-white flex flex-col items-center justify-center rounded-2xl '>
        <Img_tag href = {props.photo} />
        <UserName username = {props.username} />
        <Name name={props.name}/>
        <Discription disc={props.discription} />
        <Counts  likes={props.likes} followers={props.followers} following={props.following}/>
    </div>
  )
}

export default Card
