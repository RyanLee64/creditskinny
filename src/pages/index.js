import React from 'react';
import Skinny from '../components/Skinny'
import { ProgressBar, Button } from 'react-bootstrap';

let c = [{
  "id":	1,
  "title": "Amex Gold Card",
"summary":	["Rose Gold is here to stay. Card Members can choose between a Gold or Rose Gold Card.", 
  "Earn 60,000 Membership Rewards® Points after you spend $4,000 on eligible purchases with your new Card within the first 6 months.","Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® Points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X)."],
"img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/fdacfa40-ff5f-11eb-97b1-37a1bb7c2537.png",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
{
  "id":	2,
  "title": "Amex Gold Card",
"summary":	["Rose Gold is here to stay. Card Members can choose between a Gold or Rose Gold Card.", 
  "Earn 60,000 Membership Rewards® Points after you spend $4,000 on eligible purchases with your new Card within the first 6 months.","Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® Points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X)."],
"img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/fdacfa40-ff5f-11eb-97b1-37a1bb7c2537.png",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
{
  "id":	3,
  "title": "Amex Gold Card",
"summary":	["Rose Gold is here to stay. Card Members can choose between a Gold or Rose Gold Card.", 
  "Earn 60,000 Membership Rewards® Points after you spend $4,000 on eligible purchases with your new Card within the first 6 months.","Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® Points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X)."],
"img" : "https://cdn.prodstatic.com/shared/images/cards/278x175/fdacfa40-ff5f-11eb-97b1-37a1bb7c2537.png",
"offer": "50% off this month with 60,000 bonus pints",
"credit_req": [700,750],
"app_link" : "https://creditcards.chase.com/a1/22Q2/sapphirepreferred/compare?CELL=6H8X&AFFID=pngc6t7Ewoo-X9Law8G61Jt.5aR8ddxcIw&pvid=f3325adf2e744440a89b1ed2ca3181b8&jp_cmp=cc/1086566/aff/3-10004085/na"
},
]

const Home = () => {
  return (
    <>
    <div 
      style={{
        padding: '50px',
        justifyContent: 'center',
      }}

    >
      <h1>Ready to Start your Credit Journey?</h1>
      <br></br>
    </div>
    < Skinny cards={c} />
    </>
  );
};

export default Home;
