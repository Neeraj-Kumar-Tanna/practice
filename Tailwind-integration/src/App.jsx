import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componets/Card';
const App = () => {

  const users = [
  {
    username: "alex_morgan",
    photo: "https://i.pravatar.cc/150?img=1",
    fullName: "Alex Morgan",
    description: "Developer building useful things for everyone",
    likes: 12450,
    followers: 18400,
    following: 520
  },
  {
    username: "sophia_wilson",
    photo: "https://i.pravatar.cc/150?img=2",
    fullName: "Sophia Wilson",
    description: "Creating beautiful moments through creative photography",
    likes: 28900,
    followers: 32100,
    following: 680
  },
  {
    username: "daniel_lee",
    photo: "https://i.pravatar.cc/150?img=3",
    fullName: "Daniel Lee",
    description: "Technology enthusiast exploring innovative ideas every day",
    likes: 8750,
    followers: 12600,
    following: 430
  },
  {
    username: "emma_thomas",
    photo: "https://i.pravatar.cc/150?img=4",
    fullName: "Emma Thomas",
    description: "Designer turning simple ideas into beautiful experiences",
    likes: 19300,
    followers: 24500,
    following: 390
  },
  {
    username: "james_anderson",
    photo: "https://i.pravatar.cc/150?img=5",
    fullName: "James Anderson",
    description: "Fitness lover chasing strength and better performance",
    likes: 15600,
    followers: 19800,
    following: 720
  },
  {
    username: "olivia_martin",
    photo: "https://i.pravatar.cc/150?img=6",
    fullName: "Olivia Martin",
    description: "Traveling worldwide and collecting unforgettable memories daily",
    likes: 34700,
    followers: 45600,
    following: 810
  },
  {
    username: "william_clark",
    photo: "https://i.pravatar.cc/150?img=7",
    fullName: "William Clark",
    description: "Learning coding and sharing knowledge with others",
    likes: 6200,
    followers: 9300,
    following: 350
  },
  {
    username: "ava_robinson",
    photo: "https://i.pravatar.cc/150?img=8",
    fullName: "Ava Robinson",
    description: "Fashion, lifestyle, creativity and positive energy always",
    likes: 42100,
    followers: 58200,
    following: 940
  },
  {
    username: "ethan_harris",
    photo: "https://i.pravatar.cc/150?img=9",
    fullName: "Ethan Harris",
    description: "Building projects while learning something new daily",
    likes: 9800,
    followers: 14200,
    following: 470
  },
  {
    username: "mia_davis",
    photo: "https://i.pravatar.cc/150?img=10",
    fullName: "Mia Davis",
    description: "Capturing stories through photographs and creative visuals",
    likes: 27600,
    followers: 38900,
    following: 610
  },
  {
    username: "noah_miller",
    photo: "https://i.pravatar.cc/150?img=11",
    fullName: "Noah Miller",
    description: "Startup builder passionate about solving real problems",
    likes: 11200,
    followers: 16700,
    following: 540
  },
  {
    username: "isabella_moore",
    photo: "https://i.pravatar.cc/150?img=12",
    fullName: "Isabella Moore",
    description: "Finding inspiration in people places and nature",
    likes: 31500,
    followers: 42700,
    following: 760
  },
  {
    username: "lucas_taylor",
    photo: "https://i.pravatar.cc/150?img=13",
    fullName: "Lucas Taylor",
    description: "JavaScript developer exploring modern web technologies",
    likes: 7400,
    followers: 10900,
    following: 380
  },
  {
    username: "amelia_white",
    photo: "https://i.pravatar.cc/150?img=14",
    fullName: "Amelia White",
    description: "Living simply creating freely and enjoying life",
    likes: 22800,
    followers: 29400,
    following: 570
  },
  {
    username: "henry_walker",
    photo: "https://i.pravatar.cc/150?img=15",
    fullName: "Henry Walker",
    description: "Always curious always learning always moving forward",
    likes: 5300,
    followers: 8100,
    following: 290
  },
  {
    username: "charlotte_hall",
    photo: "https://i.pravatar.cc/150?img=16",
    fullName: "Charlotte Hall",
    description: "Creative soul exploring art fashion and photography",
    likes: 18600,
    followers: 27300,
    following: 640
  },
  {
    username: "benjamin_young",
    photo: "https://i.pravatar.cc/150?img=17",
    fullName: "Benjamin Young",
    description: "Software engineer solving problems with simple solutions",
    likes: 9200,
    followers: 13500,
    following: 410
  },
  {
    username: "harper_king",
    photo: "https://i.pravatar.cc/150?img=18",
    fullName: "Harper King",
    description: "Exploring new places and creating lasting memories",
    likes: 29700,
    followers: 36100,
    following: 580
  },
  {
    username: "sebastian_wright",
    photo: "https://i.pravatar.cc/150?img=19",
    fullName: "Sebastian Wright",
    description: "Tech enthusiast building products people actually love",
    likes: 14300,
    followers: 19200,
    following: 460
  },
  {
    username: "evelyn_lopez",
    photo: "https://i.pravatar.cc/150?img=20",
    fullName: "Evelyn Lopez",
    description: "Smiling through life and sharing positive energy",
    likes: 33800,
    followers: 48200,
    following: 720
  },
  {
    username: "jack_hill",
    photo: "https://i.pravatar.cc/150?img=21",
    fullName: "Jack Hill",
    description: "Developer learning something interesting every single day",
    likes: 6800,
    followers: 9700,
    following: 330
  },
  {
    username: "abigail_scott",
    photo: "https://i.pravatar.cc/150?img=22",
    fullName: "Abigail Scott",
    description: "Photography lover capturing beautiful everyday moments",
    likes: 21400,
    followers: 29800,
    following: 510
  },
  {
    username: "michael_green",
    photo: "https://i.pravatar.cc/150?img=23",
    fullName: "Michael Green",
    description: "Building websites and learning modern development techniques",
    likes: 8400,
    followers: 12100,
    following: 390
  },
  {
    username: "ella_adams",
    photo: "https://i.pravatar.cc/150?img=24",
    fullName: "Ella Adams",
    description: "Fashion enthusiast with a passion for creativity",
    likes: 36700,
    followers: 52100,
    following: 850
  },
  {
    username: "daniel_baker",
    photo: "https://i.pravatar.cc/150?img=25",
    fullName: "Daniel Baker",
    description: "Learning programming and building exciting personal projects",
    likes: 7600,
    followers: 11400,
    following: 360
  },
  {
    username: "scarlett_nelson",
    photo: "https://i.pravatar.cc/150?img=26",
    fullName: "Scarlett Nelson",
    description: "Traveling, exploring and enjoying every beautiful moment",
    likes: 28400,
    followers: 39700,
    following: 690
  },
  {
    username: "matthew_carter",
    photo: "https://i.pravatar.cc/150?img=27",
    fullName: "Matthew Carter",
    description: "Developer focused on creating simple powerful applications",
    likes: 10200,
    followers: 14900,
    following: 440
  },
  {
    username: "grace_mitchell",
    photo: "https://i.pravatar.cc/150?img=28",
    fullName: "Grace Mitchell",
    description: "Finding beauty in ordinary things around me",
    likes: 25600,
    followers: 33400,
    following: 570
  },
  {
    username: "henry_perez",
    photo: "https://i.pravatar.cc/150?img=29",
    fullName: "Henry Perez",
    description: "Computer science student building projects and learning",
    likes: 5900,
    followers: 8700,
    following: 310
  },
  {
    username: "chloe_roberts",
    photo: "https://i.pravatar.cc/150?img=30",
    fullName: "Chloe Roberts",
    description: "Creative designer turning ideas into visual experiences",
    likes: 19800,
    followers: 26700,
    following: 490
  },
  {
    username: "samuel_turner",
    photo: "https://i.pravatar.cc/150?img=31",
    fullName: "Samuel Turner",
    description: "Always coding always learning always improving myself",
    likes: 7100,
    followers: 10300,
    following: 350
  },
  {
    username: "lily_phillips",
    photo: "https://i.pravatar.cc/150?img=32",
    fullName: "Lily Phillips",
    description: "Sharing inspiration creativity and positive thoughts daily",
    likes: 31200,
    followers: 41800,
    following: 620
  },
  {
    username: "david_campbell",
    photo: "https://i.pravatar.cc/150?img=33",
    fullName: "David Campbell",
    description: "Tech explorer passionate about solving challenging problems",
    likes: 8900,
    followers: 13200,
    following: 420
  },
  {
    username: "zoey_parker",
    photo: "https://i.pravatar.cc/150?img=34",
    fullName: "Zoey Parker",
    description: "Living life creatively and enjoying every adventure",
    likes: 27400,
    followers: 35900,
    following: 730
  },
  {
    username: "joseph_evans",
    photo: "https://i.pravatar.cc/150?img=35",
    fullName: "Joseph Evans",
    description: "Full stack developer building useful digital products",
    likes: 11500,
    followers: 15800,
    following: 480
  },
  {
    username: "nora_edwards",
    photo: "https://i.pravatar.cc/150?img=36",
    fullName: "Nora Edwards",
    description: "Exploring creativity through design photography and travel",
    likes: 22300,
    followers: 30100,
    following: 550
  },
  {
    username: "christopher_collins",
    photo: "https://i.pravatar.cc/150?img=37",
    fullName: "Christopher Collins",
    description: "Learning technology and building something every weekend",
    likes: 6300,
    followers: 9400,
    following: 340
  },
  {
    username: "hannah_stewart",
    photo: "https://i.pravatar.cc/150?img=38",
    fullName: "Hannah Stewart",
    description: "Making memories and sharing moments with everyone",
    likes: 29600,
    followers: 38600,
    following: 670
  },
  {
    username: "andrew_sanchez",
    photo: "https://i.pravatar.cc/150?img=39",
    fullName: "Andrew Sanchez",
    description: "Programmer passionate about clean code and learning",
    likes: 8200,
    followers: 11900,
    following: 370
  },
  {
    username: "layla_morris",
    photo: "https://i.pravatar.cc/150?img=40",
    fullName: "Layla Morris",
    description: "Creating beautiful content inspired by everyday life",
    likes: 35400,
    followers: 46700,
    following: 790
  },
  {
    username: "joshua_rogers",
    photo: "https://i.pravatar.cc/150?img=41",
    fullName: "Joshua Rogers",
    description: "Building apps while exploring new technologies",
    likes: 9700,
    followers: 14300,
    following: 430
  },
  {
    username: "riley_reed",
    photo: "https://i.pravatar.cc/150?img=42",
    fullName: "Riley Reed",
    description: "Creative mind passionate about art and design",
    likes: 24100,
    followers: 32900,
    following: 590
  },
  {
    username: "ryan_cook",
    photo: "https://i.pravatar.cc/150?img=43",
    fullName: "Ryan Cook",
    description: "Learning JavaScript and creating interactive web experiences",
    likes: 7800,
    followers: 11200,
    following: 410
  },
  {
    username: "victoria_morgan",
    photo: "https://i.pravatar.cc/150?img=44",
    fullName: "Victoria Morgan",
    description: "Travel lover documenting adventures around the world",
    likes: 32900,
    followers: 44900,
    following: 750
  },
  {
    username: "tyler_bell",
    photo: "https://i.pravatar.cc/150?img=45",
    fullName: "Tyler Bell",
    description: "Developer creating solutions for everyday problems",
    likes: 6500,
    followers: 9800,
    following: 320
  },
  {
    username: "stella_murphy",
    photo: "https://i.pravatar.cc/150?img=46",
    fullName: "Stella Murphy",
    description: "Finding inspiration everywhere and creating beautiful things",
    likes: 28100,
    followers: 37100,
    following: 610
  },
  {
    username: "brandon_bailey",
    photo: "https://i.pravatar.cc/150?img=47",
    fullName: "Brandon Bailey",
    description: "Technology enthusiast learning something new daily",
    likes: 9100,
    followers: 12700,
    following: 380
  },
  {
    username: "aria_rivera",
    photo: "https://i.pravatar.cc/150?img=48",
    fullName: "Aria Rivera",
    description: "Sharing creativity lifestyle and beautiful experiences",
    likes: 31800,
    followers: 43200,
    following: 720
  },
  {
    username: "kevin_cooper",
    photo: "https://i.pravatar.cc/150?img=49",
    fullName: "Kevin Cooper",
    description: "Software developer building projects with passion",
    likes: 7300,
    followers: 10800,
    following: 350
  },
  {
    username: "luna_richardson",
    photo: "https://i.pravatar.cc/150?img=50",
    fullName: "Luna Richardson",
    description: "Exploring life through photography and creative storytelling",
    likes: 26700,
    followers: 35400,
    following: 640
  },
  {
    username: "jacob_cox",
    photo: "https://i.pravatar.cc/150?img=51",
    fullName: "Jacob Cox",
    description: "Coding enthusiast building useful web applications",
    likes: 8700,
    followers: 12500,
    following: 390
  },
  {
    username: "madison_howard",
    photo: "https://i.pravatar.cc/150?img=52",
    fullName: "Madison Howard",
    description: "Creative designer inspired by colors and people",
    likes: 20500,
    followers: 28400,
    following: 520
  },
  {
    username: "logan_ward",
    photo: "https://i.pravatar.cc/150?img=53",
    fullName: "Logan Ward",
    description: "Learning development while building exciting projects",
    likes: 6100,
    followers: 9100,
    following: 330
  },
  {
    username: "penelope_torres",
    photo: "https://i.pravatar.cc/150?img=54",
    fullName: "Penelope Torres",
    description: "Traveling far and creating beautiful memories",
    likes: 30100,
    followers: 40900,
    following: 680
  },
  {
    username: "nathan_peterson",
    photo: "https://i.pravatar.cc/150?img=55",
    fullName: "Nathan Peterson",
    description: "Software engineer passionate about solving problems",
    likes: 9500,
    followers: 13900,
    following: 420
  },
  {
    username: "elena_gray",
    photo: "https://i.pravatar.cc/150?img=56",
    fullName: "Elena Gray",
    description: "Capturing simple moments that become lasting memories",
    likes: 23500,
    followers: 31600,
    following: 560
  },
  {
    username: "caleb_ramirez",
    photo: "https://i.pravatar.cc/150?img=57",
    fullName: "Caleb Ramirez",
    description: "Developer exploring frontend technologies and design",
    likes: 6900,
    followers: 10100,
    following: 360
  },
  {
    username: "violet_james",
    photo: "https://i.pravatar.cc/150?img=58",
    fullName: "Violet James",
    description: "Creating content inspired by everyday adventures",
    likes: 27800,
    followers: 36500,
    following: 590
  },
  {
    username: "isaac_watson",
    photo: "https://i.pravatar.cc/150?img=59",
    fullName: "Isaac Watson",
    description: "Building software and learning from every challenge",
    likes: 8100,
    followers: 11700,
    following: 400
  },
  {
    username: "claire_brooks",
    photo: "https://i.pravatar.cc/150?img=60",
    fullName: "Claire Brooks",
    description: "Designing beautiful experiences for people everywhere",
    likes: 24600,
    followers: 33800,
    following: 610
  },
  {
    username: "owen_kelly",
    photo: "https://i.pravatar.cc/150?img=61",
    fullName: "Owen Kelly",
    description: "Coding every day and improving my skills",
    likes: 5700,
    followers: 8600,
    following: 300
  },
  {
    username: "audrey_sanders",
    photo: "https://i.pravatar.cc/150?img=62",
    fullName: "Audrey Sanders",
    description: "Finding beauty in travel art and nature",
    likes: 32600,
    followers: 44100,
    following: 710
  },
  {
    username: "gabriel_price",
    photo: "https://i.pravatar.cc/150?img=63",
    fullName: "Gabriel Price",
    description: "Tech lover building creative digital solutions",
    likes: 8800,
    followers: 12600,
    following: 370
  },
  {
    username: "skylar_bennett",
    photo: "https://i.pravatar.cc/150?img=64",
    fullName: "Skylar Bennett",
    description: "Sharing positive energy through creative content",
    likes: 29100,
    followers: 38300,
    following: 650
  },
  {
    username: "dylan_wood",
    photo: "https://i.pravatar.cc/150?img=65",
    fullName: "Dylan Wood",
    description: "Learning programming and building useful applications",
    likes: 7200,
    followers: 10500,
    following: 340
  },
  {
    username: "bella_barnes",
    photo: "https://i.pravatar.cc/150?img=66",
    fullName: "Bella Barnes",
    description: "Lifestyle creator sharing moments and inspiration",
    likes: 34700,
    followers: 47200,
    following: 780
  },
  {
    username: "connor_ross",
    photo: "https://i.pravatar.cc/150?img=67",
    fullName: "Connor Ross",
    description: "Developer passionate about technology and innovation",
    likes: 9400,
    followers: 13700,
    following: 410
  },
  {
    username: "hazel_henderson",
    photo: "https://i.pravatar.cc/150?img=68",
    fullName: "Hazel Henderson",
    description: "Creating memories and enjoying life's little moments",
    likes: 25900,
    followers: 34600,
    following: 570
  },
  {
    username: "aaron_coleman",
    photo: "https://i.pravatar.cc/150?img=69",
    fullName: "Aaron Coleman",
    description: "Software developer learning something new every day",
    likes: 6800,
    followers: 9900,
    following: 310
  },
  {
    username: "natalie_jenkins",
    photo: "https://i.pravatar.cc/150?img=70",
    fullName: "Natalie Jenkins",
    description: "Photography lover exploring beautiful places worldwide",
    likes: 31400,
    followers: 42500,
    following: 690
  },
  {
    username: "adrian_perry",
    photo: "https://i.pravatar.cc/150?img=71",
    fullName: "Adrian Perry",
    description: "Building modern websites with clean simple code",
    likes: 7900,
    followers: 11600,
    following: 370
  },
  {
    username: "ruby_powell",
    photo: "https://i.pravatar.cc/150?img=72",
    fullName: "Ruby Powell",
    description: "Creative lifestyle photographer sharing daily inspiration",
    likes: 28400,
    followers: 39100,
    following: 620
  },
  {
    username: "carter_long",
    photo: "https://i.pravatar.cc/150?img=73",
    fullName: "Carter Long",
    description: "Developer interested in AI and modern technology",
    likes: 10600,
    followers: 15100,
    following: 450
  },
  {
    username: "alice_patterson",
    photo: "https://i.pravatar.cc/150?img=74",
    fullName: "Alice Patterson",
    description: "Enjoying life creating art and traveling",
    likes: 22100,
    followers: 30200,
    following: 540
  },
  {
    username: "colton_hughes",
    photo: "https://i.pravatar.cc/150?img=75",
    fullName: "Colton Hughes",
    description: "Coding enthusiast building projects after college",
    likes: 5400,
    followers: 8200,
    following: 290
  },
  {
    username: "sadie_flores",
    photo: "https://i.pravatar.cc/150?img=76",
    fullName: "Sadie Flores",
    description: "Finding inspiration through travel and photography",
    likes: 29700,
    followers: 36700,
    following: 630
  },
  {
    username: "hunter_washington",
    photo: "https://i.pravatar.cc/150?img=77",
    fullName: "Hunter Washington",
    description: "Technology enthusiast learning and building daily",
    likes: 7300,
    followers: 11100,
    following: 350
  },
  {
    username: "maya_butler",
    photo: "https://i.pravatar.cc/150?img=78",
    fullName: "Maya Butler",
    description: "Creating beautiful content from everyday experiences",
    likes: 26800,
    followers: 35200,
    following: 580
  },
  {
    username: "leo_simmons",
    photo: "https://i.pravatar.cc/150?img=79",
    fullName: "Leo Simmons",
    description: "Full stack developer learning modern technologies",
    likes: 9100,
    followers: 12800,
    following: 400
  },
  {
    username: "naomi_foster",
    photo: "https://i.pravatar.cc/150?img=80",
    fullName: "Naomi Foster",
    description: "Sharing creativity beauty and positive energy",
    likes: 33900,
    followers: 45800,
    following: 740
  },
  {
    username: "max_bryant",
    photo: "https://i.pravatar.cc/150?img=81",
    fullName: "Max Bryant",
    description: "Learning code and building exciting web projects",
    likes: 6200,
    followers: 9400,
    following: 320
  },
  {
    username: "elizabeth_alexander",
    photo: "https://i.pravatar.cc/150?img=82",
    fullName: "Elizabeth Alexander",
    description: "Exploring art fashion travel and beautiful places",
    likes: 27400,
    followers: 36500,
    following: 600
  },
  {
    username: "cooper_russell",
    photo: "https://i.pravatar.cc/150?img=83",
    fullName: "Cooper Russell",
    description: "Building applications and solving interesting problems",
    likes: 8300,
    followers: 12200,
    following: 380
  },
  {
    username: "piper_griffin",
    photo: "https://i.pravatar.cc/150?img=84",
    fullName: "Piper Griffin",
    description: "Creative storyteller capturing beautiful life moments",
    likes: 30900,
    followers: 41800,
    following: 670
  },
  {
    username: "jordan_diaz",
    photo: "https://i.pravatar.cc/150?img=85",
    fullName: "Jordan Diaz",
    description: "Developer passionate about clean code and design",
    likes: 9700,
    followers: 14100,
    following: 430
  },
  {
    username: "willow_hayes",
    photo: "https://i.pravatar.cc/150?img=86",
    fullName: "Willow Hayes",
    description: "Living creatively and enjoying every new adventure",
    likes: 28600,
    followers: 37900,
    following: 620
  },
  {
    username: "parker_myers",
    photo: "https://i.pravatar.cc/150?img=87",
    fullName: "Parker Myers",
    description: "Learning technology and building useful digital products",
    likes: 6900,
    followers: 10200,
    following: 350
  },
  {
    username: "ivy_ford",
    photo: "https://i.pravatar.cc/150?img=88",
    fullName: "Ivy Ford",
    description: "Finding beauty through creativity and photography",
    likes: 25100,
    followers: 33400,
    following: 560
  },
  {
    username: "mason_hamilton",
    photo: "https://i.pravatar.cc/150?img=89",
    fullName: "Mason Hamilton",
    description: "Software developer exploring AI and web development",
    likes: 10800,
    followers: 15300,
    following: 460
  },
  {
    username: "sophie_graham",
    photo: "https://i.pravatar.cc/150?img=90",
    fullName: "Sophie Graham",
    description: "Traveling the world and sharing beautiful stories",
    likes: 36500,
    followers: 49700,
    following: 810
  },
  {
    username: "jackson_sullivan",
    photo: "https://i.pravatar.cc/150?img=91",
    fullName: "Jackson Sullivan",
    description: "Building software while constantly learning new things",
    likes: 7600,
    followers: 11400,
    following: 370
  },
  {
    username: "camila_wallace",
    photo: "https://i.pravatar.cc/150?img=92",
    fullName: "Camila Wallace",
    description: "Creative designer inspired by life and nature",
    likes: 29800,
    followers: 38400,
    following: 640
  },
  {
    username: "ashton_woods",
    photo: "https://i.pravatar.cc/150?img=93",
    fullName: "Ashton Woods",
    description: "Developer building simple solutions for complex problems",
    likes: 8700,
    followers: 12600,
    following: 390
  },
  {
    username: "maya_west",
    photo: "https://i.pravatar.cc/150?img=94",
    fullName: "Maya West",
    description: "Creating content and sharing positive experiences",
    likes: 31200,
    followers: 42600,
    following: 710
  },
  {
    username: "ryder_johnston",
    photo: "https://i.pravatar.cc/150?img=95",
    fullName: "Ryder Johnston",
    description: "Coding enthusiast interested in modern web development",
    likes: 6400,
    followers: 9300,
    following: 310
  },
  {
    username: "stella_hart",
    photo: "https://i.pravatar.cc/150?img=96",
    fullName: "Stella Hart",
    description: "Capturing beautiful moments wherever life takes me",
    likes: 27600,
    followers: 35100,
    following: 580
  },
  {
    username: "theo_mccarthy",
    photo: "https://i.pravatar.cc/150?img=97",
    fullName: "Theo McCarthy",
    description: "Learning coding and creating projects with passion",
    likes: 8100,
    followers: 11900,
    following: 360
  },
  {
    username: "rose_mcdonald",
    photo: "https://i.pravatar.cc/150?img=98",
    fullName: "Rose McDonald",
    description: "Finding inspiration in travel art and people",
    likes: 32100,
    followers: 43800,
    following: 690
  },
  {
    username: "archie_ross",
    photo: "https://i.pravatar.cc/150?img=99",
    fullName: "Archie Ross",
    description: "Developer exploring ideas and building useful applications",
    likes: 7500,
    followers: 10700,
    following: 340
  },
  {
    username: "lucy_morgan",
    photo: "https://i.pravatar.cc/150?img=100",
    fullName: "Lucy Morgan",
    description: "Living life creatively and sharing beautiful moments",
    likes: 34500,
    followers: 46100,
    following: 720
  }
];

  return (
    <div className='h-full w-100vw bg-blue-100 px-10 py-5 flex flex-row flex-wrap justify-center align-middle gap-6'>
      {
        users.map(function(params){
          return <Card photo={params.photo} username ={params.username} name={params.fullName} discription={params.description} likes={params.likes} followers={params.followers} following={params.following} />
        })
      }
    </div>
  )
}

export default App
