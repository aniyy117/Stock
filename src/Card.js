import React from 'react'
import './Card.css';

const Card = ({skill:{icon,title, about,price}}) => 
<div className="skill-card">
    <img src={icon} alt="icon" className="skill-card_icon"/>
    <div className="skill-card_body">
        <h6 className="skill-card_title">{title}</h6>
        <p className="skill-card_content">{about}</p>
        <p className="skill-card_title">{price}</p>
        <p className="skill-card_market">Market Cap</p>
    </div> 
</div>

export default Card
