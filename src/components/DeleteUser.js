import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";

const URL = env.URL;

export const DeleteUser = () => {

    const [isDeleted, setIsDeleted] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = ()=>{
      console.log("DELETE Function")
      fetch(URL + `/${id}`, {
        method: 'DELETE',

      })
      .then( (res)=>{
        if( !res.ok){
          throw Error("could not fetch");
        }else{
          setIsDeleted(true);
        }
        
      })
      .catch( (err)=>{
          console.log(err.message);
      })
    }
    return (
        <div>
        
        <h1>Do you want to delete the user?</h1>
        {isDeleted && <p>Deleted Successfully</p>}
        {!isDeleted && <div>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={ ()=>{
          navigate("/")
        }} >No</button>
        </div>}
        
        </div>
  )
}
