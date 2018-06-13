import React from 'react';

const HowItWork = (props) => {
  return(
    <div className="howitwork-container">
    <span className="header">Nutritioner is your very own nutrition planner where you can:</span>
      <ul >
        <li><img src="./src/js/images/pumpkin.png" alt="pumpkin"/> Search for foods and add them to your plan</li>
        <li><img src="./src/js/images/watermelon.png" alt="watermelon"/> Select weight to obtain nutritional value of the </li>
        <li><img src="./src/js/images/aubergine.png" alt="aubergine"/> Modify the plan to match your personal needs</li>
        <li><img src="./src/js/images/strawberries.png" alt="strawberries"/> Print your own plan</li>
      </ul>
    </div>
  );
};

export default HowItWork;
