import React from 'react';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { ProgressBar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../App.css';




const Profile = ({apiName}) => {



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

React.useEffect(() => {
    const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    let token = user.signInUserSession.idToken.jwtToken;

    console.log(user);
    let request = {
      headers: {"Authorization": token},
      body: 
          JSON.stringify({
            "username": "b138f03f-4904-4031-ada1-767765199a39",
            "currentModule": "1",
            "email": "dbl2127@columbia.edu",
            "firstName": "ryan",
            "lastName": "lee"
           })
      
    };
    let p = await API.get(apiName,"/user/"+user.username ,request)
    console.log(p)
    setProfile(p)
    }; 
  fetchUser();

}, []);
  return profile.currentModule == -1 ? (
    <div>
      <h1>Welcome to Credit Skinny! You will be guided through a survey that inform our personalized credit card suggestions!</h1>
      <br></br>
      <div className="d-grid gap-2">
  <Button variant="success" size="lg" href="/user/onboarding">
    Begin Onboarding
  </Button>
    </div>

    </div>
    
  ) : (
    <div>

      <h1>Welcome Back {profile.firstName}</h1>
    
      <br></br>

      <h3>Your learning modules Progress Bar</h3>
      <ProgressBar animated  variant="success" now={100*(parseInt(profile.currentModule)/10)} label={`${100*(parseInt(profile.currentModule)/10)}%`} />

      <br></br>
     
        <div className="d-grid gap-2">
  <Button variant="outline-primary" size="lg">
    Personalized Credit Card Vault
  </Button>
  <Button variant="outline-secondary" size="lg" onClick={() => navigate("/module")}>
    Current Learning Module
  </Button>
  <Button
        variant="outline-info" size="lg"
        >
        Edit Profile
  </Button>
  <Button
        variant="outline-success" size="lg"
        onClick={() => signOut()}
        >
        Sign Out
  </Button>
</div>


    </div>
  );
};

export default Profile;