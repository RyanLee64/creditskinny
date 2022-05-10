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
import Profile from './pages/profile';
import Survey from './pages/survey';
import Skinny from './components/Skinny'
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import Footer from './components/Footer'
import ModulePlayer from './components/ModulePlayer';
Amplify.configure(awsconfig);
Amplify.configure({  API: {
  endpoints: [
    {
      name: "CreditSkinny",
      endpoint:
        "https://0kx8i3p4ei.execute-api.us-east-1.amazonaws.com/dev",
    },
  ],
}});
const apiName="CreditSkinny"


function App() {
  const [user, setUser] = React.useState("");

  return (
    <>
    <link
    rel="stylesheet"
    href="https://video-react.github.io/assets/video-react.css"
    />
    <div className='App Font'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path='/about' element={<About user={user} />} />
        <Route path='/services' element={ <Services user={user}/>} />
        <Route path='/contact-us' element={ <Contact />} />
        <Route path='/sign-up' element={ <SignUp />} />
        <Route path='/sign-in' element={ <SignIn user={user} setUser={setUser}/>} />
        <Route path='/profile' element={ <Profile apiName={apiName}/>}/>
        <Route path='/user/onboarding' element={ <Survey apiName={apiName}/>}/>
      </Routes>
      <Footer />  
    </Router>
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
        width:'350px'
      }}>
    <ModulePlayer />
    </div>

    </>
  );
}




export default  (App);
