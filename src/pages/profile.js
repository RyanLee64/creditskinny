import React from 'react';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { ProgressBar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../App.css';




const Profile = () => {



async function signOut() {
    try {
        await Auth.signOut().then( (r) => 
        navigate("/")
        )
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
let navigate = useNavigate();
let tmpProfile = {
  "id" :"",
  "firstName":	"",
  "lastName":	"",
  "email":	"",
  "currentModule":	0
  };
const [user, setUser] = React.useState({attributes:{email: "user"}});
const [profile, setProfile] = React.useState(tmpProfile);
const apiName = "AI Customer Service API";
const path = "/chatbot";

React.useEffect(() => {
    const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    let token = user.signInUserSession.idToken.jwtToken;

    console.log(user);
    let request = {
      headers: {"Authorization": token},
      body: 
          JSON.stringify({messages: [{
            type: 'unstructured',
            unstructured: {
              text: "Hi im paul"
            }
          }]})
      
    };
    let p = await API.post(apiName,path ,request)
    let body = JSON.parse(p.body)
    p = body
    console.log(p)
    setUser(user);
    setProfile(p);
    console.log(p.currentModule)
    console.log("logging the result")
    console.log(p)
    };
  fetchUser();

}, []);
  return profile.currentModule == -1 ? (
    <div>
      Welcome to Credit Skinny! You will be guided through a survey that inform our personalized credit card suggestions!
      <br></br>
      <Button variant="light" href="/user/onboarding">Start Onboarding</Button>

    </div>
    
  ) : (
    <div>

      <h1>Welcome Back {profile.firstName}</h1>
    
      <br></br>

      <h3>Your learning modules ProgressBar</h3>
      <ProgressBar animated  variant="success" now={45} label={`${45}%`} />

      <br></br>
      <button
        onClick={() => signOut()}
        className="btn btn-primary">
        Sign Out
        </button>

    </div>
  );
};

export default Profile;