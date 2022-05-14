import React from 'react';
import Skinny from '../components/Skinny'
import { ProgressBar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



let c = [{
  "id":	1,
  "title": "Amex Gold Card",
"summary":	["Rose Gold is here to stay. Card Members can choose between a Gold or Rose Gold Card.", 
  "Earn 60,000 Membership Rewards® Points after you spend $4,000 on eligible purchases with your new Card within the first 6 months.","Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® Points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X)."],
"img" : "https://thepointsguy.global.ssl.fastly.net/us/originals/2022/05/4e7d24d0-66ff-11eb-be9c-9790947db9db-1.png?width=500&dpr=1&auto=webp",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
{
  "id":	2,
  "title": "Capital One Venture Rewards Credit Card",
"summary":	["Earn 5X miles on hotels and rental cars booked through Capital One Travel, where you'll get Capital One's best prices on thousands of trip options", "Earn unlimited 2X miles on every purchase, every day."],
"img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/ff304640-e963-11eb-a48f-65ac0bb53c5b.png",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
{
  "id":	3,
  "title": "Citi Premier Card",
"summary":	["Earn 3 Points per $1 spent at Restaurants and Supermarkets", "Earn 3 Points per $1 spent at Gas Stations, Air Travel and Hotels", "Earn 1 Point per $1 spent on all other purchases"],
"img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/7c3d2c90-dfe9-11eb-99d8-ddd3faec9ad4.png",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
]

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
    <div 
      style={{
        padding: '50px',
        justifyContent: 'center',
      }}

    >
      <h1>Ready to Start your Credit Journey?</h1>
      <Button style={{border: "", background:"#4baf0b", size: "xl"}} onClick={() => navigate("/sign-up")}>Get Started</Button>
      <br></br>

    </div>
    < Skinny cards={c} />
    </>
  );
};

export default Home;
