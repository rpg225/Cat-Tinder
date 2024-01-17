import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

p
  


  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="tinderCards_Container">
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
