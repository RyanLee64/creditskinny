import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Skinny from './components/Skinny'




function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/contact-us' element={ <Contact />} />
        <Route path='/sign-up' element={ <SignUp />} />
        <Route path='/sign-in' element={ <SignIn />} />
      </Routes>
    </Router>
    </div>

  );
}




export default  (App);
