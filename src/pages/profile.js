import React from 'react';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { ProgressBar} from "react-bootstrap";
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

const [user, setUser] = React.useState({attributes:{email: "user"}});
const [profile, setProfile] = React.useState("tmp");
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
    setUser(user);
    setProfile(p);
    console.log("logging the result")
    console.log(p)
    };
  fetchUser();

}, []);
  return user.attributes.email != undefined ? (
    <div>

      <h1>Welcome Back {user.attributes.email}</h1>
    
      <br></br>
      <h2>Api Call with status code {profile.body}</h2>

      <h3>Your learning modules ProgressBar</h3>
      <ProgressBar animated  variant="success" now={45} label={`${45}%`} />

      <br></br>
      <button
        onClick={() => signOut()}
        className="btn btn-primary">
        Sign Out
        </button>

    </div>
  ) : (
    <div></div>
  );
};

export default Profile;