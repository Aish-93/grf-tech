import React from 'react';
import Header from '../Header';
import { AdvancedBannerTop } from '../AdvancedBannerTop';
import Features from '../Feature';
import Stats from '../Stats';
import Hcards from '../Hcards';
import Course from '../Course';
import Card from '../Card';
import Team from '../Team/Team';
import Blogs from '../Blogs';
import Faqs from '../Faqs';
import Footer from '../Footer';
import Carousel from '../Carousel';
import ReachOut from '../ReachOut/ReachOut';
import Banner from '../Banner/Banner';
import Company from '../Companies/Company';
import Quote from '../Carousel/Quote';
import Training from '../OfferingTraining/Training';
// import Typing from '../Typing/Typing';
import { Typing } from '../Typing/Typing';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Experts from '../Experts/Experts';
import company from '../../icons/company.png';
import Certificate from '../Certificate/Certificate';

const HomePage = () => {
  return (
    <div>
      <Header />

      <Banner />
      <Training />
      {/* <AdvancedBannerTop /> */}
      {/* <Features /> */}
      <Stats />
      <WhyChooseUs />

      {/* <Quote /> */}
      <Typing
        // heading='Things for learn:'
        dataText={[
          'Learn Frontend Development...',
          'Build Projects with React.js...',
          'Write Professional Emails...',
          'Enhance Your Coding Skills...',
          'Discover Career-Boosting Skills...',
          'Level Up in Web Development...',
          'Discover Career-Boosting Skills...',
          'Become a Full-Stack Developer...',
          'Explore UI/UX Design Techniques...',
          'Learn Certified Courses...',
        ]}
      />
      <Experts />
      {/* <Hcards /> */}
      <Course />
      {/* <Company /> */}
      <div>
        <h2 className='text-5xl my-4 pt-3 text-center font-semibold'>
          Projects & Training
        </h2>
        <img className='mx-auto' src={company} alt='' />
      </div>
      <Certificate />

      {/* <Carousel /> */}
      {/* <Card /> */}
      {/* <Blogs /> */}
      <Faqs />
      <Team />
      <ReachOut />

      <Footer />
    </div>
  );
};

export default HomePage;
