import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stack from './component/Stack';
import CourseDetail from './component/CourseDetail';
import HomePage from './component/HomePage/HomePage';

function App() {
  return (
    <ParallaxProvider>
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/coursedetail' element={<CourseDetail />} />
            <Route exact path='/enrollment' element={<Stack />} />
          </Routes>
        </Router>
      </div>
    </ParallaxProvider>
  );
}

export default App;
