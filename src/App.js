import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Present from './pages/present';
import About from './pages/about';
import './styles/Footer.css';

// now in 2023 switch == routes so replace switch with routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// eveyrthing runs from this App function, can put html/jsx inside;
// with componenets we need to self close <asdf/> and only one
// we place the navbar above routes bc routes will go to different pages so we want the bavbar and the footer to be on eveyr single page
// so we keep them out of the routes but inside of the router
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/utd-rpi-chassis' element={<Home />} />
          <Route exact path='/present' element={<Present />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App
