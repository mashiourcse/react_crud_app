import React, { useState } from 'react'
import env from "react-dotenv";

import { useNavigate } from 'react-router-dom';
const URL = env.URL;

export const CreateUser = () => {

  const navigate = useNavigate();
    
  const [user, setUser] = useState( {
      name: '',
      age: ''
    })

  const [success, setSuccess] = useState(false);
   
    const handleSubmitData = (user)=>{
        
      fetch( URL, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then( (res)=>{
        if(!res.ok){
          throw Error("could not post");

        }else {
          setSuccess(true);
        }
      })
      .catch( (err)=>{
        console.log(err.message);
      })

    }
    const handleSubmit = (e)=>{

      e.preventDefault();
      handleSubmitData(user);
    }

    const handleChange = (e)=>{
        const selectedField = e.target.name;
        const selectedValue = e.target.value;

        setUser( prevState => {
          return { ...prevState, [selectedField]: selectedValue}
        })
    }

    return (
    <>
   {
    !success &&
    <div>create User
    <form onSubmit={handleSubmit}>
      <div className='field-group'>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required/>
      </div>
      <div className='field-group'>
      <label htmlFor="name">Age: </label>
      <input type="number" id="age" name="age" value={user.age} onChange={handleChange} required/>
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>

    </div>
    }
    {
      success && <h1>User successfully created.</h1>
    }
    <div>

        <button onClick={ ()=>{
            navigate("/")
        }}>Go to User List</button>
    </div>
    </>
    
  )
}
