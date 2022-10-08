import {
  RiHome2Line,
  RiImageFill,
  RiSuitcaseLine,
  RiChat3Line,
  RiTrophyLine,
  RiBookReadLine,
  RiPencilRuler2Line
} from 'react-icons/ri'
import {
  BiBuildingHouse,
} from 'react-icons/bi'
import {
  Home,
  About,
  Projects,
  Contact,
} from '@pages'

export const pages = [
  { id: 'home', href: '#home', text: 'Home', Icon: RiHome2Line, Component: Home },
  { id: 'about', href: '#about', text: 'About me', Icon: RiTrophyLine, Component: About },
  /* { id: 'qualification', href: '#qualification', text: 'Qualification', Icon: RiBookReadLine, Component: About }, */
  { id: 'projects', href: '#projects', text: 'Projects', Icon: RiImageFill, Component: Projects },
  { id: 'contact', href: '#contact', text: 'Contact', Icon: RiChat3Line, Component: Contact },
]

export const astronauts = [
  { img: require('@static/astronaut_1.svg').default },
  { img: require('@static/astronaut_2.svg').default },
  { img: require('@static/astronaut_3.svg').default },
  { img: require('@static/astronaut_4.svg').default },
  { img: require('@static/astronaut_5.svg').default },
  { img: require('@static/astronaut_6.svg').default },
  { img: require('@static/astronaut_7.svg').default },
]

export const skills = [
  {
    name: 'frontend',
    items: [
      { title: 'HTML', subtitle: 'Advanced', img: require('@static/html.svg').default },
      { title: 'CSS', subtitle: 'Advanced', img: require('@static/css.svg').default },
      { title: 'JavaScript', subtitle: 'Advanced', img: require('@static/javascript.svg').default },
      { title: 'React', subtitle: 'Intermediate', img: require('@static/react.svg').default },
      { title: 'Photoshop', subtitle: 'Intermediate', img: require('@static/photoshop.svg').default },
      { title: 'SASS', subtitle: 'Intermediate', img: require('@static/sass.svg').default },
    ],
  },
  {
    name: 'backend',
    items: [
      { title: 'Node.js', subtitle: 'Intermediate', img: require('@static/nodejs.svg').default },
      { title: 'TypeScript', subtitle: 'Intermediate', img: require('@static/typescript.svg').default },
      { title: 'MySQL', subtitle: 'Intermediate', img: require('@static/mysql.svg').default },
      { title: 'PostgreSQL', subtitle: 'Intermediate', img: require('@static/postgresql.svg').default },
      { title: 'Docker', subtitle: 'Basic', img: require('@static/docker.svg').default },
      { title: 'PHP', subtitle: 'Intermediate', img: require('@static/php.svg').default },
    ],
  },
]

export const companies = [
  { name: 'SICE', bg: 'linear-gradient(90deg, rgba(22,238,201,1) 0%, rgba(0,236,255,1) 100%)', img: require('@static/companies/sice.png'), },
  { name: 'Mercedes', bg: 'linear-gradient(90deg, rgba(161,184,175,1) 0%, rgba(70,88,85,1) 100%)', img: require('@static/companies/mercedes.png'), },
  { name: 'ALTEN', bg: 'linear-gradient(90deg, rgba(237,80,28,1) 0%, rgba(254,157,0,1) 100%)', img: require('@static/companies/alten.png'), },
  { name: 'SEAT', bg: 'linear-gradient(90deg, rgba(205,226,218,1) 0%, rgba(116,131,129,1) 100%)', img: require('@static/companies/seat.png'), },
  { name: 'KEEDIO', bg: 'linear-gradient(90deg, rgba(0,135,160,1) 0%, rgba(49,46,92,1) 100%)', img: require('@static/companies/keedio.png'), },
  { name: 'TECH Friendly', bg: 'linear-gradient(90deg, rgba(0,202,255,1) 0%, rgba(0,255,218,1) 100%)', img: require('@static/companies/techfriendly.png'), },
  { name: 'CPA Quality Services', bg: 'linear-gradient(90deg, rgba(105,217,131,1) 0%, rgba(26,134,76,1) 100%)', img: require('@static/companies/cpa.png'), },
  { name: 'Computacenter', bg: 'linear-gradient(90deg, rgba(132,243,245,1) 0%, rgba(58,186,252,1) 100%)', img: require('@static/companies/computacenter.png'), },
]

export const qualification = [
  {
    name: 'Education',
    Icon: RiPencilRuler2Line,
    items: [
      { title: 'Computer Engineering', company: 'Basque Country University, Spain', description: "I'm studying computer science engineering oriented to information gestion and software development", dates: '2019 - 2023' },
      { title: 'Computer Network System Administration', company: 'Egibide (Arriaga), Spain', description: 'I studied this career about computer administration.', dates: '2017 - 2019' },
      { title: 'Web Development School', company: 'Platzi Academy', description: '', dates: '2017 - 2019' },
    ],
  },
  {
    name: 'Work',
    Icon: BiBuildingHouse,
    items: [
      { title: 'Full Stack Engineer', company: 'SICE', description: 'My role is about building smart cities and Traffic engineering applications', dates: '2022' },
      { title: 'Full Stack Developer', company: 'TECH Friendly', description: 'My role was about building smart cities applications', dates: '2022' },
      { title: 'Full Stack Developer', company: 'CPA Quality Services', description: 'My role was about erp full stack development', dates: '2021 - 2022' },
    ],
  },
]