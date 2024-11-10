import apiimg from '../icons/api.jpeg';
import website from '../icons/website.jpeg';
// import website from "../icons/website.jpeg";
import mobile from '../icons/Mobileapp.avif';

export const cardData = [
  {
    id: 1,
    image:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg',
    title: 'Modular Interiors',
    description: 'Functional Kitchen, Wardrobe and storage',
  },
  {
    id: 2,
    image:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    title: 'Full Home Interiors',
    description: 'Turnkeys Interior Solutions for your home',
  },
  {
    id: 3,
    image:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/commercial-1682066986-5w6x0.jpg',
    title: 'Luxury Interiors',
    description: 'Tailored Interiors that redefine elegance',
  },
  {
    id: 4,
    image:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/vinviago-desk-1692618545-ToZjR.jpg',
    title: 'Renovations',
    description: 'Expert solutions to upgrade your home',
  },
];

export const Hcard = [
  {
    image: apiimg,
    title: 'API Integration',
    desc: 'In the backend, Node.js with Express can be used to create RESTful API routes that handle HTTP requests, interact with a database (like MongoDB or PostgreSQL), and return JSON data. In the frontend, React fetches data from these API endpoints using fetch or libraries like Axios, then displays it in the UI. ',
  },
  {
    image: mobile,
    title: 'Mobile App development- PWA',
    desc: 'Progressive Web Apps (PWAs) combine the best of web and native apps, offering offline access, push notifications, and fast performance without app store downloads. Built using HTML, CSS, and JavaScript, they leverage service workers and web manifests for native-like features..',
  },
  {
    image: website,
    title: 'Web development with React.js',
    desc: 'Website development with React and JS involves creating dynamic and interactive web applications using React, a popular JavaScript library for building user interfaces. React allows developers to build reusable components that manage their own state and update efficiently when the data changes.',
  },
];
