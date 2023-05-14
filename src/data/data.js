const navigation = [
    { name: 'Projects', href: '/project' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

const bio = [
  {
    title: "Hi, My name is Iaroslav Lasiichuk I'm Frontend Developer",
    content: "Hi, everyone!I'm a young aspiring junior web developer with a passion for technology and a strong desire to make a difference in the world. I'm constantly seeking new challenges and opportunities to learn and grow as a developer"
  }
]

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
    {
      id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 4,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 6,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  
]
const projects = [
  {
    id: 1,
    name: 'Movie Blog',
    description:'The application allows users to search for movies based on title. The application also allows for the user to register to our app to save movies watched, comment, and read critic reviews.',
    href: 'https://intense-island-90811.herokuapp.com/',
    imageSrc: 'https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-logo.png',
    imageAlt: "Javascript Logo",
  },
  {
    id: 2,
    name: 'The Tech Blog',
    description:'This is a CMS-style blog site for tech developers who want to publish articles, blog posts, and their thoughts and opinions. This site provides a user-friendly interface for managing posts, comments, and user accounts',
    href: 'https://intense-river-83466.herokuapp.com/',
    imageSrc: 'https://nodejs.org/_next/static/media/node.8ddb71ae.png',
    imageAlt: "Node js logo",
   
  },
  {
    id: 3,
    name: 'Note Taker',
    description:'TThis is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
    href: 'https://desolate-journey-55866.herokuapp.com/',
    imageSrc: '../assets/nodejs-express.png',
    imageAlt: "Node js express logo",
  },
  {
    id: 4,
    name: 'Note Taker',
    description:'TThis is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
    href: 'https://desolate-journey-55866.herokuapp.com/',
    imageSrc: '../assets/nodejs-express.png',
    imageAlt: "Node js express logo",
  },
  {
    id: 5,
    name: 'Note Taker',
    description:'TThis is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
    href: 'https://desolate-journey-55866.herokuapp.com/',
    imageSrc: '../assets/nodejs-express.png',
    imageAlt: "Node js express logo",
  },
  {
    id: 6,
    name: 'Note Taker',
    description:'TThis is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
    href: 'https://desolate-journey-55866.herokuapp.com/',
    imageSrc: '../assets/nodejs-express.png',
    imageAlt: "Node js express logo",
  },
]
export default { navigation, bio, posts, projects };