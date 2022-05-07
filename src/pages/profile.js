import React from 'react';
import { Auth } from 'aws-amplify';
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


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>User Profile</h1>
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