import {
  RiHome2Line,
  RiImageFill,
  RiChat3Line,
  RiTrophyLine,
} from 'react-icons/ri'
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
  /* { id: 'projects', href: '#projects', text: 'Projects', Icon: RiImageFill, Component: Projects }, */
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
      { title: 'React', subtitle: 'Advanced', img: require('@static/react.svg').default },
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
      { title: 'Docker', subtitle: 'Intermediate', img: require('@static/docker.svg').default },
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

export const education = [
  { title: 'Computer engineering in management and information systems', school: 'Basque Country University, Spain',  dates: '2019 - 2023' },
  { title: 'Computer Network System Administration', school: 'Egibide (Vitoria, Basque Country, Spain)', dates: '2017 - 2019' },
  { title: 'Web Development School', school: 'Platzi Academy', dates: '2020 - 2021' },
]

export const certifications = [
  { title: 'Frontend Dev in React and React Native Course', school: 'Udemy Alumni', dates: '2020' },
  { title: 'Web development Certificate', school: 'Google Activate', dates: '2020' },
  { title: 'English B2 certificate', school: 'Platzi Academy', dates: '2021' },
]

export const work = [
  { title: 'Smart city software engineer', company: 'SICE', description: 'My role is about building smart cities and Traffic engineering applications in which large amounts of data are shown taking care about security and performance.', dates: '2022' },
  { title: 'Smart city oriented full stack Developer', company: 'TECH Friendly', description: 'My role was about building smart cities applications with big amounts of data with apis rest and charts', dates: '2022' },
  { title: 'Full Stack Developer', company: 'CPA Quality Services', description: 'My role was about ERP full stack development. I was in charge to develop software to manage the company data.', dates: '2021 - 2022' },
  { title: 'Computer systems technician', company: 'Computacenter Iberia', description: 'My role in this company was maintaining the computer systems equipment and solving second level issues.', dates: '2021 - 2022' },
]