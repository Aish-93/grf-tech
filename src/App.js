import logo from './logo.svg';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Features from './component/Feature';
import Blogs from './component/Blogs';
import Pricing from './component/Pricing';
import Stats from './component/Stats';
import Courses from './component/Courses';
import Drawer from './component/Drawer';
import Footer from './component/Footer';
import Card from './component/Card';
import Hcards from './component/Hcards';
import Stack from './component/Stack';
import { AdvancedBannerTop } from './component/AdvancedBannerTop';
import Faqs from './component/Faqs';
import Carousel from './component/Carousel/Carousel';
import Course from './component/Course';
import CourseDetail from './component/CourseDetail';

function App() {
  return (
    <ParallaxProvider>
      <div className='App'>
        <Router>
          <Header />
          <AdvancedBannerTop />
          <Features />
          <Routes>
            <Route exact path='/' element={<CourseDetail />}></Route>
            {/* <Route exact path='/' element={<CourseDetail />}></Route>
            <Route exact path='/' element={<CourseDetail />}></Route>
            <Route exact path='/' element={<CourseDetail />}></Route>
            <Route exact path='/' element={<CourseDetail />}></Route> */}
          </Routes>
        </Router>

        {/* <Drawer/> */}
        {/* <Courses/> */}
        <Stats />
        <Hcards />
        <Course />
        {/* <Pricing /> */}
        {/* <Stack/> */}
        <Card />
        <Carousel />
        <Blogs />
        <Faqs />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
