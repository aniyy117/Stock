import React from 'react';
import axis from './image/cardImage/Axis-Bank.png';
import bajaj from './image/cardImage/bajaj.png';
import tata from './image/cardImage/tata.png';
import indus from './image/cardImage/indus.png';
import voda from './image/cardImage/voda.png';
import Card from './Card.js';
import './Slider.css'


const skills = [
  
    {
        icon: axis,
        title: 'Axis Bank',
        about:' AXISBANK',
        price : '2,18,056 cr'
    },
    {
        icon: bajaj,
        title: 'Bajaj finance',
        about:'BAJFINANCE',
        price : '3,42,788 cr'
    },
    {
        icon: indus,
        title:'Induslnd bank',
        about:' INDUSINDBK',
        price : '75,380 cr'
    },
    {
        icon: tata,
        title: 'Tata motors',
        about:'TATAMOTORS',
        price : '1,10,383 Cr'
    },
    {
        icon: voda,
        title: 'Vodafone idea',
        about:'IDEA',
        price : '24,568 Cr'
    },
]



function Slider() {
    return (
  <div className="about"> 
                <div className="row">
                    {
                      skills.map(skill =>
                        <Card key={skill.title} skill={skill}/>
                        )
                    }
                </div>
    </div>
    )
}

export default Slider
