import './App.css';
import React from 'react';
// import {BrouserRouter as Router, Route, Link} from "react-router-dom"
 import Login from "./cmp/Login/Login.js";
 import Signup from "./cmp/signup/signup.js";
 import Nav from "./cmp/nav/nav.js";
 import Img from "./cmp/img/img.js";
 import Icon from "./cmp/icon/icon.js";
import { useEffect, useState } from 'react';
function App() {
  const [show, setShow]=useState(true)
  return (
        <div className='App'>
      <Img/>
      <div className='body'><Nav/>
      <div className='signinsignup'>
        
        <div className='heading'><h1 onClick={()=>{setShow(true)}} className="hin">Signin    </h1>
     <h1 onClick={(e)=>{setShow(false)}}  className="hup">   Signup</h1></div>
 {show ? <Login/> : <Signup/>}
 <Icon/>
      </div></div>
      
      
        
      
      
      
    </div>
    
  
  ); 
}
export default App;
