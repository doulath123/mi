import  React  from "react"


import "./signup.css"
function Signup(){
   
    return (
        <div>
             <select name="cars" id="cars">
  <optgroup label="A">
    <option >Afghanistan</option>
    <option >Algeria</option>
    <option>American Samoa</option>
    <option>Andorra</option>
    <option>Angola</option>

  </optgroup>
  <optgroup label="B">
  <option>Bahamas</option>
  <option>Bahrain</option>
  <option>Bangladesh</option>
  <option>Barbados</option>
  <option>Belarus</option>

  </optgroup>
  <optgroup label="c">
  <option>Cape Verde</option>
  <option>Cambodia</option>
  <option>Cameroon</option>
  <option>Canada</option>
  <option>Cayman Islands</option>
  

  </optgroup>
  <optgroup label="i">
  <option>Iceland</option>
  <option>India</option>
  <option>Indonesia</option>
  <option>Iran</option>
  <option>Iraq</option>
  

  </optgroup>
  
  
</select><br/><br/>
<form><input className="input" placeholder="Email" type="email" /><br/><br/>
<input className="input" placeholder="Password" type="password" /><br/><br/>
  <button className="buttsignin" >NEXT</button></form>
  
  <h3 className="hor">Create using a phone number</h3>
  <h3 className="op">More options</h3>
  
        </div>
    )
}
export default Signup;