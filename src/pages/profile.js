import React from 'react';
import { Auth, auth0SignInButton } from 'aws-amplify';
import { useNavigate } from "react-router-dom";






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

const [user, setUser] = React.useState({attributes:{email: "word"}});

React.useEffect(() => {
    const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    setUser(user);    
    };
  fetchUser();

}, []);
  return user.attributes.email != undefined ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Welcome Back {user.attributes.email}</h1>
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