import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,faJs ,faReact,faNode,faBattleNet} from '@fortawesome/free-brands-svg-icons';
const features = [
  {
    name: 'Javascript',
    description:
      'Learn the basics of JavaScript, including variables, data types, loops, and functions. Dive into more complex topics like closures, asynchronous programming, and the event loop',
    icon: ()=> <FontAwesomeIcon icon={faJs} size='2xl' color='#F0DB4F'/>
  },
  {
    name: 'Node-js',
    description:
      'Get a solid foundation in Nodejs, exploring key concepts, architecture, and the Nodejs ecosystem. Create dynamic, data-driven web applications using Node.js, Discover how to design and implement RESTful services using Nodejs',
    icon: ()=> <FontAwesomeIcon icon={faNode} size='2xl' color='green' />,
  },
  {
    name: 'React',
    description:
      'Understand the core concepts of React, including components, props, and state management. Build your first React application from scratch and get hands-on experience',
    icon: ()=> <FontAwesomeIcon icon={faReact} size='2xl' color="#61dafb" />,
  },
  {
    name: 'Full Stack Apllication',
    description:
      'Combine React with backend technologies like Node.js and Express to create full-stack application. Learn how to work with APIs, handle authentication, and manage database interactions',
    icon: ()=> <FontAwesomeIcon icon={faBattleNet} size='2xl' />,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <h3 className="mt-6 text-lg/8 text-gray-600">
          Unlock Your Potential with Our Coding and Learning Platform!    
          </h3>
          <p>
          Are you ready to embark on a journey to mastering the world of coding? Our platform offers a comprehensive and engaging experience tailored for learners of all levels. Whether you’re a complete beginner or looking to sharpen your skills, we’ve got you covered!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
