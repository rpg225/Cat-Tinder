import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [cats, setCats] = useState([
    {
      name: "Sphynx Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Cat-of-breed-the-Canadian-Sphynx-768x576.jpg",
    },
    {
      name: "Persian Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Show-champion-red-with-white-Persian-768x512.jpg",
    },
    {
      name: "Siamese Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Oriental-siamese-cat-768x384.jpg",
    },
    {
      name: "Maine Coone Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Beautiful-Red-Maine-Coon-768x512.jpg",
    },
    {
      name: "Bengal Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Bengal-cat-like-a-leopard-sneaks-768x384.jpg",
    },
    {
      name: "Bengal Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Bengal-cat-like-a-leopard-sneaks-768x384.jpg",
    },
    {
      name: "Ragdoll Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Bengal-cat-like-a-leopard-sneaks-768x384.jpg",
    },
    {
      name: "Ragdoll Cat",
      url: "https://cats.com/wp-content/uploads/2020/10/Bengal-cat-like-a-leopard-sneaks-768x384.jpg",
    },
    
    
    
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('Removing: ' + nameToDelete);
    //setLastDirection 
    (direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    
    <div className="tinderCards__cardContainer">
      {cats.map((cat) => (
        <TinderCard
          className="swipe"
          key={cat.name}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, cat.name)}
          onCardLeftScreen={() => outOfFrame(cat.name)}
        >
          <div
            style={{ backgroundImage: `url(${cat.url})` }}
            className="card"
          >
            <h3>{cat.name}</h3>
            {/* Additional card content can be added here */}
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
