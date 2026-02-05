import React from 'react'
import "./TogglePassword.css";

const TogglePassword = () => {

const [showPassword, setShowPassword] = React.useState(false);
const [inputValue, setInputValue] = React.useState("");

  return (
    <div className='toggleContainer'>
        <label className='passwordLabel' htmlFor="pass">Password :</label>
        <input 
          type={showPassword ? "text" : "password"} 
          id="pass"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide Password" : "Show Password"}
        </button>
    </div>
  )
}

export default TogglePassword