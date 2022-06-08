import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "../css/TinderCards.css";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Jeff Bezos",
            url: "https://wallpapercave.com/wp/wp4025632.jpg",
        },
        {
            name: "Elon Musk",
            url: "https://images.wsj.net/im-557996?width=860&height=573",
        },
        {
            name: "Bill Gates",
            url: "https://api.time.com/wp-content/uploads/2018/09/bill-gates-africa.jpg",
        }
    ]);

    return ( 
        <div>
            <div className="tinderCars_cardContainer">
            {people.map(person => (
               <TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={['up','down']}
               >
                   <div 
                   style={{ backgroundImage: `url(${person.url})`}}
                   className="card">
                       <h3>{person.name}</h3>
                   </div>
               </TinderCard>
            ))}
            </div>
            
        </div>
    ) 
}

export default TinderCards;