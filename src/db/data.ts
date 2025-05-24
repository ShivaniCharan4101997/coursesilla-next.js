
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';
import {CoursesProps,MainCourses} from './types'

export const courses: CoursesProps[] = [
  {
    id: 1,
    title: 'JavaScript',
    icon: SiJavascript,
  },
  {
    id: 2,
    title: 'React',
    icon: SiReact,
  },
  {
    id: 3,
    title: 'HTML5',
    icon: SiHtml5,
  },
  {
    id: 4,
    title: 'CSS3',
    icon: SiCss3,
  },
  {
    id: 5,
    title: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 6,
    title: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    id: 7,
    title: 'TailwindCSS',
    icon: SiTailwindcss,
  },
  {
    id: 8,
    title: 'Next.js',
    icon: SiNextdotjs,
  },
];




export const mainCourses: MainCourses[] = [
  {
    id: 1,
    title: 'JavaScript Essentials',
    slug: 'javascript',
    duration: '6 weeks',
    level: 'Beginner',
    projects: [
      { id: 1, title: 'To-Do List App' },
      { id: 2, title: 'Number Guessing Game' },
    ],
  },
  {
    id: 2,
    title: 'HTML & CSS Fundamentals',
    slug: 'html5',
    duration: '4 weeks',
    level: 'Beginner',
    projects: [
      { id: 1, title: 'Personal Portfolio' },
      { id: 2, title: 'Responsive Landing Page' },
    ],
  },
  {
    id: 3,
    title: 'React Development',
    slug: 'react',
    duration: '8 weeks',
    level: 'Intermediate',
    projects: [
      { id: 1, title: 'Weather App' },
      { id: 2, title: 'Blog Platform' },
    ],
  },
  {
    id: 4,
    title: 'TypeScript with React',
    slug: 'typescript',
    duration: '5 weeks',
    level: 'Intermediate',
    projects: [
      { id: 1, title: 'Task Manager' },
      { id: 2, title: 'Note-Taking App' },
    ],
  },
  {
    id: 5,
    title: 'Node.js & Express',
    slug: 'node.js',
    duration: '6 weeks',
    level: 'Advanced',
    projects: [
      { id: 1, title: 'RESTful API' },
      { id: 2, title: 'Auth System with JWT' },
    ],
  },
  {
    id: 6,
    title: 'Fullstack MERN App',
    slug: 'React',
    duration: '10 weeks',
    level: 'Advanced',
    projects: [
      { id: 1, title: 'E-commerce Platform' },
      { id: 2, title: 'Social Media App' },
    ],
  },
  {
    id: 7,
    title: 'Next.js Crash Course',
    slug: 'next.js',
    duration: '4 weeks',
    level: 'Intermediate',
    projects: [
      { id: 1, title: 'Blog Site with SSR' },
      { id: 2, title: 'Portfolio with CMS' },
    ],
  },
  {
    id: 8,
    title: 'Tailwind CSS Mastery',
    slug: 'tailwindcss',
    duration: '3 weeks',
    level: 'Beginner',
    projects: [
      { id: 1, title: 'Landing Page' },
      { id: 2, title: 'Dashboard UI' },
    ],
  },
  {
    id: 9,
    title: 'Advanced CSS3 Patterns',
    slug: 'css3',
    duration: '5 weeks',
    level: 'Advanced',
    projects: [
      { id: 1, title: 'State Management with Context' },
      { id: 2, title: 'Custom Hooks Library' },
    ],
  }
];

