import React, { useState } from 'react'
import "./FormValidation.css";

const FormValidation = () => {

    //? while using multiple input fields we can use single state object to manage all the fields
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");


    const onSubmitHandler = (e) => {
       e.preventDefault();
      if (formData.email.trim() === "" || formData.password.trim() === "") {
        setError("Both fields are required");
        return;
      }
      setError("");
      setFormData({ email: "", password: "" });
      console.log("Form Submitted", formData);
    }

    const onChangeHandler = (e) => {
        //for taking the dynamic values from multiple input fields
        const {name, value} = e.target;
        const newData = { ...formData, [name]: value };
            setFormData(newData);
            if (newData.email.trim() !== "" && newData.password.trim() !== "") setError("");
    }

  return (
    <form className='formContainer' onSubmit={onSubmitHandler}>
        <h2>Form Validation</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          placeholder='Enter the Email'
          onChange={onChangeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder='Enter the Password'
          onChange={onChangeHandler}
        />
        <button type='submit'>Submit</button>
        {error && <p className="error">{error}</p>}
    </form>
  )
}

export default FormValidation