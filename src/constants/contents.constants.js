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
  Projects
} from '@pages'

export const pages = [
  { id: 'home', href: '#home', text: 'Home', Icon: RiHome2Line, Component: Home },
  { id: 'about', href: '#about', text: 'About me', Icon: RiTrophyLine, Component: About },
  /* { id: 'qualification', href: '#qualification', text: 'Qualification', Icon: RiBookReadLine, Component: About }, */
  { id: 'projects', href: '#projects', text: 'Projects', Icon: RiImageFill, Component: Projects },
  { id: 'contact', href: '#contact', text: 'Contact', Icon: RiChat3Line, Component: About },
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
  { name: 'SICE', bg: '', imag: require('@static/companies/sice.png') },
  { name: 'ALTEN', bg: '', imag: require('@static/companies/alten.png') },
  { name: 'KEEDIO', bg: '', imag: require('@static/companies/keedio.png') },
  { name: 'TECH Friendly', bg: '', imag: require('@static/companies/techfriendly.png') },
  { name: 'CPA Quality Services', bg: '', imag: require('@static/companies/cpa.png') },
  { name: 'Mercedes', bg: '', imag: require('@static/companies/mercedes.png') },
  { name: 'Computacenter', bg: '', imag: require('@static/companies/computacenter.png') },
  { name: 'SEAT', bg: '', imag: require('@static/companies/seat.png') },
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