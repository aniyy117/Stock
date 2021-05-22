import firebase from './ult/firebase';
import React, {useState} from 'react';
import Slider from './Slider';
import {InputGroup , FormControl , Button} from 'react-bootstrap';
import logo from './image/logo.png'
import axis from './image/cardImage/Axis-Bank.png';
import {Link} from 'react-router-dom';

function Login() {

const [title , setTitle ] = useState('');
//const [show , setShow ] = useState(false);

  const handleOnChange = (e) =>{
    setTitle(e.target.value);
  };

  const createTodo = () =>{
 
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title, 
      Compelete : false,
    };

    todoRef.push(todo);
  };

    return (
   

    <div>
      <section>
      <header>
      <div className="logo">
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <form className="d-flex">
        <button className="btn btn-outline-btn btn-outline-primary btn-sm top-btn" type="submit">Get Started</button>
      </form>
      </header>
      <div className="content">
      <div className="textbox">
      <h3>We help you learn and buy stocks in tokenzied form</h3>
      <p>Now, get bite-sized analysis insights which help<br/> you make informed buying decisions</p>
      <InputGroup className="mb-4">
    <FormControl
      type="number"
      pattern="[0-9]{10}"
      placeholder="Enter Your Mobile Number"
      className ="textArea"
      onChange={handleOnChange}
    />
    <InputGroup.Append>
      <Button variant="primary" className ="textArea" type="submit" onClick ={() => {createTodo();}} >Gets Started</Button>
    </InputGroup.Append>
  </InputGroup>
   <p className="btm_line">No Demat account needed - available for demo</p>
          </div>
          </div>
      </section>
      <div>
        <Slider/>
      </div>
        </div>
    )
}

export default Login
