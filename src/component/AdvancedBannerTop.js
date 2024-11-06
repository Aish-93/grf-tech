import { ParallaxBanner } from "react-scroll-parallax";
// import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import "../App.css"
const links = [
    { name: 'Interactive Courses', href: '#' },
    { name: 'Expert Instructors', href: '#' },
    { name: 'Flexible Learning', href: '#' },
    { name: 'Community Support', href: '#' },
  ]
  const stats = [
    { value: 'Interactive Courses', name: 'Dive into hands-on projects and real-world scenarios that make learning coding fun and practical.' },
    { value: 'Expert Instructors', name: 'Learn from industry professionals who bring their expertise and passion to every lesson.' },
    { value: 'Flexible Learning', name: 'Access our courses anytime, anywhere, and learn at your own pace. Perfect for busy schedules!' },
    { value: 'Community Support', name: 'Join a vibrant community of fellow learners. Collaborate, share ideas, and get feedback to enhance your learning experience' },
  ]
export const AdvancedBannerTop = () => {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <div className="headline white">
        <div className="relative isolate overflow-hidden bg-transparent py-8 sm:pb-32 ">
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-gray-50 sm:text-7xl">Why Choose Us?</h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">
              Our courses are priced to ensure everyone can access quality education without overspending.
              Enjoy a wide range of courses, tutorials, and materials all in one place, eliminating the need for multiple subscriptions.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {/* {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col gap-3 min-h-56">
                    <dd className="text-2xl font-semibold tracking-tight text-white ">{stat.value}</dd>
                    <dt className="text-base/7 text-gray-300 flex justify-center">{stat.name}</dt>
                    
                  </div>
                ))} */}
              </dl>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    )
  };

  const foreground = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};
