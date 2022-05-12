import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '../components/Card';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RadioGroup, FormControl, FormLabel, Radio,FormControlLabel, DialogTitle, DialogContent, DialogContentText,DialogActions, } from '@material-ui/core';
import Button from 'react-bootstrap/Button';

const vault = ({apiName}) => {
  let card = {
    "id":	1,
    "title": "Amex Gold Card",
  "summary":	["Rose Gold is here to stay. Card Members can choose between a Gold or Rose Gold Card.", 
    "Earn 60,000 Membership Rewards® Points after you spend $4,000 on eligible purchases with your new Card within the first 6 months.","Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® Points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X)."],
  "img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/fdacfa40-ff5f-11eb-97b1-37a1bb7c2537.png",
  "offer": "50% off this month with 60,000 bonus pints",
  "credit_req": [700,750],
  "app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
  

}
let navigate = useNavigate();
async function signOut() {
  try {
      await Auth.signOut().then( (r) => 
      navigate("/")
      )
  } catch (error) {
      console.log('error signing out: ', error);
  }
}
const [step, setStep] = React.useState("1");
let tmpProfile = {
  "id" :"",
  "firstName":	"",
  "lastName":	"",
  "email":	"",
  "currentModule":	0
  };
const [profile, setProfile] = React.useState(tmpProfile)
const [cards, setCards] = React.useState("hi im paul")
const [cur, setCur] = React.useState("hi im paul")




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
  setProfile(p)
  let cardIds = p.cards;
  console.log("we got the card ids")
  console.log(cardIds)
  let retcards = []
  for (let x in cardIds) {
    
    request = {
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
    let card = await API.get(apiName,"/card/"+cardIds[x] ,request)
    retcards.push(card)
    
  }
  //console.log(retcards)
  setCards(retcards) 
  console.log(p)

  
  }; 
fetchUser();

}, []);


    switch (step){
    case "1":
      let img1 = cards[0].img
      let img2 = cards[1].img
      let img3 = cards[2].img
      console.log(cards)
      return (
        <>
        <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div style={{alignContent:"center"}}>
          <h3>Apply to card 1 at the start of your program</h3>
          <img style={{width:"250px", "max-height":"100%"}} src={img1}></img>
          <br></br><Button  variant="primary"
                   onClick={() => {setStep("2"); setCur(0);}}>Get the Skinny</Button>
          </div>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div style={{alignContent:"center"}}>
          <h3>Apply to card two four months into your program</h3>
          <img style={{width:"250px", "max-height":"100%"}} src={img2}></img>
          <br></br><Button  variant="primary" onClick={() => {setStep("2"); setCur(1);}}>Get the Skinny</Button>
          </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div style={{alignContent:"center"}}>
          <h3>Apply to card 3 eight months into your program</h3>
          <img style={{width:"250px", "max-height":"100%"}} src={img3}></img>
          <br></br><Button  variant="primary" onClick={() => {setStep("2"); setCur(2);}}>Get the Skinny</Button>
          </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="d-grid gap-2">
  <Button variant="outline-primary" size="lg" onClick={() => navigate("/profile")}>
   Go back to profile
  </Button>
  <Button variant="outline-secondary" size="lg" onClick={() => navigate("/module")}>
    Current Learning Module
  </Button>
  <Button
        variant="outline-success" size="lg"
        onClick={() => signOut()}
        >
        Sign Out
  </Button>
</div>

    </>
  );
  case "2": return (<div><Dialog
    open
  >
  <Card card={cards[cur]}/>
  <Button color="primary"
                  variant="contained" onClick={() => setStep("1")}>Back to vault</Button>
    </Dialog ></div>)
  
};
};


export default vault