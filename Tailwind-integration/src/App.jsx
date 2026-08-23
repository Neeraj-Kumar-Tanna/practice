import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componets/Card';
const App = () => {

  const users = [
  {
    username: "alex_morgan",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    fullName: "Alex Morgan",
    description: "Developer building useful things for everyone",
    likes: 12450,
    followers: 18400,
    following: 520
  },
  {
    username: "sophia_wilson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    fullName: "Sophia Wilson",
    description: "Creating beautiful moments through creative photography",
    likes: 28900,
    followers: 32100,
    following: 680
  },
  {
    username: "daniel_lee",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    fullName: "Daniel Lee",
    description: "Technology enthusiast exploring innovative ideas every day",
    likes: 8750,
    followers: 12600,
    following: 430
  },
  {
    username: "emma_thomas",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    fullName: "Emma Thomas",
    description: "Designer turning simple ideas into beautiful experiences",
    likes: 19300,
    followers: 24500,
    following: 390
  },
  {
    username: "james_anderson",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    fullName: "James Anderson",
    description: "Fitness lover chasing strength and better performance",
    likes: 15600,
    followers: 19800,
    following: 720
  },
  {
    username: "olivia_martin",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullName: "Olivia Martin",
    description: "Traveling worldwide and collecting unforgettable memories daily",
    likes: 34700,
    followers: 45600,
    following: 810
  },
  {
    username: "william_clark",
    photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128",
    fullName: "William Clark",
    description: "Learning coding and sharing knowledge with others",
    likes: 6200,
    followers: 9300,
    following: 350
  },
  {
    username: "ava_robinson",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    fullName: "Ava Robinson",
    description: "Fashion, lifestyle, creativity and positive energy always",
    likes: 42100,
    followers: 58200,
    following: 940
  },
  {
    username: "ethan_harris",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    fullName: "Ethan Harris",
    description: "Building projects while learning something new daily",
    likes: 9800,
    followers: 14200,
    following: 470
  },
  {
    username: "mia_davis",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    fullName: "Mia Davis",
    description: "Capturing stories through photographs and creative visuals",
    likes: 27600,
    followers: 38900,
    following: 610
  },
  {
    username: "noah_miller",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    fullName: "Noah Miller",
    description: "Startup builder passionate about solving real problems",
    likes: 11200,
    followers: 16700,
    following: 540
  },
  {
    username: "isabella_moore",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    fullName: "Isabella Moore",
    description: "Finding inspiration in people places and nature",
    likes: 31500,
    followers: 42700,
    following: 760
  },
  {
    username: "lucas_taylor",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    fullName: "Lucas Taylor",
    description: "JavaScript developer exploring modern web technologies",
    likes: 7400,
    followers: 10900,
    following: 380
  },
  {
    username: "amelia_white",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    fullName: "Amelia White",
    description: "Living simply creating freely and enjoying life",
    likes: 22800,
    followers: 29400,
    following: 570
  },
  {
    username: "henry_walker",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    fullName: "Henry Walker",
    description: "Always curious always learning always moving forward",
    likes: 5300,
    followers: 8100,
    following: 290
  }
  ];

  return (
    <div className='h-full w-100vw bg-amber-200 px-10 py-5 flex flex-row flex-wrap justify-center align-middle gap-10'>
      {
        users.map(function(params){
          return <Card photo={params.photo} username ={params.username} name={params.fullName} discription={params.description}/>
        })
      }
    </div>
  )
}

export default App
