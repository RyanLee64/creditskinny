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
import Module from './pages/module';
import Skinny from './components/Skinny'
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import Footer from './components/Footer'
import Vault from './pages/vault';

import ModulePlayer from './components/ModulePlayer';
Amplify.configure(awsconfig);
Amplify.configure({  API: {
  endpoints: [
    {
      name: "CreditSkinny",
      endpoint:
        "https://0kx8i3p4ei.execute-api.us-east-1.amazonaws.com/prod",
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
    
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <div className='App Font'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path='/about' element={<About user={user} />} />
        <Route path='/services' element={ <Services user={user}/>} />
        <Route path='/contact-us' element={ <Contact />} />
        <Route path='/sign-up' element={ <SignIn registered={"signup"}  user={user} setUser={setUser} />} />
        <Route path='/sign-in' element={ <SignIn registered={"signin"} user={user} setUser={setUser}/>} />
        <Route path='/profile' element={ <Profile apiName={apiName}/>}/>
        <Route path='/user/onboarding' element={ <Survey apiName={apiName}/>}/>
        <Route path='/module' element={<Module apiName={apiName}/>}/>
        <Route path='/vault' element={<Vault apiName={apiName}/>}/>

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
    </div>

    </>
  );
}




export default  (App);
