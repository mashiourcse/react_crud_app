import React, { useEffect, useState } from 'react'

import { json, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import env from "react-dotenv";

const URL = env.URL;

export const EditUser = () => {

  const navigate = useNavigate();
    
  const [user, setUser] = useState( {
      name: '',
      age: ''
    })

  const [success, setSuccess] = useState(false);
   
    const {id} = useParams();

    const getUserData = ()=>{

      fetch( URL+`/${id}`)
      .then( (res)=>{
        if(!res.ok){
          throw Error("could not patch");

        }else {
          return res.json()
        }
      })
      .then( (data)=>{

        console.log(data.data[0].name);
        setUser( {
          name: data.data[0].name,
          age: data.data[0].age
        })
      })
      .catch( (err)=>{
        console.log(err.message);
      })
    }

    const handleSubmitData = (user)=>{
        
      fetch( URL+`/${id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then( (res)=>{
        if(!res.ok){
          throw Error("could not patch");

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


    useEffect( ()=>{
        getUserData();
    }, [])
    return (
    <>
   {
    !success &&
    <div>Edit User
    <form onSubmit={handleSubmit}>
      <div className='field-group'>
      <label htmlFor="name">Update Name: </label>
      <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required/>
      </div>
      <div className='field-group'>
      <label htmlFor="name">Update Age: </label>
      <input type="number" id="age" name="age" value={user.age} onChange={handleChange} required/>
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>

    </div>
    }
    {
      success && <h1>User successfully updated.</h1>
    }
    <div>

        <button onClick={ ()=>{
            navigate("/")
        }}>Go to User List</button>
    </div>
    </>
    
  )
}
